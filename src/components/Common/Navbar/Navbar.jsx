import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";

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
        <header className="header__middle">
            <div
                className="container"
                style={{
                    backgroundColor: isHomePage ? 'transparent' : 'black',
                }}
            >
                <div className="row">

                    <div className="header__middle__logo">
                        <NavLink exact="true" activeClassName="is-active" to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>

                    <div className="header__middle__menus">
                        <nav className="main-nav">
                            {isResponsiveClose ? (
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass}>
                                    <FiXCircle />
                                </span>
                            ) : (
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass}>
                                    <FiAlignRight />
                                </span>
                            )}

                            <ul className={`main-menu menu-right menuq1 ${isMenu ? 'menuq2' : ''}`}>
                                {menuItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`menu-item ${item.subMenu ? 'sub__menus__arrows' : ''}`}
                                        onClick={() => item.subMenu && toggleSubmenu(index)}
                                    >
                                        <Link to={item.to}>
                                            {item.text} {item.subMenu && <FiChevronDown />}
                                        </Link>

                                        {item.subMenu && (
                                            <ul className={`sub__menus ${activeSubMenu === index ? 'sub__menus__Active' : ''}`}>
                                                {item.subMenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <NavLink
                                                            to={subItem.to}
                                                            activeClassName="is-active"
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

                                <li className="menu-item book-time-btn">
                                    <NavLink
                                        to="/Contact"
                                        activeClassName="is-active"
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
