import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom'
import contacts from "./contacts.json";
import './styles/index.css'

// class ReactComponentRender {
//     constructor(props) {
//         super(props)
//         this.state = {
//             contacts: props.contacts
//         }
//     }

    ReactDOM.render(
        <Router>
            <App contacts={contacts}/>
        </Router>
        ,
        document.getElementById('root')
    )
// }