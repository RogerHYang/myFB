import React from "react";

export default class extends React.Component {
  handleSubmit(e) {
      e.preventDefault();
      this.props.processForm({ email: 'demo@user.com', password: '123456' });
  }

  render() {
    return (
      <form className='demo-login-form' onSubmit={this.handleSubmit.bind(this)}>
        <button type="submit">Log In as Demo User</button>
      </form>
    );
  }
}