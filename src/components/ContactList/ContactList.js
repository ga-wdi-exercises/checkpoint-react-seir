import React from "react";
import Contact from "../Contact/Contact";

function ContactList(props){
    return(
        <div className="contact-list">
        {props.contacts.map(item => <div><Contact name={item.name} email={item.email} image={item.profile_picture}/></div>)}
        </div>

    )
}

export default ContactList;