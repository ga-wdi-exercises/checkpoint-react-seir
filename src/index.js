import React from 'react';
import ReactDOM from 'react-dom';
import { BroweserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import App from './components/App/App';

import contacts from "./contacts.json";

ReactDOM.render(
  <Router>
    <App contacts={contacts} />
  </Router>,
  document.getElementById('root'));
