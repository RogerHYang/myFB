import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

function Modal({ modal: Component, closeModal }) {
  if (!Component) {
    return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <Component />
      </div>
    </div>
  );
}

const mSTP = state => {
  return {
    modal: state.ui.modal
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mSTP, mDTP)(Modal);