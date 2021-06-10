import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

import {
  createFriendConnection,
  removeFriendConnection,
} from "../../../actions/friend_actions";

import Button from "../../utils/button";
import MenuButton from "../../utils/menu_button";
import ButtonLabelWithIcon from "../../utils/labels";
import MenuItemLabel from "../../utils/menu_item_label";

import {
  StandardButton,
  StandardBlueButton,
  ButtonLabel,
} from "../../utils/buttons";

const AcceptFriend = ({ closeMenu }) => {
  const { userId } = useParams();
  const [user, sessionUser] = useSelector(
    ({ entities: { users }, session }) => [users[userId], users[session.id]]
  );
  const dispatch = useDispatch();
  return (
    <StandardButton
      width="100px"
      onClick={() => {
        closeMenu();
        dispatch(createFriendConnection(sessionUser.id, user.id));
      }}
    >
      <ButtonLabel text="Accept" />
    </StandardButton>
  );
};

const RemoveFriend = ({ closeMenu }) => {
  const { userId } = useParams();
  const [user, sessionUser] = useSelector(
    ({ entities: { users }, session }) => [users[userId], users[session.id]]
  );
  const dispatch = useDispatch();
  return (
    <StandardButton
      onClick={() => {
        closeMenu();
        dispatch(removeFriendConnection(sessionUser.id, user.id));
      }}
    >
      <span>Reject</span>
    </StandardButton>
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
  width: 100%;
  right: 0px;
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
      <StandardBlueButton
        className={className}
        onClick={() => toggleMenu((isOpen) => !isOpen)}
      >
        <ButtonLabel icon={faUserCheck} text="Respond" />
      </StandardBlueButton>
      {menu && <DropdownMenu closeMenu={() => toggleMenu(false)} />}
    </div>
  );
};
