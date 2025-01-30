import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Styles from './LanDropdown.module.css';
import estIcon from '../../../../../public/assets/estIcon.png';
import ukIcon from '../../../../../public/assets/ukIcon.png';
import ruIcon from '../../../../../public/assets/rusIcon.png';
import Image from 'next/image';

const LanDropdown = () => {
    const { locale, locales, push, asPath } = useRouter();
    const [showDropdown, setShowDropdown] = useState(false);

    const languageIcons = {
        'et': estIcon,
        'ru': ruIcon,
        'en': ukIcon
    };

    const handleClick = (language) => () => {
        const pathSegments = asPath.split('/').filter(Boolean);

        let newPath = `/${language}`;
        console.log(newPath);

        newPath += `/teenused/${pathSegments[1]}`;

        push(newPath, undefined, { locale: language });
        setShowDropdown(false);
    };

    return (
        <div className={Styles.languageDropdown}>
            <button
                className={Styles.selectedLanguage}
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <Image
                    className={Styles.icon}
                    src={languageIcons[locale] || ukIcon}
                    alt="Selected language icon"
                />
            </button>
            {showDropdown && (
                <div className={Styles.options}>
                    {locales.map((language) => (
                        <button key={language} onClick={handleClick(language)}>
                            <Image
                                className={Styles.icon}
                                src={languageIcons[language]}
                                alt={`${language} icon`}
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanDropdown;
