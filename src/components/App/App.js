import React, { Component } from 'react';
import {Route, Link, BrowserRouter, Switch} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      contacts: props.contacts
    }
  }
  render() {
    return <div className="App">
        <p>app</p>
        <Header />
        <Route path="/" component={ContactList} />
          <ContactList contacts={this.state.contacts} />
        <Route path="/new-contact" component={NewContact} />
      </div>;
  }
}

export default App;