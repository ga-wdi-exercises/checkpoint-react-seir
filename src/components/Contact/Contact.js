import React from 'react'

function Contact (props) {

    return(
        <div className="contact">
            <img src="props.contact.profill_picture" />
            <h3>{props.contact.profile_picture}</h3>
            <h4>{props.contact.email}</h4>
            
        </div>
    )
}

export default Contact