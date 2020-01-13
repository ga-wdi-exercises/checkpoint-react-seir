import React from "react";

const ContactList = (props) => (
  <div className="contact-list" contacts={props.contacts}>
    {props.contacts.map((e, i) => (
      <div key={i}>
        <img src={e.profile_picture} alt={e.profile_picture} />
        <h2>{e.name}</h2>
        <p>{e.email}</p>
      </div>
    ))}
  </div>
)
export default ContactList;