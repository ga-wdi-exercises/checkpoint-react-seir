import React, { Component } from 'react';


class NewContact extends Component {
    state = {
        name: ''
    };
  
  render() {
    return <div>
        <h1> New Contact</h1>
            <form onSubmit={}>
                <div>
                    <input
                    type="text"
                    name="name"
                    email="email"
                    img="profile_picture"
                    />
                </div>
            </form>
      </div>;
  }
}

export default NewContact;