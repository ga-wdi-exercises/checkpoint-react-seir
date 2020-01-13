import React from 'react'
import {Link} from 'react-router-dom'

function Header () {

    return (
        <header>
            <h1>Contacts</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/new-contact" />
            </nav>
        </header>
    )
}

export default Header