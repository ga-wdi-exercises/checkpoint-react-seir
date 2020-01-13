import React, { Component } from 'react';
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import { Route, Switch } from 'react-router-dom'

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
      <Switch>
<Route exact path='/'
render={(props) => (
<ContactList
    contacts={this.state.contacts}
/>
)}

/>
<Route path = '/new-contact' Component={NewContact}/>

      </Switch>
    </div>;
  }
}

export default App;