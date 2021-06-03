import React from "react";

import EditDetailsContainer from './edit_details_container';

export default class extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="user-intro">
        <p className="header">Intro</p>
        <ul>
          {user.work ? <li>Works at {user.work}</li> : ""}
          {user.school ? <li>Studied at {user.school}</li> : ""}
        </ul>
        <button onClick={this.props.openModal(EditDetailsContainer)}>Edit Details</button>
      </div>
    );
  }
}