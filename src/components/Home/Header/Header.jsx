import React from 'react'
import workman from "../../../assets/car-service-330.avif"
import Styles from './Header.module.css'
import {NavLink, Link} from 'react-router-dom';
import { GiCarWheel } from "react-icons/gi";


function Header({state}) {

    let wheelIcon = {fontSize: "25px", color: "red"}

    return (
        <div className={Styles.HeaderWrapper}>
            <div className={Styles.headerImage}>
                <div className={Styles.HeaderContentContainer}>
                    <div className={Styles.HeaderContent}>
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
