import React from "react";
// import { Link } from "react-router-dom";

function ContactList(props) {

    console.log(props)

    const character = props.contact.map(contact => {
        return(
            <div className='contact-list' key={contact.name}>
                {contact.image}
                {contact.name}
                {contact.email}
            </div>
        )
    })
    return (
        <div className='contact-list'>
            {character}
        </div>
    )
}

export default ContactList;