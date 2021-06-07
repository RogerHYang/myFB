import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IntroContainer from "../intro/intro_container";

import styled from "styled-components";

import Banner from "../banner/banner";
import ProfilePicture from "../profile/profile_picture/profile_picture";

import ProfileNav from "../profile/profile_nav";

import NameAndBio from "../profile/name_and_bio";

const StyledBanner = styled(Banner)`
  display: flex;
  height: 56px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #eee;
  z-index: 1;
`;

const StyledProfilePicture = styled(ProfilePicture)`
  background-color: #bbb;
  height: 168px;
  width: 168px;
  position: absolute;
  top: 194px;
`;

const StyledProfileTop = styled.div`
  border-bottom: 1px solid #eee;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: 5px 5px 15px #ddd;
`;

const StyledCoverPhoto = styled.div`
  width: 940px;
  height: 349px;
  background-color: #ccc;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const ProfileBottom = styled.div`
  background-color: #eee;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class extends React.Component {
  componentDidMount() {
    this.props.requestUser(this.props.match.params.userId);
  }

  render() {
    const { logout, user, isLoggedIn } = this.props;
    if (!user) {
      return null;
    }
    return (
      <div>
        <StyledBanner />
        <div className="profile-page">
          <StyledProfileTop>
            <StyledCoverPhoto>
              <img src={user.cover_photo} style={{ width: "100%" }} />
              {isLoggedIn && (
                <button className="add-cover-photo">
                  <FontAwesomeIcon icon="camera" /> Edit Cover Photo
                </button>
              )}
            </StyledCoverPhoto>
            <StyledProfilePicture />
            <NameAndBio />
            <div className="profile-biography"></div>
            <div className="divider"></div>
            <ProfileNav />
          </StyledProfileTop>
          <ProfileBottom>
            <div className="profile-bottom-left">
              <div className="profile-intro tile">
                <div>Intro</div>
              </div>
              <div className="profile-photos tile"></div>
              <div className="profile-friends tile"></div>
            </div>
            <div className="profile-bottom-right">
              <div className="profile-posts"></div>
            </div>
          </ProfileBottom>
        </div>
      </div>
    );
  }
}
