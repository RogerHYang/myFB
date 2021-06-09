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
    dispatch(createFriendConnection(sessionUser.id, user.id));
  };
  return (
    <Button
      className={className}
      onClick={handleClick}
      color={{ font: "white", bg: "#1877F2", hover: "#1864f2" }}
    >
      <ButtonLabelWithIcon>
        <FontAwesomeIcon icon="user-plus" />
        <span>Add Friend</span>
      </ButtonLabelWithIcon>
    </Button>
  );
};
