import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor};
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
    ${({ disabled }) =>
      disabled
        ? css`
            cursor: not-allowed;
          `
        : css`
            background-color: rgba(0, 0, 0, 0.07);
          `}
  }
  ${({ shrinks }) =>
    shrinks &&
    css`
      transition: all 0.02s ease-in-out;
      &:active {
        transform: scale(0.97);
      }
    `}
`;

export default ({
  onClick,
  disabled = false,
  shrinks = true,
  children,
  className,
  height = "100%",
  width = "100%",
  backgroundColor = "transparent",
  color = "black",
}) => {
  return (
    <Button
      height={height}
      width={width}
      backgroundColor={backgroundColor}
      color={color}
      className={className}
      shrinks={shrinks}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
