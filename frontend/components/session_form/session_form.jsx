import React from 'react';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => <li key={error}>{error}</li>)}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Welcome to myFB.
          {this.renderErrors()}
          <div>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.handleChange('email')}
              />
            </label>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.handleChange('password')}
              />
            </label>
            <input type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}