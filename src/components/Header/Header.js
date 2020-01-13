import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <h1>Contact List</h1>
      </header>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/new-contact"> New Contact </Link>
      </nav>
    </div>
  );
}
