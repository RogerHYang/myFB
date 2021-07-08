import * as APIUtil from "../util/session_api_util";

import { closeModal } from "./modal_actions";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

const receiveLoginErrors = (errors) => ({
  type: RECEIVE_LOGIN_ERRORS,
  errors,
});

const receiveSignupErrors = (errors) => ({
  type: RECEIVE_SIGNUP_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const signup = (user) => (dispatch) =>
  APIUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .then(() => dispatch(closeModal()))
    .fail((err) => dispatch(receiveSignupErrors(err.responseJSON)));

export const login = (user) => (dispatch) =>
  APIUtil.login(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((err) => dispatch(receiveLoginErrors(err.responseJSON)));

export const logout = () => (dispatch) => {
  return APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
    .fail((err) => dispatch(receiveErrors(err.responseJSON)));
};
