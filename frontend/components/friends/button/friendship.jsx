import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { faUserCheck, faUserTimes } from "@fortawesome/free-solid-svg-icons";

import {
  createFriendConnection,
  removeFriendConnection,
} from "../../../actions/friend_actions";

import { StandardButton, ButtonLabel } from "../../utils/buttons";

export const ADD = "ADD";
export const REMOVE = "REMOVE";

export default ({
  onClick,
  icon,
  text,
  fontWeight,
  Button = StandardButton,
  action = ADD,
  toUserId,
}) => {
  let { userId } = useParams();
  if (toUserId) {
    userId = toUserId;
  }
  const sessionUserId = useSelector(({ session }) => session.id);
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(
          (action === ADD ? createFriendConnection : removeFriendConnection)(
            sessionUserId,
            userId
          )
        );
        onClick && onClick();
      }}
    >
      <ButtonLabel icon={icon} text={text} fontWeight={fontWeight} />
    </Button>
  );
};
