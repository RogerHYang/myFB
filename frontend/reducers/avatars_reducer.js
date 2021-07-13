import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_POSTS, RECEIVE_FEED } from "../actions/post_actions";

export default (state = {}, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_POSTS:
    case RECEIVE_FEED:
      const { avatars } = payload;
      if (avatars) {
        return Object.assign({}, state, avatars);
      }
      return state;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
