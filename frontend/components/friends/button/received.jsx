import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  createFriendConnection,
  removeFriendConnection,
} from "../../../actions/friend_actions";

import Button from "../../utils/button";
import MenuButton from "../../utils/menu_button";
import ButtonLabelWithIcon from "../../utils/button_label_with_icon";

const AcceptFriend = ({ closeMenu, className }) => {
  const { userId } = useParams();
  const [user, sessionUser] = useSelector(
    ({ entities: { users }, session }) => [users[userId], users[session.id]]
  );
  const dispatch = useDispatch();
  return (
    <MenuButton
      className={className}
      onClick={() => {
        closeMenu();
        dispatch(createFriendConnection(sessionUser.id, user.id));
      }}
    >
      Accept Request
    </MenuButton>
  );
};

const RemoveFriend = ({ closeMenu, className }) => {
  const { userId } = useParams();
  const [user, sessionUser] = useSelector(
    ({ entities: { users }, session }) => [users[userId], users[session.id]]
  );
  const dispatch = useDispatch();
  return (
    <MenuButton
      className={className}
      onClick={() => {
        closeMenu();
        dispatch(removeFriendConnection(sessionUser.id, user.id));
      }}
    >
      Reject Request
    </MenuButton>
  );
};

const DropdownMenu = styled(({ closeMenu, className }) => {
  return (
    <div className={className}>
      <AcceptFriend closeMenu={closeMenu} />
      <RemoveFriend closeMenu={closeMenu} />
    </div>
  );
})`
  position: absolute;
  top: 38px;
  right: 0px;
  height: 97px;
  width: 150px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
  background: white;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
`;

export default ({ className }) => {
  const [menu, toggleMenu] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <Button
        className={className}
        onClick={() => toggleMenu((isOpen) => !isOpen)}
      >
        <ButtonLabelWithIcon>
          <FontAwesomeIcon icon="user-clock" />
          <span>Request Pending</span>
        </ButtonLabelWithIcon>
      </Button>
      {menu && <DropdownMenu closeMenu={() => toggleMenu(false)} />}
    </div>
  );
};
