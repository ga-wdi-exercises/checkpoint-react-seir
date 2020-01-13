import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <h1>Contacts</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new-contact">New Contact</Link>
      </nav>
    </div>
  );
}

export default Header;
