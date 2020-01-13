import React from "react";

function NewContact(props) {
  return (
    <div>
      <h1>New Contact</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name"></input>
        </label>
        <label>
          Email:
          <input type="text" name="email"></input>
        </label>
        <label>
          Profile Picture:
          <input type="text" name="profile_picture"></input>
        </label>
        <input type="submit" value="Submit" onSubmit={props.onSubmit}/>
      </form>
    </div>
  );
}
export default NewContact;
