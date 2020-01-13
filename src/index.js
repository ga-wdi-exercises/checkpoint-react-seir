import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';
import { BrowserRouter } from "react-router-dom";

import contacts from "./contacts.json";

ReactDOM.render(<BrowserRouter><App contacts={contacts} /></BrowserRouter>, document.getElementById('root'));
