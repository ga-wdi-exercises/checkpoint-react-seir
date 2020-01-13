import React from 'react'
import { Link } from 'react-router-dom';

function Header() {

  return (
    <header>
      <h1>Contacts</h1>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/new-contact">NEW CONTACT</Link>
      </nav>
    </header>
  )
}

export default Header;