import React from 'react';
import{ Link } from 'react-router-dom'


function Header(props) {

    return (
        <div>
            <header>
               <h1></h1> 
            </header>
            <nav>
               <Link to ='/'>

               </Link>
               <Link to ='/new-contact'>
                   
               </Link>

            </nav>
            
           
            
        </div>
    )
}
export default Header