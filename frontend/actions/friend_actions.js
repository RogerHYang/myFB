import * as APIUtil from "../util/friend_api_util";
import { receiveUsers } from "./user_actions";

export const RECEIVE_FRIEND_ERRORS = "RECEIVE_FRIEND_ERRORS";

const receiveErrors = (errors) => ({
  type: RECEIVE_FRIEND_ERRORS,
  errors,
});

export const createFriendConnection = (fromUserId, toUserId) => (dispatch) =>
  APIUtil.createFriendConnection(fromUserId, toUserId)
    .then((users) => dispatch(receiveUsers(users)))
    .fail((err) =>
      dispatch(receiveErrors(err.responseJSON || err.responseText))
    );

export const removeFriendConnection = (fromUserId, toUserId) => (dispatch) =>
  APIUtil.removeFriendConnection(fromUserId, toUserId)
    .then((users) => dispatch(receiveUsers(users)))
    .fail((err) =>
      dispatch(receiveErrors(err.responseJSON || err.responseText))
    );
