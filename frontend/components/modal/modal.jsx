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
  background-color: rgba(244, 244, 244, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalChild = styled.div`
  position: relative;
  border-radius: 8px;
  box-shadow: 0 12px 28px 0 rgb(0, 0, 0, 0.2), 0 2px 4px 0 rgb(0, 0, 0, 0.1),
    inset 0 0 0 1px rgb(255, 255, 255, 0.5);
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
