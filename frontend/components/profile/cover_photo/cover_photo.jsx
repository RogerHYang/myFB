import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import EditCoverPhoto from "./edit_cover_photo";

const EditButton = styled(EditCoverPhoto)`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const CoverPhoto = ({ isEditable, className }) => {
  const { userId } = useParams();
  const user = useSelector(({ entities }) => entities.users[userId]);
  const sessionUserId = useSelector((state) => state.session.id);
  const isLoggedIn = user && user.id == sessionUserId;
  return (
    <div className={className}>
      <div style={{ position: "relative" }}>
        <img src={user.cover_photo} style={{ width: "100%" }} />
        {isEditable && isLoggedIn && <EditButton />}
      </div>
    </div>
  );
};

export default styled(CoverPhoto)`
  width: 940px;
  height: 349px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(white, white, white, white, gray);
`;
