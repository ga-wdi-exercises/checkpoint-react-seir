import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'
// import './styles/index.css';
import contactList from '../ContactList/ContactList';
import newContact from '../NewContact/NewContact';

// import contacts from "./contacts.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts : props.contacts
    }
    
  }
  
  render() {
    return (
      <BrowserRouter>
    <div className="App">
      <header />
      <Route exact={true} path="/" Component={ContactList}/>
      <Route path="/newContact" Component={NewContact} />
        <p>app</p>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;