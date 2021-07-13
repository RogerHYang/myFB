import { combineReducers } from "redux";

import entities from "./entities_reducer";
import session from "./session_reducer";
import errors from "./errors_reducer";
import ui from "./ui_reducer";
import xwalk from "./xwalk_reducer";
import stats from "./stats_reducer";

export default combineReducers({
  entities,
  session,
  ui,
  errors,
  xwalk,
  stats,
});
