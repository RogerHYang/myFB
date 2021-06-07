import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AccountMenu from "./account_menu";

const Button = ({ className }) => {
  const [isOpen, toggleIsOpen] = useState(false);
  const handleClick = (e) => {
    e.stopPropagation();
    toggleIsOpen((open) => !open);
  };
  return (
    <div style={{ position: "relative" }}>
      <div className={className} onClick={handleClick}>
        <FontAwesomeIcon
          icon="caret-down"
          style={{ color: "#1877F2", fontSize: "1.5em" }}
        ></FontAwesomeIcon>
      </div>
      {isOpen && <AccountMenu />}
    </div>
  );
};

export default styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: #e7f3ff;
  &:hover {
    background-color: #aac9ff;
  }
`;
