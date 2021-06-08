import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import AccountControls from "./account_controls/account_controls";

const Logo = styled.div`
  height: 100%;
  width: 135px;
`;

function Banner({ className }) {
  const isLoggedIn = useSelector(({ session }) => Boolean(session.id));
  return (
    <div className={className}>
      <Logo className="logo"></Logo>
      {isLoggedIn && <AccountControls />}
    </div>
  );
}

export default styled(Banner)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #eee;
  z-index: 1;
`;
