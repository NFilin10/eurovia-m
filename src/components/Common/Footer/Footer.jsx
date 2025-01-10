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
                        <p className={Styles.question}>Soovite helistada meile?</p>
                        <div className={Styles.icon}>
                            <FaPhone style={iconStyles}/>
                            <div className={Styles.contactInfo}>
                                <p>telefon</p>
                                <p>473 4837248</p>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.contactElem}>
                        <p className={Styles.question}>Sooite kirjutada meile?</p>
                        <div className={Styles.icon}>
                            <MdEmail style={iconStyles}/>
                            <div className={Styles.contactInfo}>
                                <p>email</p>
                                <p>euroviam@hot.ee</p>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.contactElem}>
                        <p className={Styles.question}>Soovite külastada meid?</p>
                        <div className={Styles.icon}>
                            <IoLocationSharp style={iconStyles}/>
                            <div className={Styles.contactInfo}>
                                <p>Asukoht</p>
                                <p>suur manniku 8</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
