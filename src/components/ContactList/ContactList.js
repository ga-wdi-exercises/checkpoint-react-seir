import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Contact from "../Contact/Contact"

class ContactList extends Component {
  render() {
    return (
      <div>
        <Contact />
        <div className="contact-list"></div>
      </div>
    );
  }
}

export default ContactList;
