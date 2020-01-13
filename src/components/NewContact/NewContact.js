import React, { Component } from 'react'

class NewContact extends Component {
    constructor(props) {
        super(props)
        this.state= {
            name: '',
            email: '',
            pic: '',
        }

        getName = (str) => {
            this.setState({
                name: str,
            })
        }

        getEmail = (str) => {
            this.setState({
                email: str,
            })
        }

        getPic = (str) => {
            this.setState({
                pic: str,
            })
        }

        submit = () => {
            let newCon = {...this.state}
            this.props.addContact(newCon)
        }
    }

    render() {
        <div className="contact">
            <h1>New Contact</h1>
            <form>
                <input type="text" onChange={(e) => this.getName(e.currentTarget.value)}>Name</input>
                <input type="text" onChange={(e) => this.getEmail(e.target.value)}>Email</input>
                <input type="text" onChange={(e) => this.getPic(e)}>Profile Picture</input>
                <button onClick={() => this.submit()}>Submit</button>
            </form>
        </div>
    }
}

export default NewContact