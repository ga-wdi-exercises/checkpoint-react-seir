import React, { Component } from 'react';

class NewContact extends Component{
  render(){
      
    
    return(
        <div>
            <h1>New Contact</h1>
            <form>
                <input
                    type='text'
                    placeholder='name'
                />
                <input 
                    type='text'
                    placeholder='email'
                />
                <input
                    type='img'
                    placeholder="profile_picture"
                />
                <button>Submit</button>
            </form>
        
        </div>
    )
  }
}

export default NewContact;
