import React from "react";
import styled from "styled-components";

import ProfileMenu from "./profile_menu";

const Nav = ({ className }) => {
  return (
    <div className={className}>
      <ProfileMenu />
    </div>
  );
};

export default styled(Nav)`
  display: flex;
  height: 60px;
  width: 908px;
  border-top: 1px solid #ccc;
  padding: 3px;
`;
