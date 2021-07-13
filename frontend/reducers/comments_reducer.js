import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_POSTS, RECEIVE_FEED } from "../actions/post_actions";
import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  DESTROY_COMMENT,
} from "../actions/comment_actions";

export default (state = {}, { type, payload, comment, deletedComment }) => {
  Object.freeze(state);
  switch (type) {
    case DESTROY_COMMENT: {
      const { id } = deletedComment;
      if (state.hasOwnProperty(id)) {
        const newState = Object.assign({}, state);
        delete newState[id];
        return newState;
      }
      return state;
    }
    case RECEIVE_COMMENT:
      const newState = Object.assign({}, state);
      newState[comment.id] = comment;
      return newState;
    case RECEIVE_COMMENTS:
    case RECEIVE_POSTS:
    case RECEIVE_FEED:
      const { comments } = payload;
      if (comments) {
        return Object.assign({}, state, comments);
      }
      return state;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
