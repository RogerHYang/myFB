import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import Posts from "./profile_bottom/sections/posts";
import About from "./profile_bottom/sections/about";
import Friends from "./profile_bottom/sections/friends";
import Photos from "./profile_bottom/sections/photos";

function ProfileBottom({ className }) {
  let { section } = useParams();

  if (!section) {
    section = profileSections[0];
  } else {
    section = section.toLowerCase();
  }

  let content;
  switch (section) {
    case "posts":
      content = <Posts />;
      break;
    case "about":
      content = <About />;
      break;
    case "photos":
      content = <Photos />;
      break;
    case "friends":
      content = <Friends />;
      break;
  }

  return <div className={className}>{content}</div>;
}

export default styled(ProfileBottom)`
  background-color: #ddd;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
