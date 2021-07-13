import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faAngellist,
} from "@fortawesome/free-brands-svg-icons";

import { NavButton, ButtonLabel } from "../utils/buttons";

const Container = styled.nav`
  background-color: transparent;
  display: flex;
  gap: 7px;
`;

const Accent = styled.div`
  height: 56px;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  ${({ isSelected }) =>
    isSelected &&
    css`
      color: #1877f2;
      border-bottom: 3px solid #1877f2;
    `}
`;

export default ({ className }) => {
  const home = useRouteMatch("/home");
  const history = useHistory();
  return (
    <Container>
      <Accent isSelected={home}>
        <NavButton
          height="100%"
          width="111.59px"
          isSelected={home}
          onClick={(e) => history.replace("/home")}
        >
          <ButtonLabel
            icon={faHome}
            iconSize="2rem"
            iconColor={home ? "#1877f2" : "#bbb"}
          />
        </NavButton>
      </Accent>
      <Accent>
        <NavButton height="100%" width="111.59px">
          <ButtonLabel icon={faUserFriends} iconSize="2rem" iconColor="#bbb" />
        </NavButton>
      </Accent>
      <Accent>
        <NavButton
          height="100%"
          width="111.59px"
          onClick={() =>
            window.open("https://github.com/RogerHYang/myFB/", "_blank")
          }
        >
          <ButtonLabel icon={faGithub} iconSize="2rem" iconColor="#bbb" />
        </NavButton>
      </Accent>
      <Accent>
        <NavButton
          height="100%"
          width="111.59px"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/roger-y-a35595114/",
              "_blank"
            )
          }
        >
          <ButtonLabel icon={faLinkedin} iconSize="2rem" iconColor="#bbb" />
        </NavButton>
      </Accent>
      {/* <Accent>
        <NavButton
          height="100%"
          width="111.59px"
          onClick={() =>
            window.open("https://angel.co/u/roger-yang-11", "_blank")
          }
        >
          <ButtonLabel icon={faAngellist} iconSize="2rem" iconColor="#bbb" />
        </NavButton>
      </Accent> */}
    </Container>
  );
};
