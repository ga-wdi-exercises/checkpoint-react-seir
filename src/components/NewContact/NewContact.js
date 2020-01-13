import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewContact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      image: ""
    };
  }

  handleName = evt => {
    this.setState({ name: evt.target.value });
  };

  handleEmail = evt => {
    this.setState({ email: evt.target.value });
  };

  handleImage = evt => {
    this.setState({ image: evt.target.value });
  };

  render() {
    return (
      <div className="form">
        <h1>New Contact</h1>
        <form>
          <input
            onChange={this.handleName}
            name="name"
            type="name"
            placeholder="name"
          />

          <input
            onChange={this.handleEmail}
            name="email"
            type="email"
            placeholder="email"
          />

          <input
            onChange={this.handleImage}
            name="profile_picture"
            type="image"
            placeholder="image"
          />
        </form>
        <Link to="/">
          <button
            type="button"
            onClick={() =>
              this.props.contUpdate(
                this.state.name,
                this.state.email,
                this.state.image
              )
            }
          >
            Add Contact
          </button>
        </Link>
      </div>
    );
  }
}

export default NewContact;
