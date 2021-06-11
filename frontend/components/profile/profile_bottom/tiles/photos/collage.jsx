import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 106.664px;
  width: 106.664px;
  background-color: #bbb;
  margin: 0;
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
    </div>
  );
};

export default styled(Collage)`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 12px;
`;
