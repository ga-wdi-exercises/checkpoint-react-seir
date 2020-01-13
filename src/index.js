import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App/App';
import contacts from "./contacts.json";

// ReactDOM.render( document.getElementById('root'));

constructor(props) {
    super(props)
  
    this.state = {
      contacts: props.contacts
    }
  }
class index extends Component {
    render() {
      return (
        <>
        
               <App contacts = {contacts}/>,
        </>
      );
    }
  }
  export default index;