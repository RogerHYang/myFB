import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeModal } from "../../actions/modal_actions";
import styled from "styled-components";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { RoundButton, ButtonLabel } from "../utils/buttons";

const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
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
          <CloseButton>
            <RoundButton height="36px" onClick={close}>
              <ButtonLabel icon={faTimes} />
            </RoundButton>
          </CloseButton>
        </ModalChild>
      </ModalBackdrop>
    )
  );
};
