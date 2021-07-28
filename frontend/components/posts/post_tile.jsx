import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faTrashAlt,
  faEdit,
} from "@fortawesome/free-regular-svg-icons";
import * as faSolid from "@fortawesome/free-solid-svg-icons";

import ProfilePicture from "../profile/profile_picture/profile_picture";
import { StandardButton, ButtonLabel } from "../utils/buttons";

import Comment from "../comment/comment";
import CommentForm from "../comment/comment_form";

import { openModal } from "../../actions/modal_actions";
import CreatePostForm from "./create_post_form";

import { deletePost } from "../../actions/post_actions";

import { toggleLike } from "../../actions/like_actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  padding: 0 16px;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  height: 73px;
  padding: 16px 0;
  display: flex;
  align-items: center;
  font-size: 0.9375rem;
  font-weight: 600;
  width: 100%;
  gap: 11px;
  width: fit-content;
`;

const AuthorAndRecipient = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Name = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const DateLine = styled.div`
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.2308;
  color: var(--secondary-text);
`;

const EllipsisButton = styled.div`
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: var(--secondary-text);
  position: relative;
  &:after {
    position: absolute;
    z-index: 901;
    cursor: pointer;
    display: block;
    content: " ";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    ${({ menuIsOpen }) =>
      menuIsOpen &&
      css`
        background-color: rgba(0, 0, 0, 0.05);
      `}
  }
  ${({ menuIsOpen }) =>
    !menuIsOpen &&
    css`
      &:hover:after {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `}
  ${({ menuIsOpen }) =>
    menuIsOpen &&
    css`
      &:before {
        position: fixed;
        z-index: 900;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: transparent;
        cursor: default;
        content: " ";
      }
    `}
`;

const EllipsisMenu = styled.div`
  position: absolute;
  z-index: 901;
  width: 200px;
  padding: 8px;
  border-radius: var(--card-corner-radius);
  margin-top: 15px;
  top: 32px;
  right: 0;
  background-color: white;
  box-shadow: 0 12px 28px 0 var(--shadow-2), 0 2px 4px 0 var(--shadow-1),
    inset 0 0 0 1px var(--shadow-inset);
`;

const TriangleUp = styled.div`
  box-sizing: content-box;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
  position: absolute;
  right: 8px;
  top: -10px;
`;

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:after {
    position: absolute;
    display: block;
    content: " ";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &:hover:after {
    background-color: rgba(0, 0, 0, 0.05);
  }
  border-radius: 6px;
  padding: 8px;
  min-height: 36px;
`;

const MenuIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;

const MenuText = styled.div`
  color: var(--primary-text);
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.3333;
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
  color: var(--secondary-text);
  font-weight: normal;
  font-size: 0.9375rem;
  line-height: 1.3333;
`;

const LikeCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ liked }) =>
    liked &&
    css`
      color: var(--accent);
    `}
`;

const LikeIcon = styled.div`
  background: linear-gradient(#29b4ff, #0064e1);
  border-radius: 50%;
  color: white;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  font-size: 10px;
  justify-content: center;
  margin-right: 6px;
`;

const CommentCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const PostTile = ({ postId }) => {
  const [
    { content, createdAt },
    author,
    recipient,
    comments,
    commentCount,
    sessionUserId,
    likeCount,
    likedPosts,
  ] = useSelector(({ entities, xwalk, stats, session }) => {
    const post = entities.posts[postId];
    return [
      post,
      entities.avatars[post.authorId],
      entities.avatars[post.recipientId],
      xwalk.comments[postId],
      stats.postCommentCount[postId],
      session.id,
      stats.postLikeCount[postId],
      xwalk.likedPosts,
    ];
  });

  const { userId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [menuIsOpen, toggleMenuIsOpen] = useState(false);
  const [numCommentsShown, setNumCommentsShown] = useState(1);

  const inputRef = useRef();

  return (
    <Container>
      <Header>
        <Info>
          <ProfilePicture height="40px" userId={author.id} />
          <div>
            <AuthorAndRecipient>
              <Name onClick={() => history.replace(`/users/${author.id}`)}>
                {author.firstName} {author.lastName}
              </Name>
              {author.id !== recipient.id &&
                recipient.id !== sessionUserId &&
                recipient.id !== parseInt(userId) && (
                  <>
                    <FontAwesomeIcon icon={faSolid.faCaretRight} />
                    <Name
                      onClick={() => history.replace(`/users/${recipient.id}`)}
                    >
                      {recipient.firstName} {recipient.lastName}
                    </Name>
                  </>
                )}
            </AuthorAndRecipient>
            <DateLine>
              {new Date(createdAt).toLocaleDateString("en-US")}
            </DateLine>
          </div>
        </Info>
        {author.id === sessionUserId && (
          <EllipsisButton
            menuIsOpen={menuIsOpen}
            onClick={() => toggleMenuIsOpen(!menuIsOpen)}
          >
            <FontAwesomeIcon icon={faSolid.faEllipsisH} />
            {menuIsOpen && (
              <EllipsisMenu>
                <TriangleUp />
                <MenuButton
                  onClick={() =>
                    dispatch(
                      openModal(() => <CreatePostForm postId={postId} />)
                    )
                  }
                >
                  <MenuIcon>
                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                  </MenuIcon>
                  <MenuText>Edit post</MenuText>
                </MenuButton>
                <MenuButton onClick={() => dispatch(deletePost(postId))}>
                  <MenuIcon>
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                  </MenuIcon>
                  <MenuText>Delete post</MenuText>
                </MenuButton>
              </EllipsisMenu>
            )}
          </EllipsisButton>
        )}
      </Header>
      <Body>{content}</Body>
      {(commentCount > 0 || likeCount > 0) && (
        <Statistics>
          <LikeCount>
            {likeCount > 0 && (
              <>
                <LikeIcon>
                  <FontAwesomeIcon icon={faSolid.faThumbsUp} />
                </LikeIcon>
                <span>{likeCount}</span>
              </>
            )}
          </LikeCount>
          {commentCount > 0 && (
            <CommentCount
              onClick={() => setNumCommentsShown(numCommentsShown > 0 ? 0 : 1)}
            >
              {commentCount} Comments
            </CommentCount>
          )}
        </Statistics>
      )}
      <hr />
      <ButtonsBar>
        <StandardButton
          onClick={() =>
            dispatch(toggleLike({ likeable_type: "Post", likeable_id: postId }))
          }
        >
          {likedPosts.includes(postId) ? (
            <ButtonLabel
              icon={faSolid.faThumbsUp}
              text="Liked"
              color="hsl(214, 89%, 52%)"
            />
          ) : (
            <ButtonLabel icon={faThumbsUp} text="Like" color="#65676B" />
          )}
        </StandardButton>
        <StandardButton
          onClick={() => inputRef.current && inputRef.current.focus()}
        >
          <ButtonLabel icon={faComment} text="Comment" color="#65676B" />
        </StandardButton>
      </ButtonsBar>
      <hr />
      {numCommentsShown > 0 && (
        <>
          {numCommentsShown < (comments?.length ?? 0) && (
            <HiddenComments>
              <ShowMoreComments
                onClick={() => setNumCommentsShown(comments?.length ?? 0)}
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
        cbSubmit={() => setNumCommentsShown(numCommentsShown + 1)}
      />
    </Container>
  );
};
export default PostTile;
