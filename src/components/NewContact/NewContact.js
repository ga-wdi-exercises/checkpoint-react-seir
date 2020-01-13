import React, { Component } from 'react'

class NewContact extends Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }
    render() {
        return(
            <div>
                <h1>New Contact</h1>
                <form>
                    <input type="text" name='name' />
                    <input type="email" name='email' />
                    <input type="file" name="profile_picture" />
                </form>
            </div>
        )
    }
}

export default NewContact