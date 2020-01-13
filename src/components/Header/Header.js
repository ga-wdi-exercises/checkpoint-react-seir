import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  
  render() {
    return <div className="Header">
        <h1>Header</h1>
        <nav>
            <Link to="/" className="homeLink"> Homepage </Link>
            <Link to="/new-Contact" className="newContactLink"> New Contact </Link>
        </nav>
      </div>;
  }
}

export default Header;