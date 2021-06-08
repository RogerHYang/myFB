import React from "react";
import styled from "styled-components";

import LogOut from "../menu_buttons/logout";
import SeeProfile from "../menu_buttons/see_profile";

const Hr = styled.div`
  border-top: 1px solid #ddd;
  width: 100%;
  margin: 8px 0;
`;

const Menu = ({ closeMenu, className }) => {
  return (
    <div className={className}>
      <SeeProfile closeMenu={closeMenu} />
      <Hr />
      <LogOut />
    </div>
  );
};

export default styled(Menu)`
  width: 360px;
  margin: 5px 0 0 0;
  padding: 10px;
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
