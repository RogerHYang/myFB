import React from "react";
import styled from "styled-components";

import LogOut from "../buttons/logout";

const StyledLogOut = styled(LogOut)`
  padding: 0 8px;
  font-size: 1.1rem;
  height: 52px;
  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
  display: flex;
  align-items: center;
  margin: 8px;
  border-radius: 10px;
`;
const Menu = ({ className }) => {
  return (
    <div className={className}>
      <StyledLogOut />
    </div>
  );
};

export default styled(Menu)`
  width: 360px;
  margin: 5px 0 0 0;
  background-color: white;
  position: absolute;
  right: 0;
  top: 40px;
  z-index: 300;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
`;
