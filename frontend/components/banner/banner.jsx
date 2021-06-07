import React from "react";
import styled from "styled-components";

import AccountControls from "./account_controls/account_controls";

const Logo = styled.div`
  color: #4267b2;
  font-size: 2.5rem;
  font-weight: 1000;
  text-decoration: none;
`;

function Banner({ className }) {
  return (
    <div className={className}>
      <Logo>myFB</Logo>
      <AccountControls />
    </div>
  );
}

export default styled(Banner)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
