import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateUser } from "../../actions/user_actions";

const Span = styled.span`
  font-size: 2rem;
  font-family: sans-serif;
  font-weight: 700;
  margin: 0 0 8px;
`;

const Textarea = styled.textarea`
  resize: none;
  border-radius: 5px;
  border: 1px solid #4267b2;
  width: 274px;
  height: 51px;
  padding: 8px 12px;
  text-align: center;
`;

const Remaining = styled.div`
  text-align: right;
  margin: 8px 0;
  font-size: 0.8rem;
  font-family: sans-serif;
  color: #999;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OpenEditor = styled.div`
  font-weight: bold;
  cursor: pointer;
  padding: 3px;
  color: #1876f2;
  font-family: sans-serif;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

const BioText = styled.div`
  padding: 5px;
`;

const BioDisplay = ({ user, isLoggedIn, openEditor, className }) => {
  return (
    <div className={className}>
      {user.biography && <BioText>{user.biography}</BioText>}
      {isLoggedIn && (
        <OpenEditor onClick={openEditor}>
          {user.biography ? "Edit Bio" : "Add Bio"}
        </OpenEditor>
      )}
    </div>
  );
};

const StyledBioDisplay = styled(BioDisplay)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CloseEditor = styled.button`
  margin-right: 4px;
`;

const BioEditor = ({ user, closeEditor, className }) => {
  const [biography, setBiography] = useState(() => user.biography || "");
  const handleChange = (e) => {
    e.stopPropagation();
    setBiography(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.stopPropagation();
    dispatch(updateUser({ ...user, biography }));
    closeEditor();
  };
  return (
    <div className={className}>
      <Textarea
        onChange={handleChange}
        placeholder="Describe who you are"
        value={biography}
      ></Textarea>
      <Remaining>{101 - biography.length} characters remaining</Remaining>
      <Controls>
        <div>
          <FontAwesomeIcon icon="globe-americas" /> Public
        </div>
        <div>
          <CloseEditor onClick={closeEditor}>Cancel</CloseEditor>
          <button onClick={handleSubmit}>Save</button>
        </div>
      </Controls>
    </div>
  );
};

const Bio = ({ user, isLoggedIn, className }) => {
  const [editorIsOpen, setEditorIsOpen] = useState(false);
  return (
    <div className={className}>
      {!editorIsOpen ? (
        <BioDisplay
          user={user}
          isLoggedIn={isLoggedIn}
          openEditor={() => setEditorIsOpen(true)}
        />
      ) : (
        <BioEditor user={user} closeEditor={() => setEditorIsOpen(false)} />
      )}
    </div>
  );
};

const StyledBio = styled(Bio)`
  display: flex;
  flex-direction: column;
`;

const Banner = ({ className }) => {
  const { userId } = useParams();
  const user = useSelector((state) => state.entities.users[userId]);
  const currentUserId = useSelector((state) => state.session.id);
  const isLoggedIn = userId == currentUserId;
  return (
    <div className={className}>
      <Span>
        {user.first_name} {user.last_name}
      </Span>
      <StyledBio user={user} isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default styled(Banner)`
  padding: 24px 0 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
