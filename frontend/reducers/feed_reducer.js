import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_POST,
  RECEIVE_FEED,
  DESTROY_POST,
} from "../actions/post_actions";

export default (state = [], { type, payload, post, deletedPost }) => {
  Object.freeze(state);
  switch (type) {
    case DESTROY_POST:
      const i = state.indexOf(deletedPost.id);
      if (i > -1) {
        const newState = state.slice();
        newState.splice(i, 1);
        return newState;
      }
      return state;
    case RECEIVE_POST:
      return [post.id].concat(state);
    case RECEIVE_FEED:
      return payload.feed ?? [];
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
