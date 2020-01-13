import React from 'react'
import { Link } from "react-router-dom";
 
function Header() {

    return (
        <div className='header'>
            <header>
                <h1>header</h1>
            </header>
            <nav>
                <Link path='/' />
                <Link path='/new-contact' />
            </nav>
        </div>
    )
}

export default Header