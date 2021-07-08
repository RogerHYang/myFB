import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_LOGIN_ERRORS,
  RECEIVE_SIGNUP_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_SESSION_ERRORS,
} from "../actions/session_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LOGIN_ERRORS:
      return Object.assign({}, state, { login: action.errors });
    case RECEIVE_SIGNUP_ERRORS:
      return Object.assign({}, state, { signup: action.errors });
    case RECEIVE_CURRENT_USER:
    case CLEAR_SESSION_ERRORS:
      return {};
    default:
      return state;
  }
};
