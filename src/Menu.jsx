import React from 'react';
import {NavLink} from 'react-router-dom'

function Menu() {
    return (
        <div className="menu">
            <NavLink exact activeClassName="active-nav" to='/'> About </NavLink>
            <NavLink exact activeClassName="active-nav" to='/api'> API </NavLink>
            <NavLink exact activeClassName="active-nav" to='/contact'> Contact </NavLink>
        </div>
    )
}

export default Menu
