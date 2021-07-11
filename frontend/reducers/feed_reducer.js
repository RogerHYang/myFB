import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_FEED } from "../actions/post_actions";

export default (state = [], { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_FEED:
      return payload.feed ?? [];
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
