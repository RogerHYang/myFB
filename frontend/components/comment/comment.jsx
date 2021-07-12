import React from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

import ProfilePicture from "../profile/profile_picture/profile_picture";

const Container = styled.div`
  min-height: 72.5px;
  padding: 4px 0 0;
  display: flex;
`;

const Header = styled.div`
  ${({ small }) =>
    small
      ? css`
          width: 30px;
          padding: 2px 6px 0 0;
        `
      : css`
          width: 40px;
          padding: 2px 8px 0 0;
        `}
`;

const Body = styled.div``;

const Content = styled.div`
  padding: 8px 12px;
  color: var(--primary-text);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  background-color: var(--comment-background);
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 0.8125rem;
  line-height: 1.2308;
`;

const Text = styled.div`
  font-weight: normal;
  font-size: 0.9375rem;
  line-height: 1.3333;
`;

const Footer = styled.div`
  height: 18px;
  padding: 3px 0 0 12px;
  font-size: 12px;
  line-height: 12px;
  color: var(--secondary-text);
`;

const ChildComments = styled.div``;

export default Comment = ({ clasName, commentId, small = false }) => {
  const [comment, { firstName, lastName }] = useSelector(
    ({ entities: { comments, avatars } }) => [
      comments[commentId],
      avatars[comments[commentId].authorId],
    ]
  );
  const { childComments, createdAt } = comment;
  return (
    <Container>
      <Header small={small}>
        <ProfilePicture
          userId={comment.authorId}
          height={small ? "24px" : "32px"}
        ></ProfilePicture>
      </Header>
      <Body>
        <Content>
          <Name>
            {firstName} {lastName}
          </Name>
          <Text>{comment.content}</Text>
        </Content>
        <Footer>
          <span>Like</span> · <span>Reply</span> ·{" "}
          {new Date(createdAt).toLocaleDateString("en-US")}
        </Footer>
        {childComments?.length > 0 &&
          childComments?.map((id) => (
            <Comment key={id} commentId={id} small={true} />
          ))}
      </Body>
    </Container>
  );
};
