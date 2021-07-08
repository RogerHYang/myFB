import * as APIUtil from "../util/post_api_util";

export const RECEIVE_FEED = "RECEIVE_FEED";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

export const receiveFeed = (payload) => ({
  type: RECEIVE_FEED,
  payload,
});

export const receivePosts = (payload) => ({
  type: RECEIVE_POSTS,
  payload,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_POST_ERRORS,
  errors,
});

export const requestPosts = (userId) => (dispatch) =>
  APIUtil.requestPosts(userId)
    .then((payload) => dispatch(receivePosts(payload)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));

export const createPost = (post, userId) => (dispatch) =>
  APIUtil.createPost(post, userId)
    .then((payload) => dispatch(receivePosts(payload)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));

export const requestFeed = (userId) => (dispatch) =>
  APIUtil.requestFeed(userId)
    .then((payload) => dispatch(receiveFeed(payload)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));
