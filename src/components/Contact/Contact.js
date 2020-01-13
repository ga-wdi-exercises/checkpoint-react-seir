import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

class Header extends React.Component{
    render() {
        return (
            <div class="header">
              <Router>
                  <h1>My header</h1>
                <nav>
                    <div class="App-header">
                        <Link to="/">Home</Link>
                        <Link to="/new-contact">NewContact</Link>
                    </div>
                </nav>
                
                <Route
                    path="/"
                    component={Home}
                    exact 
                />
                <Route
                    path="/new-contact"
                    component={NewContact} 
                />
                </Router>
            </div>
        );
    }
}

export default Header;