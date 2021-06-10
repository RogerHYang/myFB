import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

import {
  createFriendConnection,
  removeFriendConnection,
} from "../../../actions/friend_actions";

import MenuButton from "../../utils/menu_button";
import MenuItemLabel from "../../utils/menu_item_label";

import { StandardGrayButton, ButtonLabel } from "../../utils/buttons";

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
      <MenuItemLabel>Remove Friend</MenuItemLabel>
    </MenuButton>
  );
};

const DropdownMenu = styled(({ closeMenu, className }) => {
  return (
    <div className={className}>
      <RemoveFriend closeMenu={closeMenu} />
    </div>
  );
})`
  z-index: 300;
  position: absolute;
  top: 38px;
  right: 0px;
  height: 56px;
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  background: white;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
`;

export default ({ className }) => {
  const [menu, toggleMenu] = useState(false);
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <StandardGrayButton onClick={() => toggleMenu((isOpen) => !isOpen)}>
        <ButtonLabel icon={faUserCheck} text="Friends" />
      </StandardGrayButton>
      {menu && <DropdownMenu closeMenu={() => toggleMenu(false)} />}
    </div>
  );
};
