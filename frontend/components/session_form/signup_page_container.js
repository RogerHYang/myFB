import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupPage from './signup_page';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mDTP = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
  };
};

export default connect(mSTP, mDTP)(SignupPage);