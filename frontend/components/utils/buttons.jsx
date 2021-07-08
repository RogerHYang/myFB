import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavButton = ({
  onClick,
  isSelected,
  children,
  className,
  flexGrow,
  height,
  width,
}) => {
  return (
    <Button
      onClick={onClick}
      shrinks={false}
      color="#65676B"
      className={className}
      isSelected={isSelected}
      flexGrow={flexGrow}
      height={height}
      width={width}
    >
      {children}
    </Button>
  );
};

export const StandardButton = ({
  onClick,
  children,
  height = "2.25rem",
  width,
  className,
}) => {
  return (
    <Button
      onClick={onClick}
      height={height}
      width={width}
      className={className}
    >
      {children}
    </Button>
  );
};

export const StandardGrayButton = ({
  onClick,
  children,
  disabled,
  height = "2.25rem",
  width = "default",
  borderRadius = "6px",
  shrinks = true,
  className,
}) => {
  return (
    <Button
      onClick={onClick}
      backgroundColor="#e4e6eb"
      height={height}
      width={width}
      disabled={disabled}
      borderRadius={borderRadius}
      className={className}
      shrinks={shrinks}
    >
      {children}
    </Button>
  );
};

export const StandardBlueButton = ({
  onClick,
  children,
  height = "2.25rem",
  width = "default",
  className,
  lightblue = false,
}) => {
  return (
    <Button
      onClick={onClick}
      color={lightblue ? "#1877f2" : "#ffffff"}
      backgroundColor={lightblue ? "#bfcfee" : "#1877f2"}
      height={height}
      width={width}
      className={className}
    >
      {children}
    </Button>
  );
};

export const StandardLightBlueButton = ({
  onClick,
  children,
  height = "2.25rem",
  width = "default",
  className,
  lightblue = true,
}) => {
  return (
    <Button
      onClick={onClick}
      color={lightblue ? "#1877f2" : "#ffffff"}
      backgroundColor={lightblue ? "#bfcfee" : "#1877f2"}
      height={height}
      width={width}
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

export const ButtonLabel = styled(
  ({ icon, text, iconColor, iconSize, className }) => {
    return (
      <div className={className}>
        {icon && (
          <span style={{ color: iconColor ?? "inherit", fontSize: iconSize }}>
            <FontAwesomeIcon icon={icon} />
          </span>
        )}
        {icon && text && <span style={{ marginLeft: "7px" }} />}
        {text && <span>{text}</span>}
      </div>
    );
  }
)`
  font-weight: ${({ fontWeight = "600" }) => fontWeight};
  font-size: ${({ fontSize, text }) =>
    fontSize || (!text && "1.2rem") || "0.9375rem"};
  line-height: ${({ lineHeight, text }) =>
    lineHeight || (!text && "1") || "1.3333"};
  padding: 0 12px;
  color: ${({ color = "inherit", disabled = false }) =>
    disabled ? "#BCC0C4" : color};
  font-size: ${({ fontSize = ".9375rem" }) => fontSize};
  text-align: ${({ textAlign = "center" }) => textAlign};
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: ${({ padding }) => padding};
  border: 0;
  display: flex;
  flex-grow: ${({ flexGrow = 0 }) => flexGrow};
  justify-content: ${({ justifyContent = "center" }) => justifyContent};
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
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
  &:hover:after {
    ${({ disabled, isSelected }) =>
      !disabled &&
      !isSelected &&
      css`
        background-color: rgba(0, 0, 0, 0.05);
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
  isSelected = false,
  disabled = false,
  shrinks = true,
  children,
  className,
  height = "100%",
  width = "100%",
  backgroundColor = "white",
  color = "inherit",
  borderRadius = "6px",
  justifyContent = "center",
  flexGrow = 0,
  padding = 0,
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
      isSelected={isSelected}
      disabled={disabled}
      justifyContent={justifyContent}
      padding={padding}
      flexGrow={flexGrow}
    >
      {children}
    </StyledButton>
  );
};
