import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import {
  RECEIVE_POSTS,
  RECEIVE_FEED,
  DESTROY_POST,
} from "../../actions/post_actions";
import { RECEIVE_LIKE } from "../../actions/like_actions";

export default (state = {}, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_LIKE:
    case RECEIVE_POSTS:
    case RECEIVE_FEED: {
      const { postLikeCount } = payload.stats ?? {};
      if (postLikeCount) {
        const newState = Object.assign({}, state, postLikeCount);
        return newState;
      }
      return state;
    }
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
