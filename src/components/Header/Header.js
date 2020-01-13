import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {

render () {
    return (
        <div>
            <header>
                <h1></h1>
            </header>
             <NavLink className="nav1" to="/">homepage</NavLink>
             <NavLink className="nav1" to="/new-contact">new contact</NavLink>
        </div>
        )
    }
}
export default Header;

