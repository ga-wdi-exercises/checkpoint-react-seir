import React from 'react'

import Contact from '../Contact/Contact'

function ContactList (props) {
    const contactList = props.contacts

    return (
        <div className="contact-list">
            {contactList.map(contact => (
                <Contact contact={contact} />
            ))}
        </div>
    )
}

export default ContactList