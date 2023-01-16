import React, { useState, useContext} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { themeContext } from '../../contexts/themeContext';

import './Header.styles.css';

export default function Header() {
    const [menu, setMenu] = useState(false);
    const {theme, toggleTheme} = useContext(themeContext);

    function displayMenu() {
        setMenu(!menu);
    }

    return (
        <header className='header'>
            <Link className='site-name' to='/'>developerjulian</Link>
            <button className='menu-icon' onClick={displayMenu}>
                {menu ? <AiOutlineClose size='30' color='#FFFFFF' /> : <GiHamburgerMenu size='30' color='#FFFFFF' />}
            </button>
            <nav className={menu ? 'menu-styling show-menu' : 'menu-styling'}>
                <NavLink to='/#home' onClick={displayMenu}>Home</NavLink>
                <NavLink to='/about' onClick={displayMenu}>About</NavLink>
                <NavLink to='/projects' onClick={displayMenu}>Projects</NavLink>
                <a href="#contact" rel="noopener noreferrer">Contact</a>
                <button onClick={toggleTheme} className='theme-button'>
                    {theme ?  
                    <MdDarkMode size='30' color='#FFFFFF' onClick={toggleTheme} style={{cursor: 'pointer'}} />
                : <MdLightMode size='30' color='#FFFFFF' onClick={toggleTheme} style={{cursor: 'pointer'}} /> }
                </button>
            </nav>
        </header>
    );
};
