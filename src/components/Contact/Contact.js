import React, { Component } from "react";
import { render } from "enzyme";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={this.props.contact.profile_picture} alt="" />
        <h3>{this.props.contact.name}</h3>
        <h4>{this.props.contact.email}</h4>
      </div>
    );
  }
}

export default Contact;
