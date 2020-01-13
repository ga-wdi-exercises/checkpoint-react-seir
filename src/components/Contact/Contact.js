import React from 'react';

function Contact(props) {
    console.log(props.person)
    return (
        <div className='contact'>
            <img src={props.person.profile_picture} />
            <h3>{props.person.name}</h3>
            <h4>{props.person.email}</h4>
        </div>
    )
}

export default Contact