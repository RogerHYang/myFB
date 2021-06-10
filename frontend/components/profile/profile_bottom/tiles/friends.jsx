import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Tile from "./tile";
import Small from "./friends/small";

import SeeAll from "./utils/see_all";

import Button from "../../../utils/button";

const UnionMutualFriends = ({ id, friends }) => {
  const sessionUser = useSelector(
    ({ entities: { users }, session }) => users[session.id]
  );
  if (!sessionUser) return null;
  const count =
    id === sessionUser.id || sessionUser.friends?.hasOwnProperty(id)
      ? 0
      : friends.filter((id) => sessionUser.friends.hasOwnProperty(id)).length;
  if (count === 0) return null;
  return (
    <>
      <span style={{ fontSize: "0.8rem", fontWeight: "100" }}>
        {count} mutual {count === 1 ? "friend" : "friends"}
      </span>
    </>
  );
};

function Friends({ small, preview, className }) {
  const { userId } = useParams();
  const [user, sessionUser] = useSelector(
    ({ entities: { users }, session }) => [users[userId], users[session.id]]
  );
  const isOwner = sessionUser && sessionUser.id === user.id;
  const friends = Object.keys(user.friends);
  const friendsCount = friends.length;
  const mutualFriendsCount =
    sessionUser &&
    friends.filter((id) => sessionUser.friends.hasOwnProperty(parseInt(id)))
      .length;
  const history = useHistory();

  return (
    <Tile className={className}>
      <div
        style={{
          // height: "51px",
          padding: "6px 0",
          display: "flex",
          flexDirection: "column",
          gap: "6px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "1.3rem", fontWeight: "900" }}>Friends</div>
          <div style={{ width: "default", height: "24px" }}>
            <Button
              height="24px"
              color={{ bg: "white" }}
              onClick={() => history.push("friends")}
            >
              <span style={{ fontWeight: 100, color: "#216FDB" }}>
                See All Friends
              </span>
            </Button>
          </div>
        </div>
        {friendsCount && (
          <span style={{ color: "#65676B" }}>
            {friendsCount}
            {(!isOwner && mutualFriendsCount && (
              <span>{` (${mutualFriendsCount} mutual)`}</span>
            )) ||
              (friendsCount === 1 ? " friend" : " friends")}
          </span>
        )}
      </div>
      {small && <Small />}
      {preview && <SeeAll route="friends" />}
    </Tile>
  );
}

export default styled(Friends)`
  ${(props) =>
    props.small
      ? css`
          width: 360px;
          padding: 16px;
          margin: 8px;
        `
      : css`
          width: 876px;
          padding: 16px;
        `}
`;
