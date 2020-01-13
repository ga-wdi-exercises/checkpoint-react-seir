import React, { Component } from 'react';
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";
import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: props.contacts,
    }
  }
  submitHandle = (e) => {
    let contacts = this.state.contacts.concat;
  }
  render() {
    return <div className="App">
      <Header />
      <Route exact path="/" render={(props) => <ContactList {...props} contacts={this.state.contacts} />} />
      <Route exact path="/new-contact" render={(props) => <NewContact {...props} contacts={this.state.contacts} />} />

    </div>;
  }
}

export default App;