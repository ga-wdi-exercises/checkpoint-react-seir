import React, { Component } from 'react';

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
        <div>app
        <Switch>
            <Route exact path="/" />
              <ContactList contacts={this.props.contacts}/>
            <Route path="/new-contact" /> 
              <NewContact />
            <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>

          </div>

      </div>;
  }
}

export default App;