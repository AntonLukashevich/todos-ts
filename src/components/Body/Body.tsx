import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import RequestPane from "../RequestPane/RequestPane";
import ResponsePane from "../ResponsePane/ResponsePane";
import EnvironmentPane from "../EnvironmentPane/EnvironmentPane";

import { StyledBody } from "./styled";

const Body = () => {
    return (
        <StyledBody>
            <Sidebar />
            <EnvironmentPane />
            <RequestPane />
            <ResponsePane />
        </StyledBody>
    );
};

export default Body;