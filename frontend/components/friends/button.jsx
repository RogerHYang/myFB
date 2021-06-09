import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Accepted from "./button/accepted";
import Requested from "./button/requested";
import Received from "./button/received";
import Unconnected from "./button/unconnected";

export default ({ className }) => {
  const { userId } = useParams();
  const [user, sessionUser] = useSelector(
    ({ entities: { users }, session }) => [users[userId], users[session.id]]
  );
  switch (true) {
    case sessionUser.friends.includes(user.id):
      return <Accepted />;
    case sessionUser.sent_friend_requests.includes(user.id):
      return <Requested />;
    case sessionUser.received_friend_requests.includes(user.id):
      return <Received />;
    default:
      return <Unconnected />;
  }
};
