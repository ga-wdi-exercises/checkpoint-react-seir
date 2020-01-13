import React from 'react'


function Contact() {

    return (
        <div className='contact'>
            <img src={this.props.profile_picture} alt='pic' />
            <h3>{this.props.name}</h3>
            <h4>{this.props.email}</h4>
        </div>
    )
}

export default Contact;