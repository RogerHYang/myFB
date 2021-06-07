import React from "react";
import styled from "styled-components";

import AccountButton from "./account_button";

const Menu = ({ className }) => {
  return (
    <div className={className}>
      <AccountButton />
    </div>
  );
};

export default styled(Menu)`
  display: flex;
  padding: 0 16px 0 4px;
`;
