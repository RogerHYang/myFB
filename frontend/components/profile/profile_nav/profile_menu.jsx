import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

import { profileSections } from "../profile_utils";

const FriendCount = () => {
  const { userId } = useParams();
  const [user, sessionUser] = useSelector(
    ({ entities: { users }, session }) => [users[userId], users[session.id]]
  );
  // const isOwner = sessionUser && sessionUser.id === user.id;
  // const areFriends = sessionUser.friends?.hasOwnProperty(user.id);
  return (
    <>
      {/* {(isOwner || areFriends) && user.friends && ( */}
      {user.friends && (
        <span style={{ fontWeight: "100", fontSize: "0.9rem" }}>
          {Object.keys(user.friends).length}
        </span>
      )}
    </>
  );
};

const Button = styled.div`
  padding: 0 16px;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: .9375rem;
  border-radius: 10px;
  color: #1876f2;
  text-transform: capitalize;
  ${(props) =>
    !props.selected &&
    css`
      color: #777;
      &:hover {
        background-color: #eee;
      }
    `};
`;

const MenuItem = ({ name, className, selected, handleClick }) => {
  return (
    <div className={className}>
      <Button selected={selected} onClick={handleClick}>
        <div>
          {name} {name === "friends" && <FriendCount />}
        </div>
      </Button>
    </div>
  );
};

const StyledMenuItem = styled(MenuItem)`
  border-top: 3px solid white;
  border-bottom: 3px solid white;
  ${(props) =>
    props.selected &&
    css`
      color: #1876f2;
      border-bottom: 3px solid #1876f2;
    `};
`;

const Menu = ({ className }) => {
  const history = useHistory();
  let { section } = useParams();

  if (!section) {
    section = profileSections[0];
  } else {
    section = section.toLowerCase();
  }

  return (
    <div className={className}>
      {profileSections.map((name, i) => (
        <StyledMenuItem
          key={i}
          name={name}
          handleClick={() => history.push(name)}
          selected={name === section}
        />
      ))}
    </div>
  );
};

export default styled(Menu)`
  height: 100%;
  display: flex;
`;
