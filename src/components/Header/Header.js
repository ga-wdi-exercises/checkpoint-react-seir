import React from "react"
import { Link } from "react-router-dom";

function Header(props) {
    return(
        <div>
            <h1>Header!</h1>
            <nav>
                <Link to="/contact" >Contact</Link>
                <Link to='/' >Home</Link>
            </nav>
        </div>
    )
}

export default Header