import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { openModal } from "../../../actions/modal_actions";
import Button from "../../utils/button";

import ProfileEditor from "../edit_profile/edit_profile";

const Label = styled.div`
  font-weight: 900;
  * + * {
    margin-left: 7px;
  }
`;

export default ({ className }) => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openModal(() => <ProfileEditor userId={userId} />));
  };
  return (
    <Button className={className} onClick={handleClick}>
      <Label>
        <FontAwesomeIcon icon="pencil-alt" />
        <span>Edit Profile</span>
      </Label>
    </Button>
  );
};
