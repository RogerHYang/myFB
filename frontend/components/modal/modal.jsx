import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeModal } from "../../actions/modal_actions";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../utils/button";

const CloseButton = styled(Button)`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 1.3rem;
  font-weight: inherit;
`;

const ModalBackdrop = styled.div`
  z-index: 900;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalChild = styled.div`
  position: relative;
`;

export default () => {
  const Component = useSelector((state) => state.ui.modal);
  const dispatch = useDispatch();
  const close = () => dispatch(closeModal());
  return (
    Component && (
      <ModalBackdrop onClick={close}>
        <ModalChild onClick={(e) => e.stopPropagation()}>
          <Component />
          <CloseButton onClick={close}>
            <FontAwesomeIcon icon="times" />
          </CloseButton>
        </ModalChild>
      </ModalBackdrop>
    )
  );
};
