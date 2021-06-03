import { connect } from 'react-redux';

import Intro from './intro';

import { openModal } from '../../actions/modal_actions';

const mSTP = ({ users }, { user }) => {
  return {
    user,
  };
};

const mDTP = dispatch => {
  return {
    openModal: modal => () => dispatch(openModal(modal)),
  };
};

export default connect(mSTP, mDTP)(Intro);