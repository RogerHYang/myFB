import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MutualFriends from "./mutual_friends_count";

export default ({ user, className }) => {
  const { id, firstName, lastName, profilePicture, friendIds } = user;
  const sessionUser = useSelector(
    ({ entities: { users }, session }) => users[session.id]
  );
  const history = useHistory();
  return (
    <div
      className={className}
      style={{ cursor: "pointer", width: "101.99px", margin: "0" }}
      onClick={() => history.push(`/users/${id}/posts`)}
    >
      <div
        className="profile-picture"
        style={{ width: "101.99px", height: "101.99px", borderRadius: "7px" }}
      >
        {profilePicture && (
          <img
            src={profilePicture}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
      <div style={{ margin: "8px 0 0", minHeight: "30px", width: "100%" }}>
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
          <div
            style={{
              fontWeight: "600",
              margin: "0",
            }}
          >
            {firstName} {lastName}
          </div>
          {sessionUser?.friends?.hasOwnProperty(id) || (
            <div style={{ margin: "0" }}>
              <MutualFriends id={id} friendIds={friendIds} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
