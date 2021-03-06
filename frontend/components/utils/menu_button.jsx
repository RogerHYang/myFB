import React from "react";
import styled from "styled-components";

import Button from "./button";

const StyledButton = styled(Button)`
  height: 100%;
  width: 100%;
  padding: 0 8px;
  font-weight: inherit;
  border-radius: 6px;
`;

const MenuButton = ({ onClick, disabled = false, children, className }) => {
  return (
    <StyledButton
      disabled={disabled}
      shrinks={false}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default MenuButton;
