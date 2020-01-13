import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contacts: this.contacts
    }
  }
  render() {
    return <div className="App">
        <Header />
        <Route exact path="/" component={ContactList} />
        <Route exact path="/new-contact" component={NewContact}/>
      </div>;
  }
}

export default App;