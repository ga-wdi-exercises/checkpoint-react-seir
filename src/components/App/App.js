import React, { Component } from 'react';
import header from '/.Header'
import NewContact from '/.NewContact '
import NewContact from '/.NewContact '
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
      } 
  from "react-router-dom";

class App extends Component {
  render() {
    return <div className="App">
        <p>app</p>
<header/>
<Router>
<Switch>
              <Route exact path="/">
              <ContactList /> 
              </Route>
            <Route  path="/new-contact" >
                <NewContact />
              </Route>
            
           </Switch>
          
        </Router>


      </div>;
  }
}

export default App;