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
                        <p className={Styles.heading}>We are Eurovia-m</p>
                        <h2>detail & precision car tire service</h2>
                        <p className={Styles.main}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor odio, luctus at dui sit amet, malesuada scelerisque risus. Curabitur vitae consectetur justo, sed condimentum risus. Curabitur eros nunc, iaculis sit amet sollicitudin nec, posuere nec quam. Phasellus sagittis neque in egestas scelerisque. Integer et feugiat magna. </p>
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
