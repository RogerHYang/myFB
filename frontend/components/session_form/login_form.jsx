import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
  }

  render() {
    return (
      <form className='login-form' onSubmit={this.handleSubmit}>        
        <input type="text" value={this.state.email} onChange={this.update("email")} placeholder="Email or Phone Number" />        
        <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
    );
  }
}