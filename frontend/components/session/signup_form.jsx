import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "./button";
import { signup, login, clearErrors } from "../../actions/session_actions";

const Container = styled.div`
  width: 432px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
  background-color: white;
`;

const Header = styled.div`
  padding: 10px 16px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  color: #1c1e21;
`;

const Subtitle = styled.div`
  color: #606770;
  font-size: 15px;
  line-height: 24px;
  font-weight: normal;
`;

const Body = styled.div`
  border-top: 1px solid #dadde1;
  padding: 16px;
`;

const TextInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  background-color: #f5f6f7;
  font-size: 15px;
  color: #1d2129;
  line-height: 16px;
  padding: 11px;
  border: 1px solid #ccd0d5;
  border-radius: 5px;
  height: 16px;
  &::placeholder {
    opacity: 0.75;
  }
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0.5;
    }
  }
`;

const Name = styled.div`
  display: flex;
  gap: 10px;
`;

const Description = styled.div`
  color: #606770;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  margin-bottom: 0;
  margin-top: 10px;
  width: 95px;
`;

const Birthday = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Select = styled.select`
  border-radius: 4px;
  border: 1px solid #ccd0d5;
  color: #1c1e21;
  font-size: 15px;
  font-weight: normal;
  height: 36px;
  line-height: 20px;
  background-color: white;
  width: 125px;
  height: 36px;
  padding: 0 20px 0 8px;
  option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }
  &:focus {
    outline: none;
  }
`;

const Gender = styled.div`
  display: flex;
  gap: 10px;
`;

const GenderOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  border-radius: 4px;
  border: 1px solid #ccd0d5;
  color: #1c1e21;
  font-size: 15px;
  font-weight: normal;
  height: 36px;
  line-height: 20px;
  background-color: white;
  width: 150px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const SignupButton = styled(Button)`
  padding: 10px 32px;
  width: 194px;
  height: 36px;
  margin: 0 0 10px;
  background-color: #00a400;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background: linear-gradient(#79bc64, #578843);
  }
`;

const ErrorMessages = styled.div`
  color: red;
  font-size: 12px;
`;

export default ({ className }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthYear, setBirthYear] = useState("2021");
  const [birthMonth, setBirthMonth] = useState("6");
  const [birthDay, setBirthDay] = useState("1");
  const [gender, setGender] = useState("Female");

  const signupErrors = useSelector(({ errors }) => errors.session.signup);

  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();
    const user = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      gender,
    };
    user.birth_date = `${birthYear}-${birthMonth.padStart(
      2,
      "0"
    )}-${birthDay.padStart(2, "0")}`;
    dispatch(signup(user));
  };
  return (
    <Container>
      <Header>
        <Title>Sign Up</Title>
        <Subtitle>It's quick and easy.</Subtitle>
      </Header>
      <Body>
        <TextInputs>
          <Name>
            <Input
              placeholder="First name"
              style={{ width: "170px" }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></Input>
            <Input
              placeholder="Last name"
              style={{ width: "170px" }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></Input>
          </Name>
          <ErrorMessages>
            {signupErrors &&
              signupErrors
                .filter((msg) => msg.includes(" name "))
                .map((msg) => <p key={msg}>{msg}</p>)}
          </ErrorMessages>
          <Input
            placeholder="Mobile number or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <ErrorMessages>
            {signupErrors &&
              signupErrors
                .filter((msg) => msg.includes("Email"))
                .map((msg) => <p key={msg}>{msg}</p>)}
          </ErrorMessages>
          <Input
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <ErrorMessages>
            {signupErrors &&
              signupErrors
                .filter((msg) => msg.includes("Password"))
                .map((msg) => <p key={msg}>{msg}</p>)}
          </ErrorMessages>
        </TextInputs>
        <Description>Birthday</Description>
        <Birthday>
          <Select
            defaultValue={birthMonth}
            onChange={(e) => setBirthMonth(e.target.value)}
          >
            <option value="0" disabled>
              Month
            </option>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </Select>
          <Select
            defaultValue={birthDay}
            onChange={(e) => setBirthDay(e.target.value)}
          >
            <option value="0" disabled>
              Day
            </option>
            {[...Array(31).keys()].map((i) => (
              <option key={i + 1} value={`${i + 1}`}>
                {i + 1}
              </option>
            ))}
          </Select>
          <Select
            defaultValue={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
          >
            <option value="0" disabled>
              Year
            </option>
            {[...Array(117).keys()].map((i) => (
              <option key={2021 - i} value={`${2021 - i}`}>
                {2021 - i}
              </option>
            ))}
          </Select>
        </Birthday>
        <Description>Gender</Description>
        <Gender>
          <GenderOption>
            <div>Female</div>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
            ></input>
          </GenderOption>
          <GenderOption>
            <div>Male</div>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            ></input>
          </GenderOption>
        </Gender>
      </Body>
      <Footer>
        <SignupButton onClick={handleSignup}>Sign Up</SignupButton>
      </Footer>
    </Container>
  );
};
