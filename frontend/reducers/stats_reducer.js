import { combineReducers } from "redux";

import postCommentCount from "./stats/post_comment_count_reducer";

export default combineReducers({
  postCommentCount,
});
