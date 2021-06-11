import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { RoundButton, ButtonLabel } from "../../utils/buttons";

const EditButton = styled(RoundButton)`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

const Picture = ({ user, isEditable, className }) => {
  if (!user) {
    const { userId } = useParams();
    user = useSelector(({ entities }) => {
      return entities.users[userId];
    });
  }

  let profilePicture;
  let isLoggedIn;

  if (user) {
    profilePicture = user.profilePicture;
    isLoggedIn = useSelector(({ session }) => session.id == user.id);
  }

  const handleClick = () => {};

  return (
    <div className={className + " profile-picture"}>
      {profilePicture && (
        <img src={profilePicture} style={{ width: "100%", height: "100%" }} />
      )}
      {isEditable && isLoggedIn && (
        <EditButton height="36px" onClick={handleClick}>
          <ButtonLabel icon={faCamera} fontSize="1.3rem" />
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
