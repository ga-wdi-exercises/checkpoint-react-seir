import React from "react";
import { Link } from "react-router-dom";

function Header() {

    return (
        <nav>
            <h1 className='header-title'>Contacts</h1>
            <Link to='/' className='header-link'>
                <span>Home</span>
            </Link>
            <Link to='/new-contact' className='header-link'>
                <span>New Contact</span>
            </Link>
        </nav>
    )
}

export default Header;