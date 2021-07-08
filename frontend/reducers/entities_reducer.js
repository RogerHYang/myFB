import { combineReducers } from "redux";

import users from "./users_reducer";
import posts from "./posts_reducer";
import avatars from "./avatars_reducer";
import wall from "./wall_reducer";
import feed from "./feed_reducer";

export default combineReducers({
  users,
  posts,
  avatars,
  wall,
  feed,
});
