import { React, Component } from 'react'

class NewContact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text">Name</input>
          <input type="text">Email</input>
          <input type="text">Profile Pic</input>
        </form>
      </div>
    );
  }
}

export default NewContact;