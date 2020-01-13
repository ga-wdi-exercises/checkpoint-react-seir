import React from 'react'
import { Link } from 'react-router-dom'

export default class NewContact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            contact: {}
        }
    }

    nameUpdate = (e) => {
        const name = e.target.value
        const contact = this.state.contact
        contact.name = name
        this.setState({
            contact: contact
        })
    }

    emailUpdate = (e) => {
        const email = e.target.value
        const contact = this.state.contact
        contact.email = email
        this.setState({
            contact: contact
        })
    }

    profileUpdate = (e) => {
        const profile = e.target.value
        const contact = this.state.contact
        contact.profile_picture = profile
        this.setState({
            contact: contact
        })
    }

    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form>
                    <input type='text' name='name' onChange={this.nameUpdate}>Name</input>
                    <input type='text' name='email' onChange={this.emailUpdate}>Email</input>
                    <input type='text' name='profile_picture' onChange={this.profileUpdate}>Profile Picture</input>
                    <Link to='/'>
                        <button onClick={() => this.props.onSubmit(this.state.contact)}>Submit</button>
                    </Link>
                </form>
            </div>
        )
    }
}