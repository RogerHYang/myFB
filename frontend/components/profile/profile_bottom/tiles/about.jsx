import React from "react";
import styled, { css } from "styled-components";

import Tile from "./tile";
import Collage from "./photos/collage";
import Album from "./photos/album";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About({ user, small, className }) {
  const { work, school } = user;
  return (
    <Tile className={className}>
      <h3>About</h3>
    </Tile>
  );
}

export default styled(About)`
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
