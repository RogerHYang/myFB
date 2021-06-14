import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faGrinBeam,
  faStickyNote,
} from "@fortawesome/free-regular-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import ProfilePicture from "../profile/profile_picture/profile_picture";
import {
  StandardButton,
  ButtonLabel,
  StandardGrayButton,
  RoundButton,
} from "../utils/buttons";
import { openModal, closeModal } from "../../actions/modal_actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  padding: 0 16px;
`;

const Header = styled.div`
  height: 73px;
  padding: 16px 0;
  display: flex;
  align-items: center;
  font-size: 0.9375rem;
  font-weight: 600;
  width: 100%;
  gap: 11px;
`;

const Fullname = styled.div``;
const DateLine = styled.div`
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.2308;
  color: #65676b;
`;

const Body = styled.div`
  border: 0;
  font-size: 0.9375rem;
  text-align: left;
  padding: 0 0 8px;
`;

const Extras = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  border: 1px solid #ced0d4;
  padding: 0 0 8px;
  /* margin: 0 16px; */
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const LikeBar = styled.div`
  display: flex;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
`;

const Footer = styled.div`
  padding: 16px 0;
  display: flex;
  gap: 5px;
  /* align-items: center; */
`;

const CommentBar = styled.div`
  border-radius: 20px;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  flex-grow: 1;
  /* width: default; */
`;

const CommentInput = styled.input`
  border: 0;
  background-color: transparent;
  font-size: 0.9375rem;
  flex-grow: 1;
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    color: rgba(0, 0, 0, 0.1);
  }
`;

export default ({ postId }) => {
  const [content, createdAt, author, sessionUser] = useSelector(
    ({ entities: { posts, avatars }, session }) => {
      const post = posts[postId];
      const author = avatars[post.authorId];
      const sessionUser = avatars[session.id];
      return [post.content, post.createdAt, author, sessionUser];
    }
  );

  return (
    <Container>
      <Header>
        <ProfilePicture height="40px" user={author} isEditable={false} />
        <div>
          <Fullname>
            {author.firstName} {author.lastName}
          </Fullname>
          <DateLine>{new Date(createdAt).toLocaleDateString('en-US')}</DateLine>
        </div>
      </Header>
      <Body>{content}</Body>
      <hr />
      <LikeBar>
        <StandardButton>
          <ButtonLabel icon={faThumbsUp} text="Like" color="#65676B" />
        </StandardButton>
        <StandardButton>
          <ButtonLabel icon={faComment} text="Comment" color="#65676B" />
        </StandardButton>
      </LikeBar>
      <hr />
      <Footer>
        <ProfilePicture height="40px" user={sessionUser} isEditable={false} />
        <CommentBar>
          <CommentInput placeholder="Write a comment..."></CommentInput>
          <div style={{ display: "flex" }}>
            <RoundButton backgroundColor="transparent" height="30px">
              <ButtonLabel icon={faGrinBeam} color="#65676B" />
            </RoundButton>
            <RoundButton backgroundColor="transparent" height="30px">
              <ButtonLabel icon={faCamera} color="#65676B" />
            </RoundButton>
            <RoundButton backgroundColor="transparent" height="30px">
              <ButtonLabel icon={faStickyNote} color="#65676B" />
            </RoundButton>
          </div>
        </CommentBar>
      </Footer>
    </Container>
  );
};
