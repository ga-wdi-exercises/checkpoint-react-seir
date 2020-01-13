import React, { Component } from 'react';
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import { Route } from 'react-router-dom'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      contacts: this.props.contacts
    }
  }

  addNewContact = (contact) => {
    const contactList = this.state.contacts
    contactList.push(contact)
    this.setState({
      contacts: contactList
    })
  }

  render() {
    console.log(this.state.contacts)
    return (
      <div className="App">
        <Header />
        <Route path='/' exact render={(props) => <ContactList {...props} contacts={this.state.contacts} />} />
        <Route path='/new-contact' render={(props) => <NewContact {...props} onSubmit={this.addNewContact} />} />
      </div>
    )
  }
}

export default App;