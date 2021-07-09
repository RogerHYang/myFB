import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_POSTS, RECEIVE_FEED } from "../actions/post_actions";
import { RECEIVE_COMMENTS } from "../actions/comment_actions";

export default (state = {}, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_COMMENTS:
    case RECEIVE_POSTS:
    case RECEIVE_FEED:
      const { comments } = payload;
      if (comments?.length > 0) {
        const newState = Object.assign({}, state);
        comments.forEach((comment) => {
          newState[comment.id] = comment;
        });
        return newState;
      }
      return state;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
