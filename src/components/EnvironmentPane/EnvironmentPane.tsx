import React from "react";
// @ts-ignore
import {ReactComponent as ArrowDown} from "../../img/arrow-down.svg";

import { StyledEnvironmentPane } from "./styled";
import { StyledText } from "./styled";
import { StyledLink } from "./styled";
import { StyledArrowDownIco } from "./styled";
import { StyledArrowPlusIco } from "./styled";
import { StyledPlusIco } from "./styled";
import { StyledFilterArrowIco } from "./styled";
import { StyledInput } from "./styled";
import { StyledBlock } from "./styled";
import { StyledList } from "./styled";
import ListPoint from "./ListPoint/ListPoint";


const EnvironmentPane = () => {
    return (
        <StyledEnvironmentPane>
            <StyledBlock>
                <StyledLink href="#">
                    <StyledText>
                        No Environment
                        <StyledArrowDownIco src={process.env.PUBLIC_URL + '/img/arrow_down_ico.png'} />
                    </StyledText>
                </StyledLink>
                <StyledLink href="#">
                    <StyledText>Cookies</StyledText>
                </StyledLink>
            </StyledBlock>
            <StyledBlock>
                <StyledInput placeholder="Filter" />
                <StyledLink href="#">
                    <StyledFilterArrowIco src={process.env.PUBLIC_URL + '/img/filter_arrow_ico.png'} />
                </StyledLink>
                <StyledLink href="#">
                    <StyledPlusIco src={process.env.PUBLIC_URL + '/img/plus_ico.png'} />
                    {/* <ArrowDown /> */}
                    <StyledArrowPlusIco src={process.env.PUBLIC_URL + '/img/arrow_down_ico.png'} />
                </StyledLink>
            </StyledBlock>
            <StyledBlock>
                <StyledList>
                    <ListPoint method="GET" text="New project" isFirst/>   
                    <ListPoint method="POST" text="First Test"/>                
                </StyledList>
            </StyledBlock>
        </StyledEnvironmentPane>
    );
};

export default EnvironmentPane;