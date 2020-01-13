import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Header from "../Header/Header"
import ContactList from "../ContactList/ContactList"
import NewContact from "../NewContact/NewContact"


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: props.contacts
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" render={props => <ContactList />} />
        <Route path="/new-contact" render={props => <NewContact />} />
        {/* <p>{app}</p> */}
      </div>
    );
  }
}

export default App;
