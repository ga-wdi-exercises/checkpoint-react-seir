import React, { Component } from 'react';
import Header from '../Header/Header.js'
import ContactList from '../ContactList/ContactList.js'
import NewContact from '../NewContact/NewContact.js'
import { Route } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Route path='/' render={(props) => <ContactList {...props}/>} />
        <Route path='/new-contact' render={() => <NewContact />} />
      </div>
    )
  }
}

export default App;