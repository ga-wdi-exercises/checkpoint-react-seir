import React, { Component } from 'react';
import Header from '../Header/Header'
import Contact from '../Contact/Contact'
import NewContact from '../NewContact/NewContact'
import { Route } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: props.contacts
    }
    console.log('state',this.state)
  }
  
  render() {
    return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
      <Route 
          path="/" 
          render ={()=> <Contact contacts={this.state}/>}
          />

      <Route path="/newcontact/" component={NewContact}/>
      </main>

      </div>
    )
  }
}

export default App;