import React from 'react';
import Styles from './Footer.module.css'
import {NavLink} from "react-router-dom";


const Footer = ({state}) => {


    const footerElements = state.footerItems.map((item) =>
        <div className={Styles.contactElem}>
            <p className={Styles.question}>{item.heading}</p>
            <div className={Styles.icon}>
                {item.icon}
                <div className={Styles.contactInfo}>
                    <p>{item.contactChoice}</p>
                    <p>{item.value}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className={Styles.footerWrapper}>
            <div className={Styles.footerContainer}>
                <div className={Styles.header__middle__logo}>
                    <NavLink exact activeClassName='is-active' to="/">
                        <img className={Styles.footerImg} src={state.logo} alt="logo"/>
                    </NavLink>
                </div>

                <div className={Styles.Contacts}>
                    {footerElements}
                </div>
            </div>
        </div>
    )
}

export default Footer
