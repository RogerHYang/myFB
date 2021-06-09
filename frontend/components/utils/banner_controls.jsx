import styled, { css } from "styled-components";
import RoundButton from "./round_button";

export default styled(RoundButton)`
  ${({ menuIsOpen }) =>
    menuIsOpen
      ? css`
          color: #1877f2;
          background-color: #bfcfee;
          :hover {
            background-color:  #92b3f5
          }
        `
      : css`
          color: black;
        `}
`;