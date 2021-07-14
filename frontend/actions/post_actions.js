import * as APIUtil from "../util/post_api_util";

export const RECEIVE_FEED = "RECEIVE_FEED";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DESTROY_POST = "DESTROY_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

export const receiveFeed = (payload) => ({
  type: RECEIVE_FEED,
  payload,
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post,
});

export const updatePost = (post) => ({
  type: UPDATE_POST,
  post,
});

export const destroyPost = (deletedPost) => ({
  type: DESTROY_POST,
  deletedPost,
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

export const requestFeed = (userId) => (dispatch) =>
  APIUtil.requestFeed(userId)
    .then((payload) => dispatch(receiveFeed(payload)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));

export const createPost = (post) => (dispatch) =>
  APIUtil.createPost(post)
    .then((post) => dispatch(receivePost(post)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));

export const patchPost = (post) => (dispatch) =>
  APIUtil.patchPost(post)
    .then((post) => dispatch(updatePost(post)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));

export const deletePost = (postId) => (dispatch) =>
  APIUtil.deletePost(postId)
    .then((deletedPost) => dispatch(destroyPost(deletedPost)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));
