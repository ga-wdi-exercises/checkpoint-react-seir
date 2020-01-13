import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Contact App</h1>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/new-contact'>New Contact</Link>
                </nav>
            </header>
        )
    }
}