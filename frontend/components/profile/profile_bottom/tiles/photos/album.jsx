import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 160.398px;
  width: 160.398px;
  background-color: #bbb;
  margin: 0;
  border-radius: 10px;
`;

const Collage = ({ className }) => {
  return (
    <div className={className}>
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </div>
  );
};

export default styled(Collage)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
