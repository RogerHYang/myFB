import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_POST,
  RECEIVE_FEED,
  DESTROY_POST,
} from "../actions/post_actions";

export default (state = [], { type, payload, post }) => {
  Object.freeze(state);
  switch (type) {
    case DESTROY_POST:
      return state.filter((id) => id !== post.id);
    case RECEIVE_POST:
      return [post.id].concat(state);
    case RECEIVE_FEED:
      return payload.feed ?? [];
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
