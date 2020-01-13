import React from "react";
import ContactList from "../ContactList/ContactList";

function Contact(props) {
  console.log("contact props", props);

  if (props) {
    let conData = props;
    let contact = conData.map(item => {
      return (
        <div className="contact">
          <ContactList  name={item.name} />
        </div>
      );
    });
  }

  return <p>contact</p>;
}

export default Contact;
