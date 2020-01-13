import React from 'react'
import Contact from 'react'

export default class ContactList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const contacts = this.props.contacts.map(contact => {
            <Contact contact={contact} />
        })
        return (
            <div className='contact-list'>
                {contacts}
            </div>
        )
    }
}