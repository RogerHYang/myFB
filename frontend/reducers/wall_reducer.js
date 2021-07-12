import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_POSTS } from "../actions/post_actions";

export default (state = {}, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_POSTS:
      const { wall } = payload;
      return Object.assign({}, state, wall);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
