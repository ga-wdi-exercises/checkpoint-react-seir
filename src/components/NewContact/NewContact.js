// {
//   name: "Tweety",
//   email: "tweety@gmail.com",
//   profile_picture: "https://upload.wikimedia.org/wikipedia/en/0/02/Tweety.svg"
// }

import React from "react";
import { Link } from "react-router-dom";

var NewContact = (props) => (
  <div>
    <h1>New Contact</h1>
    <form>
      <input placeHolder="Name" name={props.name} />
      <input placeHolder="Email" email={props.email} />
      <input placeHolder="Profile picture" profile_picture={props.profile_picture} />
      <Link><button onClick={(e) => props.submitHandle(e)}>Submited</button></Link>
    </form>
  </div>
)
export default NewContact
