import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_FEED, RECEIVE_POSTS } from "../../actions/post_actions";
import { DESTROY_COMMENT } from "../../actions/comment_actions";
import { RECEIVE_LIKE } from "../../actions/like_actions";

export default (state = [], { type, payload, deletedComment }) => {
  Object.freeze(state);
  switch (type) {
    case DESTROY_COMMENT:
      const i = state.indexOf(deletedComment.id);
      if (i > -1) {
        const newState = state.slice();
        newState.splice(i, 1);
        return newState;
      }
      return state;
    case RECEIVE_LIKE:
      if (payload.likedComments) {
        return payload.likedComments;
      }
      return state;
    case RECEIVE_POSTS:
    case RECEIVE_FEED:
      return payload.xwalk?.likedComments ?? [];
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
