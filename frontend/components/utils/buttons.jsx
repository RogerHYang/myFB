import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavButton = ({ onClick, childron, className }) => {
  return (
    <Button
      onClick={onClick}
      shrinks={false}
      color="#65676B"
      className={className}
    >
      {children}
    </Button>
  );
};

export const StandardButton = ({
  onClick,
  children,
  height = "2.25rem",
  className,
}) => {
  return (
    <Button onClick={onClick} height={height} className={className}>
      {children}
    </Button>
  );
};

export const StandardGrayButton = ({
  onClick,
  children,
  height = "2.25rem",
  className,
}) => {
  return (
    <Button
      onClick={onClick}
      backgroundColor="#e4e6eb"
      height={height}
      className={className}
    >
      {children}
    </Button>
  );
};

export const StandardBlueButton = ({
  onClick,
  children,
  height = "2.25rem",
  className,
}) => {
  return (
    <Button
      onClick={onClick}
      color="white"
      backgroundColor="#1877f2"
      height={height}
      className={className}
    >
      {children}
    </Button>
  );
};

export const RoundButton = ({
  onClick,
  isOn,
  children,
  height = "2.5rem",
  backgroundColor = "#e4e6eb",
  className,
}) => {
  return (
    <Button
      onClick={onClick}
      backgroundColor={isOn ? "#bfcfee" : backgroundColor}
      color={isOn ? "#1877f2" : "inherit"}
      height={height}
      width={height}
      borderRadius="50%"
      className={className}
    >
      {children}
    </Button>
  );
};

export const ButtonStandardHeight = styled.div`
  height: 2.25rem;
`;

export const RoundCorners = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;

export const GrayBackground = styled.div`
  background-color: #e4e6eb;
  height: 100%;
  width: 100%;
`;

export const BlueBackgroundWhiteText = styled.div`
  color: white;
  background-color: #1877f2;
  height: 100%;
  width: 100%;
`;

export const ButtonCenteredLabel = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonLabel = styled(({ icon, text, className }) => {
  return (
    <div className={className}>
      <FontAwesomeIcon icon={icon} />
      {icon && text && <span style={{ marginLeft: "7px" }} />}
      {text && <span>{text}</span>}
    </div>
  );
})`
  font-weight: 600;
  font-size: 0.9375rem;
  line-height: 1.3333;
  padding: 0 12px;
  color: ${({ color = "inherit" }) => color};
  font-size: ${({ fontSize = ".9375rem" }) => fontSize};
  text-align: ${({ textAlign = "center" }) => textAlign};
`;

const StyledButton = styled.button`
  padding: 0;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: ${({ borderRadius }) => borderRadius};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
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

export const Button = ({
  onClick,
  disabled = false,
  shrinks = true,
  children,
  className,
  height = "100%",
  width = "100%",
  backgroundColor = "white",
  color = "inherit",
  borderRadius = "6px",
}) => {
  return (
    <StyledButton
      height={height}
      width={width}
      backgroundColor={backgroundColor}
      color={color}
      borderRadius={borderRadius}
      className={className}
      shrinks={shrinks}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
