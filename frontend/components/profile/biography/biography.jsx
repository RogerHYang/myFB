import React, { useState } from "react";

import styled from "styled-components";

import BioDisplay from "./biography_display";
import BioEditor from "./biography_editor";

const Bio = ({ isEditable, className }) => {
  const [editorIsOpen, setEditorIsOpen] = useState(false);
  return (
    <div className={className}>
      {!editorIsOpen ? (
        <BioDisplay
          isEditable={isEditable}
          openEditor={() => setEditorIsOpen(true)}
        />
      ) : (
        <BioEditor closeEditor={() => setEditorIsOpen(false)} />
      )}
    </div>
  );
};

export default styled(Bio)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
