import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import {
  RECEIVE_COMMENT,
  DESTROY_COMMENT,
} from "../../actions/comment_actions";
import {
  RECEIVE_FEED,
  RECEIVE_POSTS,
  DESTROY_POST,
} from "../../actions/post_actions";

export default (
  state = {},
  { type, post, comment, payload, deletedPost, deletedComment }
) => {
  Object.freeze(state);
  switch (type) {
    case DESTROY_COMMENT: {
      const { id, postId, parentCommentId } = deletedComment;
      if (parentCommentId === null) {
        const newState = Object.assign({}, state);
        newState[postId] = state[postId].filter(
          (commentId) => commentId !== id
        );
        return newState;
      }
      return state;
    }
    case DESTROY_POST: {
      const { id } = deletedPost;
      if (state.hasOwnProperty(id)) {
        const newState = Object.assign({}, state);
        delete newState[id];
        return newState;
      }
      return state;
    }
    case RECEIVE_FEED:
    case RECEIVE_POSTS: {
      const { xwalk } = payload;
      if (xwalk?.comments) {
        const newState = Object.assign({}, xwalk.comments);
        return newState;
      }
      return state;
    }
    case RECEIVE_COMMENT: {
      const { id, postId, parentCommentId } = comment;
      if (parentCommentId === null) {
        const newState = Object.assign({}, state);
        newState[postId] = (state[postId] ?? []).concat([id]);
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
