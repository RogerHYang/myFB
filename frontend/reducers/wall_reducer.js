import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  DESTROY_POST,
} from "../actions/post_actions";

export default (state = {}, { type, payload, post }) => {
  Object.freeze(state);
  switch (type) {
    case DESTROY_POST: {
      const newState = Object.assign({}, state);
      const { recipientId } = post;
      newState[recipientId] = state[recipientId].filter((id) => id !== post.id);
      return newState;
    }
    case RECEIVE_POST: {
      const newState = Object.assign({}, state);
      const { recipientId, id } = post;
      newState[recipientId] = [id].concat(state[recipientId] ?? []);
      return newState;
    }
    case RECEIVE_POSTS:
      return Object.assign({}, state, payload.wall);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
