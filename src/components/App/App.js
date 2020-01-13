import React, { Component } from 'react';
import ContactsList from './contacts.json'

class App extends Component {
constructor(props){
  super(props)

this.state = {
  datalist: []
}



}



  render() {
    return <div className="App">
        <p>app</p>
      </div>;
  }
}

export default App;