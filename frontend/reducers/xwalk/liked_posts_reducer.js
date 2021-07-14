import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import {
  RECEIVE_FEED,
  RECEIVE_POSTS,
  DESTROY_POST,
} from "../../actions/post_actions";
import { RECEIVE_LIKE } from "../../actions/like_actions";

export default (state = [], { type, payload, deletedPost }) => {
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
    case RECEIVE_LIKE:
      if (payload.likedPosts) {
        return payload.likedPosts;
      }
      return state;
    case RECEIVE_POSTS:
    case RECEIVE_FEED:
      return payload.xwalk?.likedPosts ?? [];
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
