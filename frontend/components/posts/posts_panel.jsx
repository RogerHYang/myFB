import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";

import CreatePostTile from "./create_post_tile";
import PostTile from "./post_tile";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 8px;
  width: ${({ width }) => width};
`;

const Wall = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default ({ width }) => {
  const { userId } = useParams();
  const postIds = useSelector(({ entities: { wall } }) => wall[userId]);
  if (!postIds) return null;
  return (
    <Container width={width}>
      <CreatePostTile />
      <Wall>
        {postIds &&
          postIds
            .sort((a, b) => b - a)
            .map((postId) => <PostTile key={postId} postId={postId} />)}
      </Wall>
    </Container>
  );
};
