import { combineReducers } from "redux";

import comments from "./xwalk/post_to_comments_reducer";
import childComments from "./xwalk/comment_to_children_reducer";

export default combineReducers({
  comments,
  childComments,
});
