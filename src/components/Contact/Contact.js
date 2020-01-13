import React, { Component } from 'react';

class Contact extends Component{
  render(){
      
    
    return(
        <div className='contact'>
            <img src= {props.contacts[0].profile_picture} alt='profile picture'></img>
            <h3>{props.contact[0].name}</h3>
            <h4>{props.contact[0].email}</h4>
        </div>
       
    )
  }
}

export default Contact;