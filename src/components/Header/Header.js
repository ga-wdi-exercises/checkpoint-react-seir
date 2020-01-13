import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     contacts: props.contacts
  //   }
  //   console.log('state',this.state)

  render() {
    return (
      <div className="App">
        <header>
          <h1>Contacts</h1>
          <nav>
            <div>
              <Link to="/">Home</Link>
            </div>
            
            <div className="newcontact">
              <Link to="/newcontact"> New Contact</Link>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
