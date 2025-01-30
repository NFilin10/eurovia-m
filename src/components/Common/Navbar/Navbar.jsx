import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import Styles from './Navbar.module.css';
import {logout} from "../../../http/authentication";
import Link from "next/link";
import Image from "next/image";
import {useTranslation} from "next-i18next";
import LanDropdown from "@/components/Common/Navbar/LanDropdown/LanDropdown";

const Navbar = ({ staticData, setIsAuthenticated, isAuthenticated }) => {
    const [isMenu, setIsMenu] = useState(false);
    const [isResponsiveClose, setIsResponsiveClose] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const { t } = useTranslation('common')

    const toggleClass = () => {
        setIsMenu(!isMenu);
        setIsResponsiveClose(!isResponsiveClose);
    };

    const toggleSubmenu = (menuIndex) => {
        setActiveSubMenu(activeSubMenu === menuIndex ? null : menuIndex);
    };

    const location = useRouter();
    const isHomePage = location.pathname === "/";

    const { logo, menuItems } = staticData;


    return (
        <header className={Styles.headerMiddle}>
            <div
                className={Styles.container}
                style={{
                    backgroundColor: isHomePage ? 'transparent' : 'black',
                }}
            >
                <div className={Styles.row}>

                    <div className={Styles.headerMiddleLogo}>
                        <Link exact="true" activeClassName={Styles.isActive} href="/">
                            <Image  className={Styles.logo} src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div className={Styles.headerMiddleMenus}>
                        <nav className={Styles.mainNav}>
                            {isResponsiveClose ? (
                                <span className={Styles.menubarButton} style={{ display: 'none' }} onClick={toggleClass}>
                                    <FiXCircle />
                                </span>
                            ) : (
                                <span className={Styles.menubarButton} style={{ display: 'none' }} onClick={toggleClass}>
                                    <FiAlignRight />
                                </span>
                            )}

                            <ul className={`${Styles.mainMenu} ${Styles.menuRight} ${Styles.menuq1} ${
                                isMenu ? Styles.menuq2 : ''}`}>
                                {menuItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`${Styles.menuItem} ${item.subMenu ? Styles.subMenusArrows : ''}`}
                                        onClick={() => item.subMenu && toggleSubmenu(index)}
                                    >
                                        <Link href={item.to}>
                                            {t(`navbar.menuItems.${index}.text`)} {item.subMenu && <FiChevronDown/>}
                                        </Link>

                                        {item.subMenu && (
                                            <ul className={`${Styles.subMenus} ${
                                                activeSubMenu === index ? Styles.subMenusActive : ''}`}>
                                                {item.subMenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            activeClassName={Styles.isActive}
                                                            onClick={toggleClass}
                                                         href={"/teenused" + subItem.to}>
                                                            {t(`navbar.menuItems.0.subMenu.${subIndex}.text`)}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                                {
                                    isAuthenticated && <li className={`${Styles.menuItem1} `}>
                                        <button className={`${Styles.logoutBtn}`} onClick={() => logout(setIsAuthenticated)}>Log out</button>
                                    </li>
                                }
                                <LanDropdown/>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;
