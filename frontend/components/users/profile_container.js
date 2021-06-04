import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Profile from './profile';

const mSTP = ({ errors, session: { id }, entities: { users } }) => {
  return {
    user: users[id],
    errors: errors.session,
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mSTP, mDTP)(Profile);