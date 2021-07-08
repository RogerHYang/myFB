import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Tile from "./tile";
import SmallPanel from "./friends/small_panel";
import LargePanel from "./friends/large_panel";

import { NavButton } from "../../../utils/buttons";

const SearchBox = styled.div`
  border-radius: 50px;
  width: 219.85px;
  height: 36px;
  background-color: #f2f0f5;
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  padding: 6px 10px;
`;

const SearchInput = styled.input`
  border: 0;
  background-color: transparent;
  margin-left: 6px;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

function Friends({ small, preview, className }) {
  const { userId } = useParams();
  const [user, sessionUser] = useSelector(
    ({ entities: { users }, session }) => [users[userId], users[session.id]]
  );
  const isOwner = sessionUser && sessionUser.id === user.id;
  const friends = Object.keys(user.friends ?? {});
  const friendsCount = friends.length;
  const mutualFriendsCount =
    sessionUser &&
    friends.filter((id) => sessionUser.friends.hasOwnProperty(parseInt(id)))
      .length;
  const history = useHistory();
  const [searchPattern, setSearchPattern] = useState("");

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
          <div
            style={{
              fontSize: "1.25rem",
              fontWeight: "700",
              lineHeight: "1.2",
            }}
          >
            Friends
          </div>
          {small ? (
            <div style={{ position: "absolute", top: "10px", right: "10px" }}>
              <NavButton
                width="default"
                onClick={() => history.push("friends")}
              >
                <span
                  style={{
                    padding: "8px",
                    fontWeight: "normal",
                    color: "#216FDB",
                    lineHeight: "1.1765",
                    fontSize: "1.0625rem",
                  }}
                >
                  See All Friends
                </span>
              </NavButton>
            </div>
          ) : (
            <SearchBox>
              <div style={{ color: "#606770" }}>
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <SearchInput
                placeholder="Search"
                onChange={(e) => setSearchPattern(e.target.value)}
              />
            </SearchBox>
          )}
        </div>
        {friendsCount > 0 && (
          <span style={{ color: "#65676B" }}>
            {friendsCount}
            {(!isOwner && mutualFriendsCount && (
              <span>{` (${mutualFriendsCount} mutual)`}</span>
            )) ||
              (friendsCount === 1 ? " friend" : " friends")}
          </span>
        )}
      </div>
      {small ? <SmallPanel /> : <LargePanel searchPattern={searchPattern} />}
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
