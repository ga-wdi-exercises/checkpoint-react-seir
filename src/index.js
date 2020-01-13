import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';
import contacts from "./contacts.json";
ReactDOM.render(<App />, document.getElementById('root'));
import BrowserRouter from  'react-router-dom';

ReactDOM.render(
    <App 
      title=""
      colorsArr={App}
    />, rootElement);
  
  