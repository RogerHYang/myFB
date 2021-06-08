import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../utils/button";

const EditButton = styled(Button)`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 1.3rem;
`;

const Picture = ({ user, isEditable, className }) => {
  if (!user) {
    const { userId } = useParams();
    user = useSelector(({ entities }) => {
      return entities.users[userId];
    });
  }

  let profile_picture;
  let isLoggedIn;

  if (user) {
    profile_picture = user.profile_picture;
    isLoggedIn = useSelector(({ session }) => session.id == user.id);
  }

  const handleClick = () => {};

  return (
    <div className={className + " profile-picture"}>
      {profile_picture && (
        <img src={profile_picture} style={{ width: "100%", height: "100%" }} />
      )}
      {isEditable && isLoggedIn && (
        <EditButton onClick={handleClick}>
          <FontAwesomeIcon icon="camera" />
        </EditButton>
      )}
    </div>
  );
};

export default styled(Picture)`
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #eee;
  height: 168px;
  width: 168px;
`;
