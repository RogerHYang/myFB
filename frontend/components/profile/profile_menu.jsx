import React, { useState } from "react";
import styled, { css } from "styled-components";

const Button = styled.div`
  padding: 0 16px;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  color: #1876f2;
  ${(props) =>
    !props.selected &&
    css`
      color: #777;
      &:hover {
        background-color: #eee;
      }
    `};
`;

const MenuItem = ({ name, className, selected, handleClick }) => {
  return (
    <div className={className}>
      <Button selected={selected} onClick={handleClick}>
        {name}
      </Button>
    </div>
  );
};

const StyledMenuItem = styled(MenuItem)`
  border-bottom: 3px solid white;
  ${(props) =>
    props.selected &&
    css`
      color: #1876f2;
      border-bottom: 3px solid #1876f2;
    `};
`;

const Menu = ({ className }) => {
  const itemNames = ["Posts", "About", "Friends", "Photos"];

  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div className={className}>
      {itemNames.map((name, i) => (
        <StyledMenuItem
          key={i}
          name={name}
          handleClick={() => setSelectedIdx(i)}
          selected={i === selectedIdx}
        />
      ))}
    </div>
  );
};

export default styled(Menu)`
  display: flex;
`;
