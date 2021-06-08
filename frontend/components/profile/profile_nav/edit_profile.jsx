import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../utils/button";

const Label = styled.div`
  font-weight: 900;
  * + * {
    margin-left: 7px;
  }
`;

export default ({ className }) => {
  

  const handleClick = (e) => {};
  return (
    <Button className={className} onClick={handleClick}>
      <Label>
        <FontAwesomeIcon icon="pencil-alt" />
        <span>Edit Profile</span>
      </Label>
    </Button>
  );
};
