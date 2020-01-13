import React, { Component } from 'react';
import Header from '../Header/Header.js';
import ContactList from '../ContactList/ContactList.js';
import NewContact from '../NewContact/NewContact';
import { Link, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: props.contacts
    }
  }
  render() {
    return <div className="App">
      <Header />
      <Route exact path='/' component={ContactList}>
      </Route>
        <p>app</p>
      </div>;
      <Route exact path='/new-contact' component={NewContact} />
  }
}

export default App;