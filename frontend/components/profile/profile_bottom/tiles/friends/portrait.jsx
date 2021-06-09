import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MutualFriends from "./mutual_friends";

export default ({ user, className }) => {
  const { id, first_name, last_name, profile_picture, friends } = user;
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
        {profile_picture && (
          <img
            src={profile_picture}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
      <div style={{ marginTop: "8px", height: "30px", width: "100%" }}>
        <span
          style={{
            fontWeight: "900",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              width: "100%",
              fontSize: "0.8rem",
              fontWeight: "900",
              overflowWrap: "normal",
            }}
          >
            {first_name} {last_name}
          </span>
          <MutualFriends id={id} friends={friends} />
        </span>
      </div>
    </div>
  );
};
