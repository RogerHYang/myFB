import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faTrashAlt,
  faEdit,
  faGrinBeam,
  faStickyNote,
} from "@fortawesome/free-regular-svg-icons";
import { faCamera, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import ProfilePicture from "../profile/profile_picture/profile_picture";
import CommentForm from "./comment_form";

import { deleteComment } from "../../actions/comment_actions";

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

const Body = styled.div`
  width: 100%;
`;

const Trunk = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Content = styled.div`
  width: fit-content;
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
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
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

const Control = styled.span`
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const EllipsisButton = styled.div`
  font-size: 12px;
  height: 32px;
  width: 32px;
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
      `};
  }
  &:hover:after {
    background-color: rgba(0, 0, 0, 0.05);
  }
  ${({ isHovered, menuIsOpen }) =>
    !isHovered &&
    !menuIsOpen &&
    css`
      color: transparent;
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
  margin-top: 12px;
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
  right: 6px;
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

export default Comment = ({ clasName, commentId, small = false }) => {
  const [comment, { firstName, lastName }, childComments, sessionUserId] =
    useSelector(({ entities: { comments, avatars }, xwalk, session }) => [
      comments[commentId],
      avatars[comments[commentId].authorId],
      xwalk.childComments[commentId],
      session.id,
    ]);
  if (!comment) return null;

  const history = useHistory();
  const dispatch = useDispatch();
  const [menuIsOpen, toggleMenuIsOpen] = useState(false);

  const [isHovered, toggleIsHovered] = useState(false);

  const { createdAt, postId, id, authorId } = comment;
  const [isReplying, toggleIsReplying] = useState(false);
  const handleLike = (e) => {};
  return (
    <Container>
      <Header small={small}>
        <ProfilePicture
          userId={authorId}
          height={small ? "24px" : "32px"}
        ></ProfilePicture>
      </Header>
      <Body>
        <Trunk
          onMouseEnter={() => toggleIsHovered(true)}
          onMouseLeave={() => toggleIsHovered(false)}
        >
          <Content>
            <Name onClick={() => history.replace(`/users/${authorId}`)}>
              {firstName} {lastName}
            </Name>
            <Text>{comment.content}</Text>
          </Content>
          {authorId === sessionUserId && (
            <EllipsisButton
              isHovered={isHovered}
              menuIsOpen={menuIsOpen}
              onClick={(e) => toggleMenuIsOpen(!menuIsOpen)}
            >
              <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
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
                    <MenuText>Edit comment</MenuText>
                  </MenuButton>
                  <MenuButton
                    onClick={() => dispatch(deleteComment(commentId))}
                  >
                    <MenuIcon>
                      <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </MenuIcon>
                    <MenuText>Delete comment</MenuText>
                  </MenuButton>
                </EllipsisMenu>
              )}
            </EllipsisButton>
          )}
        </Trunk>
        <Footer>
          <Control onClick={handleLike}>Like</Control> ·{" "}
          <Control onClick={() => toggleIsReplying(true)}>Reply</Control> ·{" "}
          {new Date(createdAt).toLocaleDateString("en-US")}
        </Footer>
        {childComments?.length > 0 &&
          childComments?.map((id) => (
            <Comment key={id} commentId={id} small={true} />
          ))}
        {isReplying && (
          <CommentForm
            postId={postId}
            parentCommentId={id}
            cbBlur={() => toggleIsReplying(false)}
          />
        )}
      </Body>
    </Container>
  );
};
