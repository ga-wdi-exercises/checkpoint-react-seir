import React from 'React'
import Contact from '../Contact/Contact.js'


function ContactList(contacts) {

    return (
        <div classname="contact-lst">
            <Contact contact={this.props.contacts}/>
        </div>
    )
}



export default ContactList;