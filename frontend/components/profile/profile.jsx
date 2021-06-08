import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import CoverPhoto from "../profile/cover_photo/cover_photo";
import ProfilePicture from "../profile/profile_picture/profile_picture";
import ProfileNav from "../profile/profile_nav/profile_nav";
import FullName from "./full_name";
import Biography from "./biography/biography";

import ProfileBottom from "../profile/profile_bottom";

const PictureFrame = styled.div`
  height: 176px;
  width: 176px;
  padding: 4px;
  position: absolute;
  top: 194px;
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

const StyledProfileTop = styled.div`
  border-bottom: 1px solid #eee;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: 5px 5px 15px #ddd;
`;

const NameAndBio = styled.div`
  margin-bottom: 12px;
`;

const Profile = ({ className }) => {
  return (
    <div className={className}>
      <StyledProfileTop>
        <CoverPhoto isEditable={true} />
        <PictureFrame>
          <ProfilePicture isEditable={true} />
        </PictureFrame>
        <NameAndBio>
          <FullName />
          <Biography isEditable={true} />
        </NameAndBio>
        <ProfileNav />
      </StyledProfileTop>
      <ProfileBottom />
    </div>
  );
};

export default styled(Profile)`
  width: 100%;
`;
