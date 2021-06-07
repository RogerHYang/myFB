import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const FullName = ({ className }) => {
  const { userId } = useParams();
  const { first_name, last_name } = useSelector(
    (state) => state.entities.users[userId]
  );
  return (
    <h1 className={className}>
      {first_name} {last_name}
    </h1>
  );
};

export default styled(FullName)`
  font-size: 2rem;
  font-family: sans-serif;
  font-weight: 700;
  margin: 16px;
`;
