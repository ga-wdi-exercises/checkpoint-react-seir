import React, { Component } from 'react';
import contacts from '/Users/nicolegumina/sei/lessons/checkpoint-react-seir/src/contacts.json';
import Contact from '../Contact/Contact.js'

class ContactList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            contacts: props.contacts
        }
    }

    render () {
        return (

            <div className='contact-list'>
                <Contact />
            </div>
        )
    }

}


export default ContactList;