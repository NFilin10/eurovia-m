import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import Styles from './Navbar.module.css';

const Navbar = ({ state }) => {
    const [isMenu, setIsMenu] = useState(false);
    const [isResponsiveClose, setIsResponsiveClose] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const toggleClass = () => {
        setIsMenu(!isMenu);
        setIsResponsiveClose(!isResponsiveClose);
    };

    const toggleSubmenu = (menuIndex) => {
        setActiveSubMenu(activeSubMenu === menuIndex ? null : menuIndex);
    };

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const { logo, menuItems } = state;

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
                        <NavLink exact="true" activeClassName={Styles.isActive} to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
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
                                        <Link to={item.to}>
                                            {item.text} {item.subMenu && <FiChevronDown />}
                                        </Link>

                                        {item.subMenu && (
                                            <ul className={`${Styles.subMenus} ${
                                                activeSubMenu === index ? Styles.subMenusActive : ''}`}>
                                                {item.subMenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <NavLink
                                                            to={subItem.to}
                                                            activeClassName={Styles.isActive}
                                                            onClick={toggleClass}
                                                        >
                                                            {subItem.text}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}

                                <li className={`${Styles.menuItem} ${Styles.bookTimeBtn}`}>
                                    <NavLink
                                        to="/Contact"
                                        activeClassName={Styles.isActive}
                                        onClick={toggleClass}
                                    >
                                        Broneeri aeg
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;
