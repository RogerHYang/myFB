import * as APIUtil from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DESTROY_LIKE = "DESTROY_LIKE";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";

export const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_LIKE_ERRORS,
  errors,
});

export const toggleLike = (like) => (dispatch) =>
  APIUtil.toggleLike(like)
    .then((like) => dispatch(receiveLike(like)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));
