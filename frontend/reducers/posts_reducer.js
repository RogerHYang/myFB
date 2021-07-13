import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_POST,
  UPDATE_POST,
  RECEIVE_POSTS,
  RECEIVE_FEED,
  DESTROY_POST,
} from "../actions/post_actions";

export default (state = {}, { type, payload, post }) => {
  Object.freeze(state);
  switch (type) {
    case DESTROY_POST: {
      const newState = Object.assign({}, state);
      delete newState[post.id];
      return newState;
    }
    case UPDATE_POST:
    case RECEIVE_POST: {
      const newState = Object.assign({}, state);
      newState[post.id] = post;
      return newState;
    }
    case RECEIVE_FEED:
    case RECEIVE_POSTS: {
      const { posts } = payload;
      if (posts) {
        return Object.assign({}, state, posts);
      }
      return state;
    }
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
