import React from "react";

function Contact(props){
    return(
        <div className="contact">
            <img src={props.image}/>
            <h3>{props.name}</h3>
            <h4>{props.email}</h4>
        </div>


    )
}

export default Contact;