import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
      <header>
        <h1>Contact List Manager</h1>

        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'../../NewContact/NewContact'}>New Contact</Link>
        </nav>

      </header>
    </div>
  )
}

export default Header
