import React from 'react';
import Styles from './Footer.module.css'
import Link from "next/link";
import Image from "next/image";
import {useTranslation} from "next-i18next";
import {FaPhone} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";
import {IoLocationSharp} from "react-icons/io5";

let iconStylesFooter = {fontSize: "30px", color:"red"};


const iconMap = {
    icon1: <FaPhone style={iconStylesFooter} />,
    icon2: <MdEmail style={iconStylesFooter} />,
    icon3: <IoLocationSharp style={iconStylesFooter} />
};

const Footer = ({staticData}) => {

    const { t } = useTranslation('common')

    const footerElements = staticData.footerItems.map((item, index) =>
        <div className={Styles.contactElem}>
            <p className={Styles.question}>{t(`footer.footerItems.${index}.heading`)}</p>
            <div className={Styles.icon}>
                {iconMap[staticData.footerItems[index].icon]}
                <div className={Styles.contactInfo}>
                    <p>{t(`footer.footerItems.${index}.contactChoice`)}</p>
                    <p>{staticData.footerItems[index].value}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className={Styles.footerWrapper}>
            <div className={Styles.footerContainer}>
                <div className={Styles.header__middle__logo}>
                    <Link exact activeClassName='is-active' href={"/"}>
                        <Image className={Styles.footerImg} src={staticData.logo} alt="logo"/>
                    </Link>
                </div>

                <div className={Styles.Contacts}>
                    {footerElements}
                </div>
            </div>
        </div>
    )
}

export default Footer
