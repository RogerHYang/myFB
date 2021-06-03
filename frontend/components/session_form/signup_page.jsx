import React from "react";
import { Link } from 'react-router-dom';

import LoginForm from "./login_form";
import SignupForm from "./signup_form";

export default class extends React.Component {
  componentDidMount() {
    this.props.clearErrors();
  }
  render() {
    const { login, signup } = this.props;
    return (
      <div className="signup-page">
        <div className="page-header">
          <div className="menu-bar">
            <div className="logo">
              myFB
            </div>
            <LoginForm processForm={login} />
          </div>
        </div>
        <div className="page-main">
          <div>Create a New Account</div>
          <div>It’s quick and easy.</div>
          <SignupForm processForm={signup} />
          {this.props.errors.length ? <ul className="session-errors">{this.props.errors.map(e => <li key={e}>{e}</li>)}</ul> : ''}
        </div>
        <div className='page-footer'>
          <div className='page-footer-links'>
            {/* <Link to="/signup">Sign up</Link> */}
            <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
    );
  }
}