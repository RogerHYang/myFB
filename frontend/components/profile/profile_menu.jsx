import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled, { css } from "styled-components";

import { profileSections } from "./profile_utils";

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
  text-transform: capitalize;
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
  const history = useHistory();
  let { section } = useParams();

  if (!section) {
    section = profileSections[0];
  } else {
    section = section.toLowerCase();
  }

  return (
    <div className={className}>
      {profileSections.map((name, i) => (
        <StyledMenuItem
          key={i}
          name={name}
          handleClick={() => history.push(name)}
          selected={name === section}
        />
      ))}
    </div>
  );
};

export default styled(Menu)`
  display: flex;
`;
