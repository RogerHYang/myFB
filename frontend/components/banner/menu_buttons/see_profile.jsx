import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";

import MenuButton from "../../utils/menu_button";

import ProfilePicture from "../../profile/profile_picture/profile_picture";

const Label = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  > *:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    margin: 8px 12px 8px 0;
    border-radius: 50%;
    background-color: #ddd;
  }
`;

export default ({ closeMenu, className }) => {
  const user = useSelector(
    ({ entities, session }) => entities.avatars[session.id]
  );
  const history = useHistory();
  const handleClick = () => {
    closeMenu();
    history.replace(`/users/${user.id}/posts`);
  };
  return (
    <MenuButton className={className} onClick={handleClick}>
      <Label>
        <ProfilePicture user={user} isEditable={false} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              lineHeight: "1.1765",
              fontSize: "1.0625rem",
              fontWeight: "600",
            }}
          >
            {user.firstName} {user.lastName}
          </div>
          <div style={{ fontSize: ".9375rem", color: "#65676B" }}>
            See your profile
          </div>
        </div>
      </Label>
    </MenuButton>
  );
};
