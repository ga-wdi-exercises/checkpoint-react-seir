import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from '../Header/Header'
import Contact from '../Contact/Contact'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/">

          <div className="App"></div>
          <p>app</p>
          </div>
        </Route>
        <Route path="/contact-list">

        </Route>
        <Route exact path="/contact">
          <Contact /> 
        </Route>
        <Route path="/new-contact" >

        </Route>
      </Router>

    );
  }
}

export default App;
