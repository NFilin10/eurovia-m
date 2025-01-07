
import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from '../../../assets/logo-modified.png'


const Navbar = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };

    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }



    return (
        <header className="header__middle">
            <div className="container">
                <div className="row">

                    {/* Add Logo  */}
                    <div className="header__middle__logo">
                        <NavLink exact activeClassName='is-active' to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>

                    <div className="header__middle__menus">
                        <nav className="main-nav " >

                            {/* Responsive Menu Button */}
                            {isResponsiveclose === true ? <>
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                            </> : <>
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                            </>}


                            <ul className={boxClass.join(' ')}>
                                <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows"><Link
                                    to="#"> Teenused <FiChevronDown/> </Link>
                                    <ul className={boxClassSubMenu.join(' ')}>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active'
                                                     to={`/Online`}> Sõiduautode rehvide vahetus </NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active'
                                                     to={`/Offline`}> Veoautode rehvide vahetus </NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active'
                                                     to={`/Offline`}> Protekteerimine </NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active'
                                                     to={`/Offline`}> Rehvide remont </NavLink></li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active'
                                                     to={`/Offline`}> Rehvide hotell </NavLink></li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <NavLink exact activeClassName='is-active' onClick={toggleClass}
                                             to={`/`}> Hinnakiri </NavLink>
                                </li>
                                <li className="menu-item "><NavLink onClick={toggleClass} activeClassName='is-active'
                                                                    to={`/About`}> Meist </NavLink></li>
                                <li className="menu-item "><NavLink onClick={toggleClass} activeClassName='is-active'
                                                                    to={`/Contact`}> Kontakt </NavLink></li>

                                <li className="menu-item book-time-btn"><NavLink onClick={toggleClass} activeClassName='is-active'
                                                                    to={`/Contact`}> Broneeri aeg </NavLink></li>
                            </ul>


                        </nav>
                    </div>


                </div>
            </div>
        </header>
    )
}

export default Navbar
