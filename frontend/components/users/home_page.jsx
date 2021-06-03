import React from "react";

import IntroContainer from '../intro/intro_container';

export default class extends React.Component {
  render() {
    const { logout, user } = this.props;
    return (
      <div>
        <div>Welcome to myFB, {user.first_name} {user.last_name}!</div>
        <br/>
        <button onClick={logout}>Log Out</button>
        <IntroContainer user={user}></IntroContainer>
      </div>
    )
  }
}