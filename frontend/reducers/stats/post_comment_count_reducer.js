import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
import {
  RECEIVE_POSTS,
  RECEIVE_FEED,
  DESTROY_POST,
} from "../../actions/post_actions";
import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
} from "../../actions/comment_actions";

export default (state = {}, { type, payload, comment, post }) => {
  Object.freeze(state);
  switch (type) {
    case DESTROY_POST:
      if (state.hasOwnProperty(post?.id)) {
        const newState = Object.assign({}, state);
        delete newState[post.id];
        return newState;
      }
      return state;
    case RECEIVE_COMMENT: {
      const newState = Object.assign({}, state);
      newState[comment.postId] = (newState[comment.postId] ?? 0) + 1;
      return newState;
    }
    case RECEIVE_COMMENTS:
    case RECEIVE_POSTS:
    case RECEIVE_FEED: {
      const { postCommentCount } = payload.stats ?? {};
      const newState = Object.assign({}, postCommentCount ?? {});
      return newState;
    }
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
