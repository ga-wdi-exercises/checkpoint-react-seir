import React from 'react';
import './App.css';


function Header() {
  return (
    <div className="Header">
        <header>
            <h1>test</h1>
            <nav>
            <Link to="/">
               <li>Homepage</li>
           </Link>
           <Link to="/new-contact">
               <li>new-contact</li>
           </Link>
            </nav>
        </header>
    </div>
  );
}

export default Header;
