import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session_actions";
import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";

export default (state = {}, { type, user, users }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_USERS:
      const newState = Object.assign({}, state);
      users.forEach((user) => {
        newState[user.id] = user;
      });
      return newState;
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER:
      return Object.assign({}, state, { [user.id]: user });
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
