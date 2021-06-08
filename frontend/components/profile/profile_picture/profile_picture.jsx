import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {} from '@fortawesome/react-fontawesome';

const Picture = ({ user, isEditable, className }) => {
  if (!user) {
    const { userId } = useParams();
    user = useSelector(({ entities }) => {
      return entities.users[userId];
    });
  }
  const { profile_picture } = user;

  const isLoggedIn = useSelector(({ session }) => session.id == user.id);

  return (
    <div className={className + " profile-picture"}>
      {profile_picture && (
        <img src={profile_picture} style={{ width: "100%", height: "100%" }} />
      )}
      {isEditable && isLoggedIn && <EditButton></EditButton>}
    </div>
  );
};

export default styled(Picture)`
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #eee;
`;
