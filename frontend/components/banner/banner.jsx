import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserFriends } from "@fortawesome/free-solid-svg-icons";

import AccountControls from "./account_controls/account_controls";
import Nav from "./center_nav";

import { NavButton, ButtonLabel } from "../utils/buttons";

const Logo = styled.div`
  height: 80%;
  width: 135px;
  margin: 0 10px;
`;

const Centered = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

function Banner({ className }) {
  const isLoggedIn = useSelector(({ session }) => Boolean(session.id));
  return (
    <div className={className}>
      <Logo className="logo"></Logo>
      <Centered>
        <Nav></Nav>
      </Centered>
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;
