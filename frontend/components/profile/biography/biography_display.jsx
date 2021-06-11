import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const BioText = styled.div`
  padding: 5px;
  margin: 0;
`;

const OpenEditor = styled.div`
  color: hsl(214, 89%, 52%);
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const BioDisplay = ({ isEditable, openEditor, className }) => {
  const { userId } = useParams();
  const user = useSelector(({ entities }) => entities.users[userId]);
  const isLoggedIn = useSelector(({ session }) => session.id == userId);
  return (
    <div className={className}>
      {user.biography && <BioText>{user.biography}</BioText>}
      {isLoggedIn && isEditable && (
        <OpenEditor onClick={openEditor}>
          {user.biography ? "Edit Bio" : "Add Bio"}
        </OpenEditor>
      )}
    </div>
  );
};

export default styled(BioDisplay)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
