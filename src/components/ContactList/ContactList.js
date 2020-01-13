import React from 'react'
import Contact from '../Contact/Contact'

function ContactList(props) {
    return (
        <div className='contact-list'>
            {props.contacts.map((contact, idx) => {
                return <Contact key={idx} contact={contact}/>
            })}
        </div>
    )
}
export default ContactList