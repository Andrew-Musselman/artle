import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <NavLink to='/'><h1>ARTLE</h1></NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/GameStats'>Game Stats</NavLink>
        </>
    )
}

export default Nav;