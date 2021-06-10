import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";

import {
  createFriendConnection,
  removeFriendConnection,
} from "../../../actions/friend_actions";

import { StandardGrayButton, ButtonLabel } from "../../utils/buttons";

import {
  RoundCorners,
  ButtonStandardHeight,
  GrayBackground,
  ButtonCenteredLabel,
} from "../../utils/buttons";

export default ({ className }) => {
  const { userId } = useParams();
  const [user, sessionUser] = useSelector(
    ({ entities: { users }, session }) => [users[userId], users[session.id]]
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeFriendConnection(sessionUser.id, user.id));
  };
  return (
    <StandardGrayButton className={className} onClick={handleClick}>
      <ButtonLabel icon={faUserTimes} text="Cancel Request" />
    </StandardGrayButton>
  );
};
