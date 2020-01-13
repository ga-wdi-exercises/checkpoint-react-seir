import React from 'react';
import Contact from '../Contact/Contact'

function ContactList(props) {


let contacts = props.contacts.map(item => {
return(
 <Contact
person={item}
/> 
)
})

    return (
        <div className='contact-list'>
        {contacts}
        </div>
    )
}

export default ContactList