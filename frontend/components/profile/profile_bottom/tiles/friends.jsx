import React from "react";
import styled, { css } from "styled-components";

import Tile from "./tile";
import Collage from "./photos/collage";
import Album from "./photos/album";

import SeeAll from "./utils/see_all";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Friends({ user, small, preview, className }) {
  const { work, school } = user;
  return (
    <Tile className={className}>
      <h3>Friends</h3>
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
