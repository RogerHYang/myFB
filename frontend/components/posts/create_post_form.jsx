import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faGrinBeam } from "@fortawesome/free-regular-svg-icons";

import ProfilePicture from "../profile/profile_picture/profile_picture";
import { ButtonLabel, StandardGrayButton, RoundButton } from "../utils/buttons";
import { openModal, closeModal } from "../../actions/modal_actions";

import { createPost, patchPost } from "../../actions/post_actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 428px;
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

const Extras = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  border: 1px solid #ced0d4;
  padding: 8px 16px;
  /* margin: 0 16px; */
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.div`
  height: 142px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default ({ postId }) => {
  const post =
    postId && useSelector(({ entities: { posts } }) => posts[postId]);

  const { userId } = useParams();

  const sessionUser = useSelector(
    ({ entities: { users }, session }) => users[session.id]
  );

  const [content, setContent] = useState(() => post?.content ?? "");
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
    if (post) {
      const { id } = post;
      dispatch(patchPost({ id, content }));
    } else dispatch(createPost({ content }, userId ?? sessionUser.id));
    dispatch(closeModal());
  };
  const disabledPost = !hasChanged;
  return (
    <Container>
      <Title>{post ? "Edit" : "Create"} Post</Title>
      <Header>
        <ProfilePicture height="40px" userId={sessionUser.id} />
        <div>
          {sessionUser.firstName} {sessionUser.lastName}
        </div>
      </Header>
      <Body
        autoFocus
        placeholder="What's on your mind?"
        onChange={handleChange}
        value={content}
      ></Body>
      <Footer>
        <Extras>
          <div>Add to your post</div>
          <div style={{ display: "flex", gap: "3px" }}>
            <RoundButton height="36px" backgroundColor="white">
              <ButtonLabel
                icon={faImages}
                iconColor="green"
                iconSize="1.4rem"
              />
            </RoundButton>
            <RoundButton height="36px" backgroundColor="white">
              <ButtonLabel
                icon={faGrinBeam}
                iconColor="orange"
                iconSize="1.4rem"
              />
            </RoundButton>
          </div>
        </Extras>
        <StandardGrayButton
          width="100%"
          onClick={handleSubmit}
          disabled={disabledPost}
          shrinks={false}
        >
          <ButtonLabel
            text={post ? "Update" : "Post"}
            disabled={disabledPost}
          />
        </StandardGrayButton>
      </Footer>
    </Container>
  );
};
