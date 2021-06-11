import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

import Friendship, { ADD, REMOVE } from "./friendship";

import {
  StandardButton,
  StandardBlueButton,
  ButtonLabel,
} from "../../utils/buttons";

const DropdownMenu = styled(({ closeMenu, className }) => {
  return (
    <div className={className}>
      <Friendship
        action={ADD}
        onClick={closeMenu}
        text="Confirm"
        fontWeight="normal"
        Button={StandardButton}
      />
      <Friendship
        action={REMOVE}
        onClick={closeMenu}
        text="Delete"
        fontWeight="normal"
        Button={StandardButton}
      />
    </div>
  );
})`
  z-index: 300;
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

export default ({ className, lightblue = false, withIcon = true }) => {
  const [menu, toggleMenu] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <StandardBlueButton
        className={className}
        lightblue={lightblue}
        onClick={() => toggleMenu((isOpen) => !isOpen)}
      >
        <ButtonLabel icon={withIcon && faUserCheck} text="Respond" />
      </StandardBlueButton>
      {menu && <DropdownMenu closeMenu={() => toggleMenu(false)} />}
    </div>
  );
};
