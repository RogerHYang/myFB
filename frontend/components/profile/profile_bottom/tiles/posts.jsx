import React from "react";
import styled from "styled-components";
import Tile from "./tile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function intro({ user, className }) {
  const { work, school } = user;
  return (
    <Tile className={className}>
      <h3>Posts</h3>
    </Tile>
  );
}

export default styled(intro)`
  width: 500px;
  margin: 8px;
`;
