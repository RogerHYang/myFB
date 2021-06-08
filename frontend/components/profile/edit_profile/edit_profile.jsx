import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProfilePicture from "../profile_picture/profile_picture";
import CoverPhoto from "../cover_photo/cover_photo";
import BioEditor from "../biography/biography_editor";
import IntroEditor from "../intro/intro_editor";
import Button from "../../utils/button";

const Header = styled.div`
  height: 59px;
  position: relative;
  padding: 60;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  font-size: 1.3rem;
  font-weight: 800;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  > *:first-child {
    font-weight: 900;
    font-size: 1.3rem;
  }
`;

const SectionBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
`;

const Item = styled.div`
  padding: 16px 0 0 0;
  height: 32px;
  margin: 0;
  > *:first-child {
    width: 32px;
    font-size: 1.2rem;
  }
`;

const Dialog = ({ userId, className }) => {
  const [bioEditorIsOpen, setBioEditorIsOpen] = useState(false);
  const [introEditorIsOpen, setIntroEditorIsOpen] = useState(false);
  const user = useSelector(({ entities }) => entities.users[userId]);
  return (
    <div className={className}>
      <Header>Edit Profile</Header>
      {/* <Section>
        <SectionHeader>
          <span>Profile Picture</span>
          <Button color={{ bg: "#fff", hover: "#eee" }}>Edit</Button>
        </SectionHeader>
        <ProfilePicture user={user} isEditable={false} />
      </Section>
      <Section>
        <SectionHeader>
          <span>Cover Photo</span>
          <Button color={{ bg: "#fff", hover: "#eee" }}>Edit</Button>
        </SectionHeader>
        <CoverPhoto user={user} isEditable={false} />
      </Section> */}
      <Section>
        <SectionHeader>
          <span>Biography</span>
          <Button
            color={{ bg: "#fff", hover: "#eee" }}
            onClick={() => setBioEditorIsOpen((open) => !open)}
          >
            {bioEditorIsOpen ? "Cancel" : user.biography ? "Edit" : "Add"}
          </Button>
        </SectionHeader>
        <SectionBody>
          {!bioEditorIsOpen ? (
            <span>
              {user.biography ? user.biography : "Describe yourself..."}
            </span>
          ) : (
            <BioEditor
              user={user}
              closeEditor={() => setBioEditorIsOpen(false)}
            />
          )}
        </SectionBody>
      </Section>
      <Section>
        <SectionHeader>
          <span>Intro</span>
          <Button
            color={{ bg: "#fff", hover: "#eee" }}
            onClick={() => setIntroEditorIsOpen((open) => !open)}
          >
            {introEditorIsOpen ? "Cancel" : "Edit"}
          </Button>
        </SectionHeader>
        <SectionBody>
          {!introEditorIsOpen ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {user.work && (
                <Item>
                  <FontAwesomeIcon icon="briefcase" style={{ color: "#aaa" }} />
                  Works at <em>{user.work}</em>
                </Item>
              )}
              {user.school && (
                <Item>
                  <FontAwesomeIcon
                    icon="graduation-cap"
                    style={{ color: "#aaa" }}
                  />
                  Studied at <em>{user.school}</em>
                </Item>
              )}
            </div>
          ) : (
            <IntroEditor
              user={user}
              closeEditor={() => setIntroEditorIsOpen(false)}
            />
          )}
        </SectionBody>
      </Section>
    </div>
  );
};

export default styled(Dialog)`
  width: 700px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
