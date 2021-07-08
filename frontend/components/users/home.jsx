import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";

import Banner from "../banner/banner";
import CreatePostTile from "../posts/create_post_tile";
import PostTile from "../posts/post_tile";

import { requestFeed } from "../../actions/post_actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeedContainer = styled.div`
  position: absolute;
  top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 680px;
  padding: 16px 0;
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default () => {
  const [userId, postIds] = useSelector(({ session, entities }) => [
    session.id,
    entities.feed,
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestFeed(userId));
  }, [dispatch]);

  return (
    <Container>
      <Banner />
      <FeedContainer>
        <CreatePostTile />
        <Feed>
          {postIds &&
            postIds.map((postId) => <PostTile key={postId} postId={postId} />)}
        </Feed>
      </FeedContainer>
    </Container>
  );
};
