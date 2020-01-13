import React, { Component } from "react";
import Header from "../Header/Header";
import { Route } from "react-router";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: props.contacts
    };
  }

  handleSubmit() {
    this.setState(prevState => {
      //Logic to add NewContact info to the state array here in App with setState
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route
          path="/"
          exact
          render={props => (
            <ContactList contacts={this.state.contacts} {...props} />
          )}
        />
        <Route
          path="/new-contact"
          render={props => (
            <NewContact {...props} onSubmit={this.handleSubmit} />
          )}
        />
      </div>
    );
  }
}

export default App;
