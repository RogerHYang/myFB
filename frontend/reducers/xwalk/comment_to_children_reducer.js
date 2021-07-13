import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import {
  RECEIVE_COMMENT,
  DESTROY_COMMENT,
} from "../../actions/comment_actions";
import { RECEIVE_FEED, RECEIVE_POSTS } from "../../actions/post_actions";

export default (state = {}, { type, comment, payload, deletedComment }) => {
  Object.freeze(state);
  switch (type) {
    case DESTROY_COMMENT: {
      const { id, parentCommentId } = deletedComment;
      if (parentCommentId) {
        const newState = Object.assign({}, state);
        newState[parentCommentId] = state[parentCommentId].filter(
          (commentId) => commentId !== id
        );
        if (state.hasOwnProperty(id)) {
          delete newState[id];
        }
        return newState;
      } else if (state.hasOwnProperty(id)) {
        const newState = Object.assign({}, state);
        delete newState[id];
        return newState;
      }
      return state;
    }
    case RECEIVE_FEED:
    case RECEIVE_POSTS: {
      const { xwalk } = payload;
      if (xwalk?.childComments) {
        const newState = Object.assign({}, xwalk.childComments);
        return newState;
      }
      return state;
    }
    case RECEIVE_COMMENT: {
      const { id, parentCommentId } = comment;
      if (parentCommentId) {
        const newState = Object.assign({}, state);
        newState[parentCommentId] = (state[parentCommentId] ?? []).concat([id]);
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
