import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import {
  RECEIVE_POSTS,
  RECEIVE_FEED,
  DESTROY_POST,
} from "../../actions/post_actions";
import {
  RECEIVE_LIKE,
  DESTROY_LIKE,
} from "../../actions/like_actions";

export default (
  state = {},
  { type, payload, like }
) => {
  Object.freeze(state);
  switch (type) {
    case DESTROY_LIKE: {
      const { postId, commentLikeCount } = deletedLike;
      if (state.hasOwnProperty(postId)) {
        const newState = Object.assign({}, state);
        if (commentLikeCount > 0) {
          newState[postId] = commentLikeCount;
        } else {
          delete newState[postId];
        }
        return newState;
      }
      return state;
    }
    case RECEIVE_LIKE: {
      const { postId } = like;
      const newState = Object.assign({}, state);
      newState[postId] = (newState[postId] ?? 0) + 1;
      return newState;
    }
    case RECEIVE_POSTS:
    case RECEIVE_FEED: {
      const { commentLikeCount } = payload.stats ?? {};
      if (commentLikeCount) {
        const newState = Object.assign({}, commentLikeCount);
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
