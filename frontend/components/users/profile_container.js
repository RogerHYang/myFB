import { connect } from "react-redux";
import { requestUser } from "../../actions/user_actions";
import { logout } from "../../actions/session_actions";
import Profile from "./profile";

const mSTP = ({ errors, session, entities }, { match }) => {
  const { users } = entities;
  const { id } = session;
  const { userId } = match.params;
  return {
    isLoggedIn: userId == id,
    user: users[userId],
    errors: errors.session,
  };
};

const mDTP = (dispatch) => {
  return {
    requestUser: (userId) => dispatch(requestUser(userId)),
    logout: () => dispatch(logout()),
  };
};

export default connect(mSTP, mDTP)(Profile);
