import React from "react";

function NewContact() {

    return (
        <div>
            <h1 className='new-contact'>New Contact</h1>
            <form>
                <label>
                    <title>Name:</title>
                    <input type='text' name='name' />
                </label>
                <label>
                    Email:
                    <input type='text' name='name' />
                </label>
                <label>
                    Image:
                    <input type='text' name='name' />
                </label>
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}

export default NewContact;