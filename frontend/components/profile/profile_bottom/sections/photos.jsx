import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Photos from "../tiles/photos";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => {
  const { userId } = useParams();
  const user = useSelector((state) => state.entities.users[userId]);

  return (
    <Container>
      <Photos user={user} />
    </Container>
  );
};
