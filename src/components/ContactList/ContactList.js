import React from "react";
import Contact from "../Contact/Contact";

export default function ContactList(contacts) {
  const allContacts = contacts.contacts.map((contact, key) => {
    return <Contact contact={contact} key="key" />;
  });

  return <div className="contact-list">{allContacts}</div>;
}
