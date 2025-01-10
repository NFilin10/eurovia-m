import React from 'react'
import workman from "../../../assets/car-service-330.avif"
import Styles from './Header.module.css'
import {NavLink, Link} from 'react-router-dom';


function Header() {

    return (
        <div className={Styles.HeaderWrapper}>
            <div className={Styles.headerImage}>
                <div className={Styles.HeaderContentWrapper}>
                    <div className={Styles.HeaderContent}>
                        <p className={Styles.heading}>Me oleme Eurovia-m</p>
                        <h1>Eurovia-m – täpsus ja usaldusväärsus teie rehvide hoolduses</h1>
                        <p className={Styles.main}> Pakume kiiret rehvide vahetust, professionaalset remonti, protekteerimist ja mugavat rehvi hotelli. Meie eesmärk on tagada, et teie auto rehvid oleks alati valmis igaks sõiduks – turvaliselt ja usaldusväärselt. Eurovia-m, teie partner igal teel!</p>
                        <div className={Styles.ContactBtns}>
                            <span className={Styles.LearnMore}><NavLink to={`/Online`}> Uuri rohkem </NavLink></span>
                            <span className={Styles.Contact}><NavLink to={`/Online`}> Võta ühendust </NavLink></span>
                        </div>

                    </div>
                </div>
            </div>
            <div className={Styles.navbarOverlay}></div>
        </div>
    );
}

export default Header;
