import React from 'react'
import Contact from './../Contact/Contact';

function ContactList(props) {

  return (
    <div className="contact-list">
      {props.contacts.map((c, idx) => {
        return <Contact key={idx} contact={c} />
      })}
    </div>
  )
}

export default ContactList;