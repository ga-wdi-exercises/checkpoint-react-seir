import React, { Component } from 'react';

import Header from '../Header/Header'
import { Route } from 'react-router';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: props.contacts
    }

    addContact = (contact) => {
      let contacts = this.state.contacts
      contacts.push(obj)
      this.setState({
        contacts: contacts,
      })
    }

  }
  render() {
    return <div className="App">
      <Header />
      <Route path="/" component={ContactList} />
      <Route path="/new-contact" render={props => <NewContact addContact={this.addContact} /> } />
        <p>app</p>
      </div>;
  }
}

export default App;