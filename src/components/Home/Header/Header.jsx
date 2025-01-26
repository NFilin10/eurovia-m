import React from 'react'
import Styles from './Header.module.css'
import {NavLink, Link} from 'react-router-dom';
import { GiCarWheel } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header({state}) {

    let wheelIcon = {fontSize: "25px", color: "red"}

    return (
        <div className={Styles.HeaderWrapper}>
            <div className={Styles.headerImage}>
                <div className={Styles.HeaderContentContainer}>
                    <div className={Styles.HeaderContent} data-aos="fade-left">
                        <div className={Styles.iconBlock}>
                            <GiCarWheel className={Styles.wheel} style={wheelIcon}/>
                            <p className={Styles.heading}>{state.secondaryHeading}</p>
                        </div>
                        <h1>{state.mainHeading}</h1>
                        <p className={Styles.main}>{state.text}</p>
                        <div className={Styles.ContactBtns}>
                            <span className={Styles.LearnMore}><NavLink to={`/meist`}>{state.buttonReadMore}</NavLink></span>
                            <span className={Styles.Contact}><NavLink to={`/kontakt`}>{state.buttonContact}</NavLink></span>
                        </div>

                    </div>
                </div>
            </div>
            <div className={Styles.navbarOverlay}></div>
        </div>
    );
}

export default Header;
