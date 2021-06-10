import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ id, friends }) => {
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
      {count} mutual {count === 1 ? "friend" : "friends"}
    </>
  );
};
