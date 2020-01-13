import React, { Component } from 'react';
import { Router, Switch, Link, Route } from 'react'
import Contacts from '../../contacts.json'
import Header from '../Header/Header.js'
import ContactList from '../ContactList/ContactList.js'
import NewContact from '../NewContact/NewContact.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      contacts: props.contacts
    }
  }
  render() {
    return <div className="App">
        <Router>
          <Header />
          <Route component={ContactList} contacts={this.state.contacts}/>
          <Route component={NewContact}/>
          <p>app</p>
        </Router>
      </div>;
  }
}

export default App;