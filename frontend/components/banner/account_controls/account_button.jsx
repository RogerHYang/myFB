import React, { useState } from "react";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import AccountMenu from "./account_menu";

import { RoundButton, ButtonLabel } from "../../utils/buttons";

export default ({ className }) => {
  const [menuIsOpen, toggleMenuIsOpen] = useState(false);
  const handleClick = () => {
    toggleMenuIsOpen((open) => !open);
  };
  const closeMenu = () => {
    toggleMenuIsOpen(false);
  };
  return (
    <div style={{ position: "relative" }}>
      <RoundButton onClick={handleClick} isOn={menuIsOpen}>
        <ButtonLabel icon={faCaretDown} fontSize="1.6em" />
      </RoundButton>
      {menuIsOpen && <AccountMenu closeMenu={closeMenu} />}
    </div>
  );
};
