import React, { Component } from 'react';
import Header from "../Header/Header"
import NewContact from "../NewContact/NewContact"
import ContactList from "../ContactList/ContactList"
import { Route } from "react-router-dom";

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
        <Header/>
         <nav>
            <Route path="/"  render={() => <NewContact/>}/>
            <Route path="/new-contact" render={() => <ContactList contacts={this.state.contacts}/>}/>  
          </nav>
      </div>
      
      )
  }
}

export default App;
