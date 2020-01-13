import React from "react";
import Contact from "../Contact/Contact"

function ContactList(props) {
    let contacts = props.contacts.map((contact) => {
    return (<Contact contact={contact} />)
  })

  return (
    <div className="contact-list">
        {contacts}
    </div>
  );
}

export default ContactList;
