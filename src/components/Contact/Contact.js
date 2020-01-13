import React, { Component } from 'react';

class ContactList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: props.profile_picture
    }
  }

  render() {
    return (
    <div className="contact">
        <h3>name</h3>
        <h4>email</h4>
      </div>
    )
  }
}

export default ContactList;