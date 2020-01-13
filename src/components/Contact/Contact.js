import React, { Component } from 'react';


class Contact extends Component {
  
  render() {
    return <div className="contact">
        <img> { profile_picture } </img>
        <h3>Name: </h3>
        <h4>Email: </h4>
      </div>;
  }
}

export default Contact;