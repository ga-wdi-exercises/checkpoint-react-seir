import React, { Component } from 'react';
import Header from './../Header/Header';
import ContactList from './../ContactList/ContactList';
import NewContact from './../NewContact/NewContact';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      contacts: props.contacts
    }
  }

  updateContacts = (contacts) => {

  }

  handleSubmit(e) {
    e.preventDefault();
  }


  render() {
    return <div className="App">
        <Header />
        <Switch>
          <Route path="/new-contact"
                 render={() => (<NewContact />)}>
          </Route>
          <Route path="/" exact
            render={() =>
              (<ContactList
                updateContacts={this.updateContacts}
                handleSubmit={this.handleSubmit} />
              )}>
          </Route>
        </Switch>
        <p>app</p>
      </div>;
  }
}

export default App;