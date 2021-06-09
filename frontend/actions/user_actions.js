import * as APIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors,
});

export const requestUser = (userId) => (dispatch) =>
  APIUtil.requestUser(userId)
    .then((user) => dispatch(receiveUser(user)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));

export const updateUser = (user) => (dispatch) =>
  APIUtil.updateUser(user)
    .then((user) => dispatch(receiveUser(user)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));
