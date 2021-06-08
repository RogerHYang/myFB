import React from "react";
import styled from "styled-components";

import Button from "./button";

const RoundButton = ({ onClick, disabled = false, children, className }) => {
  return (
    <Button
      disabled={disabled}
      shrinks={false}
      onClick={onClick}
      className={className}
    >
      {children}
    </Button>
  );
};

export default styled(RoundButton)`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;
