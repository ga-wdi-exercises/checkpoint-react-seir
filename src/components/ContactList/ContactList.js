import React from 'react'
import Contact from '../Contact/Contact'

export default class ContactList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='contact-list'>
                {this.props.contacts.map(contact => (
                    <Contact contact={contact} />
                ))}
            </div>
        )
    }
}