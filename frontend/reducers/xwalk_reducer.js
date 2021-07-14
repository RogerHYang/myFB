import { combineReducers } from "redux";

import comments from "./xwalk/post_to_comments_reducer";
import childComments from "./xwalk/comment_to_children_reducer";

import likedPosts from "./xwalk/liked_posts_reducer";
import likedComments from "./xwalk/liked_comments_reducer";

export default combineReducers({
  comments,
  childComments,
  likedPosts,
  likedComments,
});
