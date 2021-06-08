import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import ProfileMenu from "./profile_menu";
import EditProfile from "./edit_profile";

const Nav = ({ className }) => {
  const { userId } = useParams();
  const isLoggedIn = useSelector(({ session }) => session.id == userId);
  return (
    <div className={className}>
      <ProfileMenu />
      {isLoggedIn ? <EditProfile /> : <div></div>}
    </div>
  );
};

export default styled(Nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 876px;
  border-top: 1px solid #ccc;
  padding: 0 3px;
`;
