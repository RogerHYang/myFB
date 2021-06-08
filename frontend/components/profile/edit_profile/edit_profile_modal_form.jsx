import React from "react";
import styled from "styled-components";

const Header = styled.div`
  height: 59;
  position: relative;
  padding: 60;
  width: 100%;
`;

const Form = ({ className }) => {
  return <div className={className}></div>;
};

export default styled(Form)`
  width: 700px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
