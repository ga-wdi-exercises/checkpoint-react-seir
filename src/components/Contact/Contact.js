import React from "react";

export default function Contact(contact) {
  return (
    <div className="contact">
      <img>{contact.profile_picture}</img>
      <h3>{contact.name}</h3>
      <h4>{contact.email}</h4>
    </div>
  );
}
