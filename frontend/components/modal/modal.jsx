import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalChild = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default () => {
  const Component = useSelector((state) => state.ui.modal);
  const dispatch = useDispatch();
  return (
    Component && (
      <ModalBackdrop onClick={() => dispatch(closeModal())}>
        <ModalChild onClick={(e) => e.stopPropagation()}>
          <Component />
        </ModalChild>
      </ModalBackdrop>
    )
  );
};
