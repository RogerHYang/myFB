import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";

import MutualFriends from "./mutual_friends_count";
import {
  StandardBlueButton,
  StandardLightBlueButton,
  StandardGrayButton,
  ButtonLabel,
} from "../../../../utils/buttons";

import Friendship, { ADD, REMOVE } from "../../../../friends/button/friendship";

const Container = styled.div`
  padding: 16px;
  width: 418px;
  height: 116.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Picture = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-right: 16px;
  cursor: pointer;
`;

const Text = styled.div`
  width: 100%;
  text-align: left;
`;

const StyledFullname = styled.div`
  font-weight: 600;
  font-size: 1.0625rem;
  line-height: 1.1765;
  cursor: pointer;
`;

const StyledMutualFriendsCount = styled.div`
  font-weight: 400;
  font-size: 0.8125rem;
  line-height: 1.2308;
  color: #65676b;
  cursor: pointer;
`;

export default ({ user }) => {
  const { id, firstName, lastName, profilePicture, friendIds } = user;
  const sessionUser = useSelector(
    ({ entities: { users }, session }) => users[session.id]
  );
  let button;
  if (sessionUser) {
    switch (true) {
      case sessionUser.id === id:
        break;
      case sessionUser.friends?.hasOwnProperty(id):
        break;
      case sessionUser.receivedFriendRequests?.includes(id):
        button = (
          <Friendship
            action={ADD}
            text="Respond"
            Button={StandardLightBlueButton}
            toUserId={id}
          />
        );
        break;
      case sessionUser.sentFriendRequests?.includes(id):
        button = (
          <Friendship
            action={REMOVE}
            text="Cancel"
            Button={StandardGrayButton}
            toUserId={id}
          />
        );
        break;
      default:
        button = (
          <Friendship
            action={ADD}
            text="Add Friend"
            Button={StandardBlueButton}
            toUserId={id}
          />
        );
        break;
    }
  }

  const history = useHistory();
  const handleClick = () => history.push(`/users/${id}/posts`);
  return (
    <Container>
      <Info>
        <Picture className="profile-picture" onClick={handleClick}>
          {profilePicture && (
            <img
              src={profilePicture}
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </Picture>
        <div onClick={handleClick}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: "normal",
              width: "100%",
              fontSize: "0.8124rem",
              lineHeight: "1.2308",
              overflowWrap: "normal",
            }}
          >
            <StyledFullname>
              {firstName} {lastName}
            </StyledFullname>
            <StyledMutualFriendsCount>
              <MutualFriends id={id} friendIds={friendIds} />
            </StyledMutualFriendsCount>
          </div>
        </div>
      </Info>
      {button}
    </Container>
  );
};
