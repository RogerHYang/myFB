import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import { StandardButton, ButtonLabel } from "../../utils/buttons";

const EditButton = styled.div`
  position: absolute;
  right: 32px;
  bottom: 17px;
`;

const CoverPhoto = ({ user, isEditable, className }) => {
  if (!user) {
    const { userId } = useParams();
    user = useSelector(({ entities }) => entities.users[userId]);
  }

  const sessionUserId = useSelector(({ session }) => session.id);
  const isLoggedIn = user && user.id == sessionUserId;

  const { cover_photo } = user;

  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => {
      const file = e.target.files[0];
      console.log(file);
    };
    input.click();
  };

  return (
    <div className={className}>
      {cover_photo && <img src={cover_photo} style={{ width: "100%" }} />}
      {isEditable && isLoggedIn && (
        <EditButton>
          <StandardButton color="white" onClick={handleClick}>
            <ButtonLabel
              icon={faCamera}
              text={cover_photo ? "Edit Cover Photo" : "Add Cover Photo"}
            />
          </StandardButton>
        </EditButton>
      )}
    </div>
  );
};

export default styled(CoverPhoto)`
  position: relative;
  width: 940px;
  height: 348.141px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(white, white, white, white, gray);
`;
