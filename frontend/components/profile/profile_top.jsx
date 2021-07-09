import React from "react";
import styled from "styled-components";

import CoverPhoto from "../profile/cover_photo/cover_photo";
import ProfilePicture from "../profile/profile_picture/profile_picture";
import ProfileNav from "../profile/profile_nav/profile_nav";
import FullName from "./full_name";
import Biography from "./biography/biography";

const PictureFrame = styled.div`
  height: 176px;
  width: 176px;
  padding: 4px;
  position: absolute;
  top: 188px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  > * {
    height: 100%;
    width: 100%;
  }
`;

const NameAndBio = styled.div`
  margin-bottom: 12px;
`;

const ProfileTop = ({ className }) => {
  return (
    <div className={className}>
      <CoverPhoto isEditable={true} />
      <PictureFrame>
        <ProfilePicture isEditable={true} />
      </PictureFrame>
      <NameAndBio>
        <FullName />
        <Biography isEditable={true} />
      </NameAndBio>
      <ProfileNav />
    </div>
  );
};

export default styled(ProfileTop)`
  width: 100%;
  border-bottom: 1px solid #eee;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  background-color: white;
`;
