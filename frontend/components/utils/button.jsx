import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  /* font-size: 100%;
  font-family: inherit;
  font-weight: 900; */
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  /* padding: 0 12px; */
  border-radius: 5px;
  background-color: transparent;
  ${({ disabled }) =>
    disabled
      ? css`
          cursor: not-allowed;
        `
      : css`
          cursor: pointer;
          &:hover {
            background-color: rgba(0, 0, 0, 0.05);
          }
        `}
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
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick(e);
  };
  return (
    <Button
      className={className}
      onClick={handleClick}
      disabled={disabled}
      shrinks={shrinks}
    >
      {children}
    </Button>
  );
};
