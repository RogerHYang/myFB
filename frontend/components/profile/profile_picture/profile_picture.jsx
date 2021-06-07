import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Picture = ({ className }) => {
  const { userId } = useParams();
  const profile_picture = useSelector((state) => {
    return state.entities.users[userId].profile_picture;
  });

  return <img src={profile_picture} className={className} />;
};

export default styled(Picture)`
  border-radius: 50%;
`;