import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_POSTS, RECEIVE_FEED } from "../actions/post_actions";

export default (state = {}, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_POSTS:
    case RECEIVE_FEED:
      const newState = Object.assign({}, state);
      const { avatars } = payload;
      avatars.forEach((avatar) => {
        newState[avatar.id] = avatar;
      });
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
