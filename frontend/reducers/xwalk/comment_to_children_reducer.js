import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_COMMENT } from "../../actions/comment_actions";
import { RECEIVE_FEED, RECEIVE_POSTS } from "../../actions/post_actions";

export default (state = {}, { type, comment, payload }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_FEED:
    case RECEIVE_POSTS:
      if (payload?.xwalk?.childComments) {
        const newState = Object.assign({}, payload.xwalk.childComments);
        return newState;
      }
      return state;
    case RECEIVE_COMMENT:
      if (comment.parentCommentId) {
        const newState = Object.assign({}, state);
        newState[comment.parentCommentId] = (
          state[comment.parentCommentId] ?? []
        ).concat([comment.id]);
        return newState;
      }
      return state;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};