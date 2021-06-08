import React from "react";
import styled from "styled-components";

import ProfileTop from "../profile/profile_top";
import ProfileBottom from "../profile/profile_bottom";

const Profile = ({ className }) => {
  return (
    <div className={className}>
      <ProfileTop />
      <ProfileBottom />
    </div>
  );
};

export default styled(Profile)`
  width: 100%;
`;
