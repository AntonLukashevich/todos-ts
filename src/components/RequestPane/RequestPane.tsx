import React from "react";

import { StyledRequestPane } from "./styled";
import { SearchPanel } from "./SearchPanel/SearchPanel";

const RequestPane = () => {
  return (
    <StyledRequestPane>
      <SearchPanel />
    </StyledRequestPane>
  );
};

export default RequestPane;
