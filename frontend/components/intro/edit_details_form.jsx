import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getDerivedStateFromProps(props, state) {
    if (props.user.id !== state.id) {
      return props.user;
    }
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
      <form className='edit-details-form' onSubmit={this.handleSubmit}>
        <input value={this.state.work} onChange={this.update("work")} value={this.state.work} />
        <input value={this.state.school} onChange={this.update("school")} value={this.state.school} />
        <button type="submit">Save</button>
      </form>
    );
  }
}