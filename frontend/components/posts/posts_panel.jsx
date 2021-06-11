import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";

import CreatePostTile from "./create_post_tile";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  width: ${({ width }) => width};
`;

export default ({ width }) => {
  return (
    <Container width={width}>
      <CreatePostTile></CreatePostTile>
    </Container>
  );
};
