import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Styles from './LanDropdown.module.css';
import estIcon from '../../../../../public/assets/estIcon.png'
import ukIcon from '../../../../../public/assets/ukIcon.png';
import Image from "next/image";

const LanDropdown = () => {
    const icons = [estIcon, ukIcon];

    const [showDropdown, setShowDropdown] = useState(false);
    const { locale, locales, push } = useRouter();

    const languages = locales;

    const handleClick = (language) => () => {
        const currentPath = locale === 'en' ? `/${window.location.pathname.split('/').slice(2).join('/')}` : window.location.pathname;
        push(currentPath, undefined, { locale: language.toLowerCase() });
        setShowDropdown(false);
    };


    return (
        <div className={Styles.languageDropdown}>
            <button className={Styles.selectedLanguage} onClick={() => setShowDropdown(!showDropdown)}>
                <Image className={Styles.icon} src={icons[languages.indexOf(locale)]} alt="" />
            </button>
            {showDropdown && (
                <div className={Styles.options}>
                    {languages.map((language, index) => (
                        <button key={index} onClick={handleClick(language)}>
                            <Image className={Styles.icon} src={icons[index]} alt="" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanDropdown;