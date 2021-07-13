import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_COMMENT } from "../../actions/comment_actions";
import {
  RECEIVE_FEED,
  RECEIVE_POSTS,
  DESTROY_POST,
} from "../../actions/post_actions";

export default (state = {}, { type, post, comment, payload }) => {
  Object.freeze(state);
  switch (type) {
    case DESTROY_POST:
      if (state.hasOwnProperty(post?.id)) {
        const newState = Object.assign({}, state);
        delete newState[post.id];
        return newState;
      }
      return state;
    case RECEIVE_FEED:
    case RECEIVE_POSTS:
      if (payload?.xwalk?.comments) {
        const newState = Object.assign({}, payload.xwalk.comments);
        return newState;
      }
      return state;
    case RECEIVE_COMMENT:
      if (comment?.parentCommentId === null) {
        const newState = Object.assign({}, state);
        newState[comment.postId] = (state[comment.postId] ?? []).concat([
          comment.id,
        ]);
        return newState;
      }
      return state;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
