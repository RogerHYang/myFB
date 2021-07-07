import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "./button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopSection = styled.div`
  background-color: #f0f2f5;
  padding: 92px 0 132px 0;
  width: 100%;
  min-width: 500px;
  display: flex;
  justify-content: center;
`;

const TopSectionContent = styled.div`
  width: 980px;
  display: flex;
`;

const LogoAndTagline = styled.div`
  width: 580px;
  padding: 0 32px 0 0;
`;

const Logo = styled.div`
  padding: 112px 0 16px;
`;

const Tagline = styled.div`
  padding: 0 0 20px;
  line-height: 32px;
  font-size: 1.75rem;
  width: 500px;
`;

const LoginForm = styled.form`
  margin: 40px 0 0;
  padding: 10px 0 24px;
  width: 396px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border-radius: 6px;
  font-size: 1.0625rem;
  padding: 14px 16px;
  margin: 6px 0;
  width: 330px;
  border: 1px solid #dddfe2;
  color: #1d2129;
  line-height: 1rem;
  vertical-align: middle;
  height: 22px;
  &::placeholder {
    opacity: 0.75;
  }
  &:focus {
    border-color: #1877f2;
    box-shadow: 0 0 0 2px #e7f3ff;
    caret-color: #1877f2;
    outline: none;
    &::placeholder {
      opacity: 0.5;
    }
  }
`;

const LoginButton = styled(Button)`
  color: white;
  background-color: #1877f2;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  font-weight: bold;
  line-height: 48px;
  padding: 0 16px;
  width: 364px;
  margin: 10.5px 0 0;
`;

const DemoLogin = styled.div`
  margin-top: 16px;
  cursor: pointer;
  color: #1877f2;
  font-size: 0.875rem;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const Separator = styled.div`
  align-items: center;
  border-bottom: 1px solid #dadde1;
  display: flex;
  margin: 20px 16px;
  text-align: center;
  width: 364px;
`;

const SignupButton = styled(Button)`
  color: white;
  background-color: #42b72a;
  border: none;
  border-radius: 6px;
  font-size: 17px;
  font-weight: bold;
  line-height: 48px;
  padding: 0 16px;
  margin: 6px 0 0;
`;

export default ({ className }) => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  const loginDemoUser = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <TopSection>
        <TopSectionContent>
          <LogoAndTagline>
            <Logo>myFB</Logo>
            <Tagline>
              Connect with buddies and the forest around you on myFB.
            </Tagline>
          </LogoAndTagline>
          <LoginForm>
            <Input placeholder="Email or Phone Number"></Input>
            <Input placeholder="Password"></Input>
            <LoginButton onClick={handleLogin}>Log In</LoginButton>
            <DemoLogin onClick={loginDemoUser}>Log In as Demo User</DemoLogin>
            <Separator></Separator>
            <SignupButton>Create New Account</SignupButton>
          </LoginForm>
        </TopSectionContent>
      </TopSection>
    </Container>
  );
};
