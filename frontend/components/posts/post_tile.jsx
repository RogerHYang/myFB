import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faEllipsisH,
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

import Comment from "../comment/comment";
import CommentForm from "../comment/comment_form";

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

const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 34px;
  padding: 2px 0px 10px;
`;

const LikeCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommentCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--secondary-text);
  font-weight: normal;
  font-size: 0.9375rem;
  line-height: 1.3333;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonsBar = styled.div`
  display: flex;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
`;

const HiddenComments = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 4px 0 0;
`;

const ShowMoreComments = styled.div`
  color: var(--secondary-text);
  font-weight: 600;
  font-size: 0.9375rem;
  line-height: 1.3333;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Comments = styled.div`
  padding: 4px 0 0;
`;

export default ({ postId }) => {
  const [{ content, createdAt }, author, comments] = useSelector(
    ({ entities: { posts, avatars }, xwalk }) => {
      const post = posts[postId];
      return [post, avatars[post.authorId], xwalk.comments[postId]];
    }
  );

  const [numCommentsShown, setNumCommentsShown] = useState(0);

  const commentCount = comments?.length ?? 0;

  const inputRef = useRef();
  return (
    <Container>
      <Header>
        <ProfilePicture height="40px" userId={author.id} />
        <div>
          <Fullname>
            {author.firstName} {author.lastName}
          </Fullname>
          <DateLine>{new Date(createdAt).toLocaleDateString("en-US")}</DateLine>
        </div>
      </Header>
      <Body>{content}</Body>
      {commentCount > 0 && (
        <Statistics>
          <LikeCount></LikeCount>
          {commentCount > 0 && (
            <CommentCount
              onClick={(e) => setNumCommentsShown(numCommentsShown > 0 ? 0 : 1)}
            >
              {commentCount} Comments
            </CommentCount>
          )}
        </Statistics>
      )}
      <hr />
      <ButtonsBar>
        <StandardButton>
          <ButtonLabel icon={faThumbsUp} text="Like" color="#65676B" />
        </StandardButton>
        <StandardButton
          onClick={(e) => inputRef.current && inputRef.current.focus()}
        >
          <ButtonLabel icon={faComment} text="Comment" color="#65676B" />
        </StandardButton>
      </ButtonsBar>
      <hr />
      {numCommentsShown > 0 && (
        <>
          {numCommentsShown < commentCount && (
            <HiddenComments>
              <ShowMoreComments
                onClick={(e) => setNumCommentsShown(commentCount)}
              >
                View previous comments
              </ShowMoreComments>
            </HiddenComments>
          )}
          <Comments>
            {comments?.length > 0 &&
              comments
                .slice(-numCommentsShown)
                .map((id) => <Comment key={id} commentId={id} />)}
          </Comments>
        </>
      )}
      <CommentForm
        postId={postId}
        inputRef={inputRef}
        cbSubmit={(e) => setNumCommentsShown(numCommentsShown + 1)}
      />
    </Container>
  );
};
