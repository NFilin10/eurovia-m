import React from 'react'
import Styles from './Header.module.css'
import { GiCarWheel } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";
import {useTranslation} from "next-i18next";

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
                            <span className={Styles.LearnMore}><Link href={`/meist`}>{state.buttonReadMore}</Link></span>
                            <span className={Styles.Contact}><Link href={`/kontakt`}>{state.buttonContact}</Link></span>
                        </div>

                    </div>
                </div>
            </div>
            <div className={Styles.navbarOverlay}></div>
        </div>
    );
}

export default Header;
