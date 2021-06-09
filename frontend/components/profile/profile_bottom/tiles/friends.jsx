import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Tile from "./tile";
import Small from "./friends/small";

import SeeAll from "./utils/see_all";

function Friends({ small, preview, className }) {
  const { userId } = useParams();
  const [user, sessionUser] = useSelector(
    ({ entities: { users }, session }) => [users[userId], users[session.id]]
  );
  return (
    <Tile className={className}>
      <h3>Friends</h3>
      {small && <Small />}
      {preview && <SeeAll route="friends" />}
    </Tile>
  );
}

export default styled(Friends)`
  ${(props) =>
    props.small
      ? css`
          width: 360px;
          padding: 16px;
          margin: 8px;
        `
      : css`
          width: 876px;
          padding: 16px;
        `}
`;
