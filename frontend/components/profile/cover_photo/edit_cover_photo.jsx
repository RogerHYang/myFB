import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../utils/button";

const Label = styled.div`
  * + * {
    margin-left: 7px;
  }
`;

const EditCoverPhoto = ({ className }) => {
  return (
    <Button>
      <Label>
        <FontAwesomeIcon icon="camera" />
        <span>Edit Cover Photo</span>
      </Label>
    </Button>
  );
};

export default styled(EditCoverPhoto)`
  background-color: white;
`;
