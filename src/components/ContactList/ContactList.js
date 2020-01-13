import React, { Component } from 'react';

class ContactList extends Component{
  render(){
      
      let contact= this.props.contacts.map(item => {
          return(
              <div className='contact-list' key={item.name}>
                <img src= {"item.profile_picture"} alt='item image'></img>
                {item.name}
                {item.email}
              </div>
              
          )
      })
    
    return(
        <div>
        {contact}
        
        </div>
    )
  }
}

export default ContactList;