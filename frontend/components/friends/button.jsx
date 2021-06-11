import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { faUserPlus, faUserTimes } from "@fortawesome/free-solid-svg-icons";

import Accepted from "./button/accepted";
import Received from "./button/received";

import Friendship, { ADD, REMOVE } from "./button/friendship";
import { StandardBlueButton, StandardGrayButton } from "../utils/buttons";

export default () => {
  const { userId } = useParams();
  const [user, sessionUser] = useSelector(
    ({ entities: { users }, session }) => [users[userId], users[session.id]]
  );
  let button;
  switch (true) {
    case sessionUser.friends?.hasOwnProperty(user.id):
      return <Accepted />;
      break;
    case sessionUser.sentFriendRequests?.includes(user.id):
      return (
        <Friendship
          action={REMOVE}
          icon={faUserTimes}
          text="Cancel Request"
          Button={StandardGrayButton}
        />
      );
      break;
    case sessionUser.receivedFriendRequests?.includes(user.id):
      return <Received />;
      break;
    default:
      return (
        <Friendship
          action={ADD}
          icon={faUserPlus}
          text="Add Friend"
          Button={StandardBlueButton}
        />
      );
  }
};
