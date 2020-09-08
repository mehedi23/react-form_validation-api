import React from 'react';
import {NavLink} from 'react-router-dom'

function Menu() {
    return (
        <div className="menu">
            <NavLink exact activeClassName="active-nav" to='/react-form_validation-api'> About </NavLink>
            <NavLink exact activeClassName="active-nav" to='/react-form_validation-api/api'> API </NavLink>
            <NavLink exact activeClassName="active-nav" to='/react-form_validation-api/contact'> Contact </NavLink>
        </div>
    )
}

export default Menu
