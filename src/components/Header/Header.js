import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <header>
      <h1>Header</h1>
    </header>
    <nav>
      <Link to="/"><button>Home</button></Link>
      <Link to="/new-contact"><button>Contact List</button></Link>
    </nav>
  </div>
)
export default Header;