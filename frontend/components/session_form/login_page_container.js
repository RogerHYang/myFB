import { connect } from 'react-redux';

import { login, clearErrors } from '../../actions/session_actions';
import LoginPage from './login_page';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mDTP = dispatch => {
  return {
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(LoginPage);