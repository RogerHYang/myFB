import * as APIUtil from "../util/friend_api_util";
import { receiveUser } from "./user_actions";

export const RECEIVE_FRIEND_ERRORS = "RECEIVE_FRIEND_ERRORS";

const receiveErrors = (errors) => ({
  type: RECEIVE_FRIEND_ERRORS,
  errors,
});

export const createFriendConnection = (fromUserId, toUserId) => (dispatch) =>
  APIUtil.createFriendConnection(fromUserId, toUserId)
    .then((user) => dispatch(receiveUser(user)))
    .fail((err) =>
      dispatch(receiveErrors(err.responseJSON || err.responseText))
    );

export const removeFriendConnection = (fromUserId, toUserId) => (dispatch) =>
  APIUtil.removeFriendConnection(fromUserId, toUserId)
    .then((user) => dispatch(receiveUser(user)))
    .fail((err) =>
      dispatch(receiveErrors(err.responseJSON || err.responseText))
    );
