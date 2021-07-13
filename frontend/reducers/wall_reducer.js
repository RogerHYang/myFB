import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  DESTROY_POST,
} from "../actions/post_actions";

export default (state = {}, { type, payload, post, deletedPost }) => {
  Object.freeze(state);
  switch (type) {
    case DESTROY_POST: {
      const { id, recipientId } = deletedPost;
      const i = state[recipientId]?.indexOf(id);
      if (i > -1) {
        const newState = Object.assign({}, state);
        newState[recipientId] = state[recipientId].slice();
        newState[recipientId].splice(i, 1);
        return newState;
      }
      return state;
    }
    case RECEIVE_POST: {
      const { id, recipientId } = post;
      if (state.hasOwnProperty(recipientId)) {
        const newState = Object.assign({}, state);
        newState[recipientId] = [id].concat(state[recipientId] ?? []);
        return newState;
      }
      return state;
    }
    case RECEIVE_POSTS:
      return Object.assign({}, state, payload.wall ?? {});
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
