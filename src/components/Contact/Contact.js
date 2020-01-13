import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <img src={this.props.contacts.profile_picture} alt="" />
                <h3>{this.props.contacts.name}</h3>
                <h4>{this.props.contacts.email}</h4>
            </div>
        )
    }
}

export default Contact;
