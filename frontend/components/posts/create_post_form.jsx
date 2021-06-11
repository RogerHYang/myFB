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
  height: 500px;
  width: 428px;
  background-color: white;
`;

export default ({ width }) => {
  return <Container></Container>;
};
