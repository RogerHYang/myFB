import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_POSTS } from "../actions/post_actions";

export default (state = {}, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_POSTS:
      const { posts } = payload;
      const newState = Object.assign({}, state);
      posts.forEach((post) => {
        newState[post.id] = post;
      });
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
