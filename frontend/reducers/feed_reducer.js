import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_FEED } from "../actions/post_actions";

export default (state = {}, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_FEED:
      const { posts } = payload;
      const newState = Object.assign({}, state);
      newState[payload.userId] = posts.map((post) => post.id);
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
