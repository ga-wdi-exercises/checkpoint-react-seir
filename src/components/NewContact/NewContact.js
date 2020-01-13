import React from "react";

function NewContact(){
    return(
       <div>
        <h1>New Contact</h1>
     <form>
        <label>Name:<input type="text" name="name" /></label>
        <label>Email:<input type="text" name="email" /></label>
        <label>Profile Picture:<input type="text" name="profile" /></label>
        <input type="submit" value="Submit" />
    </form>
    </div>
    )
}

export default NewContact;