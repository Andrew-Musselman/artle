import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav className='nav'>
            <NavLink to='/'><h1>ARTLE</h1></NavLink>
            <NavLink to='/About'><p>About</p></NavLink>
            <NavLink to='/GameStats'><p>Game Stats</p></NavLink>
        </nav>
    )
}

export default Nav;