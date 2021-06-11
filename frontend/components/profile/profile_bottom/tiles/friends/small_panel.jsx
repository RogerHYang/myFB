import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Portrait from "./small_card";

const Friends = ({ className }) => {
  const { userId } = useParams();
  const user = useSelector(({ entities: { users } }) => users[userId]);
  const list = Object.values(user.friends || {});
  return (
    <div className={className}>
      {list.slice(0, 9).map((friend) => (
        <Portrait key={friend.id} user={friend} />
      ))}
    </div>
  );
};

export default styled(Friends)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 11.015px;
  margin-top: 12px;
`;
