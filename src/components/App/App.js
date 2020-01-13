import React, { Component } from 'react';
import Navigation from './Navigation'
import { Switch, Route } from 'react-router';


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
      <Navigation />
        <Switch>
          <Route path="/" component={ContactList}/>
          <Route path="/new-contact" component={NewContact} />
        </Switch> 
      </div>
    )
  }
}

export default App;