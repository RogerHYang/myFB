import * as APIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

export const receiveComments = (payload) => ({
  type: RECEIVE_COMMENTS,
  payload,
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors,
});

export const createComment = (comment) => (dispatch) =>
  APIUtil.createComment(comment)
    .then((comment) => dispatch(receiveComment(comment)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));
