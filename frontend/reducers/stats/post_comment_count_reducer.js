import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import {
  RECEIVE_POSTS,
  RECEIVE_FEED,
  DESTROY_POST,
} from "../../actions/post_actions";
import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  DESTROY_COMMENT,
} from "../../actions/comment_actions";

export default (
  state = {},
  { type, payload, comment, deletedComment, deletedPost }
) => {
  Object.freeze(state);
  switch (type) {
    case DESTROY_COMMENT: {
      const { postId, postCommentCount } = deletedComment;
      if (state.hasOwnProperty(postId)) {
        const newState = Object.assign({}, state);
        if (postCommentCount > 0) {
          newState[postId] = postCommentCount;
        } else {
          delete newState[postId];
        }
        return newState;
      }
      return state;
    }
    case DESTROY_POST:
      const { id } = deletedPost;
      if (state.hasOwnProperty(id)) {
        const newState = Object.assign({}, state);
        delete newState[id];
        return newState;
      }
      return state;
    case RECEIVE_COMMENT: {
      const { postId } = comment;
      const newState = Object.assign({}, state);
      newState[postId] = (newState[postId] ?? 0) + 1;
      return newState;
    }
    case RECEIVE_COMMENTS:
    case RECEIVE_POSTS:
    case RECEIVE_FEED: {
      const { postCommentCount } = payload.stats ?? {};
      if (postCommentCount) {
        const newState = Object.assign({}, postCommentCount);
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
