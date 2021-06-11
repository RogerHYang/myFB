import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { faUserCheck, faUserTimes } from "@fortawesome/free-solid-svg-icons";

import Friendship, { REMOVE } from "./friendship";
import { StandardGrayButton, ButtonLabel } from "../../utils/buttons";

const DropdownMenu = styled(({ closeMenu, className }) => {
  return (
    <div className={className}>
      <Friendship
        action={REMOVE}
        onClick={closeMenu}
        icon={faUserTimes}
        text="Unfriend"
        fontWeight="normal"
      />
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

export default () => {
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
