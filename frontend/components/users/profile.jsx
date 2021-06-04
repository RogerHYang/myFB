import React from "react";

import IntroContainer from '../intro/intro_container';

export default class extends React.Component {
  render() {
    const { logout, user } = this.props;
    return (
      <div>
        <div className='profile-nav-bar'>
        </div>
        <div className='profile-page'>
          <div className='profile-top'>
            <div className='profile-cover-photo'>
            </div>
            <div className='profile-picture'>
            </div>
            <div className='profile-fullname'>
              {user.first_name} {user.last_name}
            </div>
            <div className='profile-biography'>
            </div>
            <div className='divider'>              
            </div>
            <div className='profile-menu'>
            </div>
          </div>
          <div className='profile-bottom'>            
            <div className='profile-bottom-left'>
              <div className='profile-intro tile'>
                <div>Intro</div>
              </div>
              <div className='profile-photos tile'>
              </div>
              <div className='profile-friends tile'>
              </div>
            </div>
            <div className='profile-bottom-right'>
              <div className='profile-posts'>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}