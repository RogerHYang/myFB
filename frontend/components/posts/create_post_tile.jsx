import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import { faGrinBeam } from "@fortawesome/free-regular-svg-icons";

import { NavButton, ButtonLabel, Button } from "../utils/buttons";
import ProfilePicture from "../profile/profile_picture/profile_picture";

const Container = styled.div`
  height: 123px;
  width: 100%;
  border-radius: 8px;
  padding: 12px 16px 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const Top = styled.div`
  display: flex;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Picture = styled(ProfilePicture)`
  margin-right: 8px;
`;

const Text = styled.div`
  text-align: left;
  font-size: 1.0625rem;
  color: #65676b;
`;

export default () => {
  const { userId } = useParams();
  const [user, sessionUser] = useSelector(
    ({ entities: { users }, session }) => [users[userId], users[session.id]]
  );

  return (
    <Container>
      <Top>
        <Picture height="40px" user={sessionUser} isEditable={false} />
        <div style={{ flexGrow: 1 }}>
          <Button
            height="2.5rem"
            width="100%"
            borderRadius="20px"
            shrinks={false}
            backgroundColor="#f0f2f5"
            justifyContent="start"
            padding="8px 12px"
          >
            <Text>
              {sessionUser.id === user.id
                ? `What's on your mind, ${sessionUser.firstName}?`
                : `Write somethinng to ${user.firstName}...`}
            </Text>
          </Button>
        </div>
      </Top>
      <hr />
      <Bottom>
        <NavButton height="40px" flexGrow="1">
          <ButtonLabel
            text="Live Video"
            icon={faVideo}
            iconColor="red"
            iconSize="1.4rem"
          />
        </NavButton>
        <NavButton height="40px" flexGrow="1">
          <ButtonLabel
            text="Photo/Video"
            icon={faPhotoVideo}
            iconColor="green"
            iconSize="1.4rem"
          />
        </NavButton>
        <NavButton height="40px" flexGrow="1">
          <ButtonLabel
            text="Feelings"
            icon={faGrinBeam}
            iconColor="orange"
            iconSize="1.4rem"
          />
        </NavButton>
      </Bottom>
    </Container>
  );
};
