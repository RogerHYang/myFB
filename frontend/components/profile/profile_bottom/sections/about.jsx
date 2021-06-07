import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import About from "../tiles/about";
import Friends from "../tiles/friends";
import Photos from "../tiles/photos";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default () => {
  const { userId } = useParams();
  const user = useSelector((state) => state.entities.users[userId]);

  return (
    <Container>
      <About user={user} />
      <Friends user={user} preview={true} />
      <Photos user={user} preview={true} />
    </Container>
  );
};
