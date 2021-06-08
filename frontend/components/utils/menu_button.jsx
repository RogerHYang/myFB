import React from "react";
import styled from "styled-components";

import Button from "./button";

const StyledButton = styled(Button)`
  height: auto;
  padding: 0 8px;
  font-weight: inherit;
`;

export default ({ onClick, disabled = false, children, className }) => {
  return (
    <StyledButton
      disabled={disabled}
      shrinks={false}
      onClick={onClick}
      className={className}
      color={{ bg: "#fff", hover: "#eee" }}
    >
      {children}
    </StyledButton>
  );
};
