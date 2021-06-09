import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import ProfileMenu from "./profile_menu";
import EditProfile from "./edit_profile";

import FriendButton from "../../friends/button";

const Nav = ({ className }) => {
  const { userId } = useParams();
  const [isLoggedIn, isOwner] = useSelector(({ session }) => [
    Boolean(session.id),
    session.id == userId,
  ]);
  return (
    <div className={className}>
      <ProfileMenu />
      <div>
        {isLoggedIn && !isOwner && <FriendButton />}
        {isOwner && <EditProfile />}
      </div>
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
