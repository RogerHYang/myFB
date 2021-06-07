import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Photo = ({ className }) => {
  const { userId } = useParams();
  const cover_photo = useSelector((state) => {
    return state.entities.users[userId].cover_photo;
  });

  return <img src={cover_photo} className={className} />;
};

export default styled(Photo)``;
