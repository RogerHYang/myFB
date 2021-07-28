import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { createComment } from "../../actions/comment_actions";
import ProfilePicture from "../profile/profile_picture/profile_picture";

const Container = styled.div`
  padding: 8px 0;
  display: flex;
  gap: 5px;
`;

const Header = styled.div``;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CommentBar = styled.div`
  border-radius: 20px;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  flex-grow: 1;
  width: 100%;
  height: 36px;
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

const Instruction = styled.div`
  height: 17px;
  color: var(--primary-text);
  padding-top: 1px;
  font-size: 12px;
`;

const CommentForm = ({
  postId,
  parentCommentId,
  inputRef,
  cbBlur,
  cbSubmit,
}) => {
  const sessionUserId = useSelector(({ session }) => session.id);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.stopPropagation();
      dispatch(
        createComment({
          content,
          post_id: postId,
          parent_comment_id: parentCommentId,
        })
      );
      setContent("");
      cbSubmit && cbSubmit();
    }
  };
  return (
    <Container>
      <Header>
        <ProfilePicture height="40px" userId={sessionUserId} />
      </Header>
      <Body>
        <CommentBar>
          <CommentInput
            ref={inputRef}
            autoFocus={cbBlur ? true : false}
            onBlur={() => content.length == 0 && cbBlur && cbBlur()}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Write a comment..."
            value={content}
          ></CommentInput>
        </CommentBar>
        <Instruction>Press Enter to post.</Instruction>
      </Body>
    </Container>
  );
};

{
  /* <div style={{ display: "flex" }}>
  <RoundButton backgroundColor="transparent" height="30px">
    <ButtonLabel icon={faGrinBeam} color="#65676B" />
  </RoundButton>
  <RoundButton backgroundColor="transparent" height="30px">
    <ButtonLabel icon={faCamera} color="#65676B" />
  </RoundButton>
  <RoundButton backgroundColor="transparent" height="30px">
    <ButtonLabel icon={faStickyNote} color="#65676B" />
  </RoundButton>
</div> */
}

export default CommentForm;
