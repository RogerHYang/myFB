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
import ButtonLabelWithIcon from "../../utils/button_label_with_icon";

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
    <Button className={className} onClick={handleClick}>
      <ButtonLabelWithIcon>
        <FontAwesomeIcon icon="user-times" />
        <span>Cancel Request</span>
      </ButtonLabelWithIcon>
    </Button>
  );
};
