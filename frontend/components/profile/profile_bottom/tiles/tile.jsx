import React from "react";
import styled from "styled-components";

export default styled.div`
  border-radius: 5px;
  padding: 16px;
  background: white;
  margin-top: 16px;
  h3 {
    font-size: 1.2rem;
  }
  em {
    font-weight: 800;
  }
  * + * {
    margin: 5px 0;
  }
`;
