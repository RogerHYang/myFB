import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Tile from "./tile";
import Small from "./friends/small";

import SeeAll from "./utils/see_all";

import Button from "../../../utils/button";

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
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
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
