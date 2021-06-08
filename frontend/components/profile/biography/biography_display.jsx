import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const BioText = styled.div`
  padding: 5px;
`;

const OpenEditor = styled.div`
  color: #4267b2;
  font-weight: 900;
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
