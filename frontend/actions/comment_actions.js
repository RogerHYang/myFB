import * as APIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const DESTROY_COMMENT = "DESTROY_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

export const receiveComments = (payload) => ({
  type: RECEIVE_COMMENTS,
  payload,
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});

export const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  comment,
});

export const destroyComment = (deletedComment) => ({
  type: DESTROY_COMMENT,
  deletedComment,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors,
});

export const createComment = (comment) => (dispatch) =>
  APIUtil.createComment(comment)
    .then((comment) => dispatch(receiveComment(comment)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));

export const patchComment = (comment) => (dispatch) =>
  APIUtil.patchComment(comment)
    .then((comment) => dispatch(updateComment(comment)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));

export const deleteComment = (commentId) => (dispatch) =>
  APIUtil.deleteComment(commentId)
    .then((deletedComment) => dispatch(destroyComment(deletedComment)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));
