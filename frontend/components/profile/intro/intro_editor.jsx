import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateUser } from "../../../actions/user_actions";

import { StandardGrayButton, ButtonLabel } from "../../utils/buttons";

const Input = styled.input`
  resize: none;
  border-radius: 5px;
  border: 1px solid #4267b2;
  width: 274px;
  margin: 5px;
  padding: 8px 12px;
  text-align: left;
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
  margin-top: 10px;
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

  const [work, setWork] = useState(() => (user && user.work) || "");
  const [school, setSchool] = useState(() => (user && user.school) || "");

  const [hasChanged, setHasChanged] = useState(false);

  const handleChange = (setAttr) => (e) => {
    e.stopPropagation();
    setAttr(e.target.value);
    if (!hasChanged) {
      setHasChanged(true);
    }
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.stopPropagation();
    dispatch(updateUser({ ...user, work, school }));
    closeEditor();
  };
  const disabledSave = !hasChanged;
  return (
    <div className={className}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "30px",
            fontSize: "1.2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon icon="briefcase" style={{ color: "#aaa" }} />
        </div>
        <Input
          onChange={handleChange(setWork)}
          placeholder="Works at"
          value={work}
        ></Input>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "30px",
            fontSize: "1.2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon icon="graduation-cap" style={{ color: "#aaa" }} />
        </div>
        <Input
          onChange={handleChange(setSchool)}
          placeholder="Studied at"
          value={school}
        ></Input>
      </div>
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
