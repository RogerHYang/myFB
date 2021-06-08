import React from "react";
import { Link } from "react-router-dom";

import LoginForm from "./login_form";
import DemoLoginForm from "./demo_login_form";

export default class extends React.Component {
  componentDidMount() {
    this.props.clearErrors();
  }
  render() {
    const { login } = this.props;
    return (
      <div className="login-page">
        <div className="page-header" style={{ margin: "20px" }}>
          <Link
            className="logo"
            to="/"
            style={{ height: "100px", width: "200px", margin: "20px" }}
          ></Link>
        </div>
        <div className="page-main">
          <LoginForm processForm={login} />
          <DemoLoginForm processForm={login} />
          <div>
            {this.props.errors.length ? (
              <ul className="session-errors">
                {this.props.errors.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
          <Link to="/signup">Sign up for myFB</Link>
        </div>
        {/* <div className='page-footer'>
          <div className='page-footer-links'>
            <Link to="/signup">Sign up</Link>
            <Link to="/signup">Log In</Link>
          </div>
        </div> */}
      </div>
    );
  }
}
