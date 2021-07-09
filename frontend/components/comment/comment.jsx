import React from "react";
import { useSelector } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 72.5px;
  padding: 4px 16px 0;
  display: flex;
`;

const Header = styled.div``;

const Body = styled.div``;

const Content = styled.div`
  padding: 12px 8px;
  color: var(--primary-text);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div``;

const Text = styled.div``;

const Footer = styled.div``;

export default ({ clasName, commentId }) => {
  const comment = useSelector(({ entities }) => entities.comments[commmentId]);
  return (
    <Container>
      <Header></Header>
      <Body>
        <Content></Content>
        <Footer></Footer>
      </Body>
    </Container>
  );
};
