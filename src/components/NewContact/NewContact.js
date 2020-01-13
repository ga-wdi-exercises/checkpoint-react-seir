import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class NewContact extends Component {

componentDidUpdate(prevProps, prevState) {
    
}


    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form>
                    <input type="text" name="name" />
                    <input type="text" name="email" />
                    <input type="text" name="profile_picture" />
                </form>
            </div>
        )
    }
}

export default NewContact
