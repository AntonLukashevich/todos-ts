import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import RequestPane from "../RequestPane/RequestPane";
import ResponsePane from "../ResponsePane/ResponsePane";

import { StyledBody } from "./styled";

const Body = () => {
    return (
        <StyledBody>
            <Sidebar />
            <RequestPane />
            <ResponsePane />
        </StyledBody>
    );
};

export default Body;