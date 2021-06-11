import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Span = styled.span`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 8px;
`;

const NameAndBio = ({ className }) => {
  const { userId } = useParams();
  const user = useSelector(({ entities }) => entities.users[userId]);

  return (
    <div className={className}>
      <Span>
        {user.firstName} {user.lastName}
      </Span>
    </div>
  );
};

export default styled(NameAndBio)`
  padding: 24px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
