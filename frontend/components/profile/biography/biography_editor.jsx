import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateUser } from "../../../actions/user_actions";

import { StandardGrayButton, ButtonLabel } from "../../utils/buttons";

const Textarea = styled.textarea`
  resize: none;
  border-radius: 5px;
  border: 1px solid #4267b2;
  width: 274px;
  height: 51px;
  padding: 8px 12px;
  text-align: center;
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const Remaining = styled.div`
  text-align: right;
  margin: 8px 0;
  font-size: 0.8rem;
  color: #999;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export default ({ user, closeEditor, className }) => {
  if (!user) {
    const { userId } = useParams();
    user = useSelector(({ entities }) => entities.users[userId]);
  }

  const [biography, setBiography] = useState(
    () => (user && user.biography) || ""
  );
  const [hasChanged, setHasChanged] = useState(false);

  const handleChange = (e) => {
    e.stopPropagation();
    setBiography(e.target.value);
    if (!hasChanged) {
      setHasChanged(true);
    }
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.stopPropagation();
    dispatch(updateUser({ ...user, biography }));
    closeEditor();
  };
  const disabledSave = !hasChanged || biography.length > 101;
  return (
    <div className={className}>
      <Textarea
        onChange={handleChange}
        placeholder="Describe who you are"
        value={biography}
      ></Textarea>
      <Remaining>{101 - biography.length} characters remaining</Remaining>
      <Footer>
        <div>
          <FontAwesomeIcon icon="globe-americas" /> Public
        </div>
        <Controls>
          <StandardGrayButton onClick={closeEditor}>
            <ButtonLabel text="Cancel" />
          </StandardGrayButton>
          <StandardGrayButton onClick={handleSubmit} disabled={disabledSave}>
            <ButtonLabel text="Save" disabled={disabledSave} />
          </StandardGrayButton>
        </Controls>
      </Footer>
    </div>
  );
};
