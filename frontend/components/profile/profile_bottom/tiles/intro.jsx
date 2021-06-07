import React from "react";
import styled from "styled-components";
import Tile from "./tile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function intro({ user, className }) {
  const { work, school } = user;
  return (
    <Tile className={className}>
      <h3>Intro</h3>
      {work && (
        <div>
          <FontAwesomeIcon icon="briefcase" style={{ color: "#aaa" }} /> Works
          at <em>{work}</em>
        </div>
      )}
      {school && (
        <div>
          <FontAwesomeIcon icon="graduation-cap" style={{ color: "#aaa" }} />{" "}
          Studied at <em>{school}</em>
        </div>
      )}
    </Tile>
  );
}

export default styled(intro)`
  width: 360px;
  margin: 8px;
`;
