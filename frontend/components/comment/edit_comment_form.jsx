import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import ProfilePicture from "../profile/profile_picture/profile_picture";
import { ButtonLabel, StandardGrayButton } from "../utils/buttons";
import { closeModal } from "../../actions/modal_actions";

import { patchComment } from "../../actions/comment_actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 500px;
  background-color: white;
`;

const Title = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
  border-bottom: 1px solid #ddd;
`;

const Header = styled.div`
  height: 73px;
  padding: 16px;
  display: flex;
  align-items: center;
  font-size: 0.9375rem;
  font-weight: 600;
  width: 100%;
  gap: 11px;
`;

const Body = styled.textarea`
  resize: none;
  min-height: 153px;
  border: 0;
  font-size: 1.5rem;
  text-align: left;
  padding: 8px 16px;
  font-family: sans-serif;
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    color: rgb(0, 0, 0, 0.1);
  }
`;

const Footer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EditCommentForm = ({ commentId }) => {
  const comment = useSelector(
    ({ entities: { comments } }) => comments[commentId]
  );

  const sessionUser = useSelector(
    ({ entities: { avatars }, session }) => avatars[session.id]
  );

  const [content, setContent] = useState(() => comment?.content ?? "");
  const [hasChanged, setHasChanged] = useState(false);

  const handleChange = (e) => {
    e.stopPropagation();
    setContent(e.target.value);
    if (!hasChanged) {
      setHasChanged(true);
    }
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.stopPropagation();
    const { id } = comment;
    dispatch(patchComment({ content, id }));
    dispatch(closeModal());
  };
  const disabledPost = !hasChanged || content.length === 0;
  return (
    <Container>
      <Title>Edit Comment</Title>
      <Header>
        <ProfilePicture height="40px" userId={sessionUser.id} />
        <div>
          {sessionUser.firstName} {sessionUser.lastName}
        </div>
      </Header>
      <Body
        autoFocus
        placeholder="Write a comment..."
        onChange={handleChange}
        value={content}
      ></Body>
      <Footer>
        <StandardGrayButton
          width="100%"
          onClick={handleSubmit}
          disabled={disabledPost}
          shrinks={false}
        >
          <ButtonLabel text="Update" disabled={disabledPost} />
        </StandardGrayButton>
      </Footer>
    </Container>
  );
};

export default EditCommentForm;
