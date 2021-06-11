import React from "react";
import styled from "styled-components";
import Tile from "./tile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = styled.div`
  padding: 16px 0 0 0;
  height: 32px;
  margin: 0;
  display: flex;
  align-items: center;
`;

function intro({ user, className }) {
  const { work, school } = user;
  return (
    <Tile className={className}>
      <div
        style={{
          fontSize: "1.25rem",
          fontWeight: "700",
          lineHeight: "1.2",
        }}
      >
        Intro
      </div>
      <div style={{ marginBottom: "5px" }}>
        {work && (
          <Item>
            <div
              style={{
                width: "30px",
                display: "flex",
                // justifyContent: "center",
                fontSize: "1.3rem",
              }}
            >
              <FontAwesomeIcon icon="briefcase" style={{ color: "#aaa" }} />
            </div>
            <div>
              Works at <em>{work}</em>
            </div>
          </Item>
        )}
        {school && (
          <Item>
            <div
              style={{
                width: "30px",
                display: "flex",
                // justifyContent: "center",
                fontSize: "1.3rem",
              }}
            >
              <FontAwesomeIcon
                icon="graduation-cap"
                style={{ color: "#aaa" }}
              />
            </div>
            <div>
              Studied at <em>{school}</em>
            </div>
          </Item>
        )}
      </div>
    </Tile>
  );
}

export default styled(intro)`
  width: 360px;
  margin: 8px;
`;
