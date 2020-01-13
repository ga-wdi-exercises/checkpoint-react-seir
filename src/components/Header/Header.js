import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
        <header>
            <h1>Contacts App</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/new-contact">New Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header;