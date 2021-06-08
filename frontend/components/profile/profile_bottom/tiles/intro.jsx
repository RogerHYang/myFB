import React from "react";
import styled from "styled-components";
import Tile from "./tile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = styled.div`
  padding: 16px 0 0 0;
  height: 32px;
  margin: 0;
  > *:first-child {
    width: 32px;
    font-size: 1.2rem;
  }
`;

function intro({ user, className }) {
  const { work, school } = user;
  return (
    <Tile className={className}>
      <h3>Intro</h3>
      {work && (
        <Item>
          <FontAwesomeIcon icon="briefcase" style={{ color: "#aaa" }} /> Works
          at <em>{work}</em>
        </Item>
      )}
      {school && (
        <Item>
          <FontAwesomeIcon icon="graduation-cap" style={{ color: "#aaa" }} />{" "}
          Studied at <em>{school}</em>
        </Item>
      )}
    </Tile>
  );
}

export default styled(intro)`
  width: 360px;
  margin: 8px;
`;
