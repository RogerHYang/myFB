import { combineReducers } from "redux";

import postCommentCount from "./stats/post_comment_count_reducer";
import postLikeCount from "./stats/post_like_count_reducer";
import commentLikeCount from "./stats/comment_like_count_reducer";

export default combineReducers({
  postCommentCount,
  postLikeCount,
  commentLikeCount,
});
