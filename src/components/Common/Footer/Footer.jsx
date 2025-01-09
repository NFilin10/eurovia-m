import React from 'react';
import Styles from './Footer.module.css'
import {NavLink} from "react-router-dom";
import logo from "../../../assets/logo-modified.png";
import {FaPhone} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";




const Footer = () => {

    let iconStyles = {fontSize: "30px", color:"red"};

    return (
        <div className={Styles.footerWrapper}>
            <div className={Styles.footerContainer}>
                <div className={Styles.header__middle__logo}>
                    <NavLink exact activeClassName='is-active' to="/">
                        <img src={logo} alt="logo"/>
                    </NavLink>
                </div>

                <div className={Styles.Contacts}>
                    <div className={Styles.contactElem}>
                        <p>want to call us?</p>
                        <div className={Styles.icon}>
                            <FaPhone style={iconStyles}/>
                            <div className={Styles.contactInfo}>
                                <p>phone</p>
                                <span>473 4837248</span>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.contactElem}>
                        <p>want to email with us?</p>
                        <div className={Styles.icon}>
                            <MdEmail style={iconStyles}/>
                            <div className={Styles.contactInfo}>
                                <p>email</p>
                                <span>euroviam@hot.ee</span>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.contactElem}>
                        <p>want to visit us?</p>
                        <div className={Styles.icon}>
                            <IoLocationSharp style={iconStyles}/>
                            <div className={Styles.contactInfo}>
                                <p>location</p>
                                <span>suur manniku 8</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
