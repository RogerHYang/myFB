import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Button from "../../../../utils/button";

const Span = styled.div`
  font-weight: 900;
`;

const SeeAll = ({ route, className }) => {
  const history = useHistory();
  return (
    <Button className={className} onClick={() => history.push(route)}>
      <Span>See All</Span>
    </Button>
  );
};

export default styled(SeeAll)`
  width: 100%;
`;
