import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <h1>
             <nav>
                <Link to="/" className="link">Home</Link>
                <Link to="/new-contact" className="link">Contacts</Link>
             </nav>
            </h1>
        </header>

    
    )
}

export default Header;