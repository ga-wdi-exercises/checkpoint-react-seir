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
        <Contacts />
        <Header />
      </div>;
  }
}

export default App;