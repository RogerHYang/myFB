import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import { openModal } from "../../../actions/modal_actions";

import Button from "../../utils/button";

import { StandardGrayButton, ButtonLabel } from "../../utils/buttons";

import ProfileEditor from "../edit_profile/edit_profile";

export default ({ className }) => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openModal(() => <ProfileEditor userId={userId} />));
  };
  return (
    <StandardGrayButton className={className} onClick={handleClick}>
      <ButtonLabel icon={faPencilAlt} text="Edit Profile" />
    </StandardGrayButton>
  );
};
