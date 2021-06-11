import React from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Tile from "./tile";
import Collage from "./photos/collage";
import Album from "./photos/album";

import SeeAll from "./utils/see_all";

function Photos({ user, small, preview, className }) {
  const { work, school } = user;
  return (
    <Tile className={className}>
      <div
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          lineHeight: "1.2",
        }}
      >
        Photos
      </div>
      {small ? <Collage /> : <Album preview={preview} />}
      {preview && <SeeAll route="photos" />}
    </Tile>
  );
}

export default styled(Photos)`
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
