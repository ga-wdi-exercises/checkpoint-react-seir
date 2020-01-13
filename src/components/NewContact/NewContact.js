import React from "react";

export default function NewContact() {
  return (
    <div>
      <h1>New Contact</h1>
      <form>
        <input type="name" placeholder="name"></input>
        <input type="text" value="" placeholder="email"></input>
        <input type="text" value="" placeholder="profile_picture"></input>
      </form>
    </div>
  );
}
