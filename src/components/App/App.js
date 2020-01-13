import React, { Component } from 'react';
import Header from './Header/Header'
import ContactList from './ContactList/ContactList'
import NewContact from './NewContact/NewContact'
import{ Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      contacts: props.contacts
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <p>app</p> 
        <Route exact path='/' render= {props=> <ContactList {...props} contacts={this.props.contacts}/>}></Route>
        <Route path='/new-contact' render= {props=> <NewContact {...props} contacts={this.props.contacts}/>}></Route>
      </div>
    )
  }
}

export default App;