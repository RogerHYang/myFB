import React from "react";

import styled, { css } from "styled-components";

import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/session_actions";

import MenuButton from "../../utils/menu_button";

const Label = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  > *:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    margin: 8px 12px 8px 0;
    border-radius: 50%;
    background-color: #ddd;
  }
`;

export default ({ className }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const signout = () =>
    dispatch(logout()).then(() => history.replace("/login"));
  return (
    <MenuButton className={className} onClick={signout}>
      <Label>
        <div style={{ fontSize: "1.2rem" }}>
          <FontAwesomeIcon icon="sign-out-alt" />
        </div>
        <div style={{ fontSize: ".9375rem" }}>Log Out</div>
      </Label>
    </MenuButton>
  );
};
