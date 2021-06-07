import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function SeeAll({ route, className }) {
  const history = useHistory();
  return (
    <div className={className} onClick={() => history.push(route)}>
      See All
    </div>
  );
}

export default styled(SeeAll)`
  width: 100%;
  cursor: pointer;
  background-color: #eee;
  text-align: center;
  font-weight: 900;
  padding: 10px;
  border-radius: 5px;
  font-family: sans-serif;
  margin-top: 10px;
  &:hover {
    background-color: #ddd;
  }
`;
