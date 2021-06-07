import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Intro from "../tiles/intro";
import Photos from "../tiles/photos";
import Friends from "../tiles/friends";
import Posts from "../tiles/posts";

const Container = styled.div`
  display: flex;
  /* gap: 12px; */
  margin-top: 8px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 12px; */
`;

export default () => {
  const { userId } = useParams();
  const user = useSelector((state) => state.entities.users[userId]);

  return (
    <Container>
      <Column>
        <Intro user={user} />
        <Photos user={user} small={true} />
        <Friends user={user} small={true} />
      </Column>
      <Column>
        <Posts user={user} />
      </Column>
    </Container>
  );
};
