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
  h3 {
    font-weight: 900;
    text-align: left;
    font-size: 1.1em;
  }
`;

export default ({ closeMenu, className }) => {
  const user = useSelector(
    ({ entities, session }) => entities.users[session.id]
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
        <div>
          <h3>
            {user.first_name} {user.last_name}
          </h3>
          <p>See your profile</p>
        </div>
      </Label>
    </MenuButton>
  );
};
