import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AccountMenu from "./account_menu";

import DropdownButton from "../../utils/dropdown_menu_button";

export default ({ className }) => {
  const [menuIsOpen, toggleMenuIsOpen] = useState(false);
  const handleClick = (e) => {
    toggleMenuIsOpen((open) => !open);
  };
  const closeMenu = () => {
    toggleMenuIsOpen(false);
  };
  return (
    <div style={{ position: "relative" }}>
      <DropdownButton
        className={className}
        onClick={handleClick}
        menuIsOpen={menuIsOpen}
      >
        <FontAwesomeIcon icon="caret-down" style={{ fontSize: "1.4em" }} />
      </DropdownButton>
      {menuIsOpen && <AccountMenu closeMenu={closeMenu} />}
    </div>
  );
};
