import { connect } from 'react-redux';

import EditDetailsForm from './edit_details_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mDTP = dispatch => {
  return {
  };
};

export default connect(mSTP, mDTP)(EditDetailsForm);