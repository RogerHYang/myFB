import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  createFriendConnection,
  removeFriendConnection,
} from "../../../actions/friend_actions";

import Button from "../../utils/button";
import ButtonLabelWithIcon from "../../utils/labels";

import { StandardBlueButton, ButtonLabel } from "../../utils/buttons";

export default ({ className }) => {
  const { userId } = useParams();
  const [user, sessionUser] = useSelector(
    ({ entities: { users }, session }) => [users[userId], users[session.id]]
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(createFriendConnection(sessionUser.id, user.id));
  };
  return (
    <StandardBlueButton className={className} onClick={handleClick}>
      <ButtonLabel icon="user-plus" text="Add Friend" />
    </StandardBlueButton>
  );
};
