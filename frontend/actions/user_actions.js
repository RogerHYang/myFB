import * as APIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors,
});

export const requestUser = (userId) => (dispatch) =>
  APIUtil.requestUser(userId)
    .then((user) => dispatch(receiveUser(user)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));

export const requestUsers = (userIds) => (dispatch) =>
  APIUtil.requestUsers(userIds)
    .then((users) => dispatch(receiveUsers(users)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));

export const updateUser = (user) => (dispatch) =>
  APIUtil.updateUser(user)
    .then((user) => dispatch(receiveUser(user)))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));
