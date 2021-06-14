import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { requestUser } from "../../actions/user_actions";
import { requestPosts } from "../../actions/post_actions";

import Banner from "../banner/banner";
import Profile from "../profile/profile";

const StyledProfile = styled(Profile)`
  position: absolute;
  top: 56px;
`;

export default ({ className }) => {
  const dispatch = useDispatch();

  const { userId } = useParams();
  const user = useSelector(({ entities }) => entities.users[userId]);

  useEffect(() => {
    dispatch(requestUser(userId));
    dispatch(requestPosts(userId));
  }, [dispatch, userId]);

  return (
    <>
      {user && (
        <div className={className}>
          <Banner />
          <StyledProfile />
        </div>
      )}
    </>
  );
};
