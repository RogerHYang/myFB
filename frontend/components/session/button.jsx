import styled from "styled-components";

export default styled.button`
  position: relative;
  &:after {
    display: block;
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }
  &:hover:after {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
