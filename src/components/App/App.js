import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Header from "../Header/Header"
import ContactList from "../ContactList/ContactList"
import NewContact from "../NewContact/NewContact"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: props.contacts
    }
  }

  updateContacts = (name, email, image) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: name, email: email, profile_picture: image }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={props => <ContactList contacts={this.state.contacts} />}
          />
          <Route
            path="/new-contact"
            exact
            render={props => <NewContact contUpdate={this.updateContacts} />}
          />
        </Switch>
        <p>app</p>
      </div>
    );
  }
}

export default App;