import React from "react";

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
import { StyledListText } from "./styled";
import { StyledListPoint } from "./styled";
import { StyledListMethod } from "./styled";
import { StyledListLink } from "./styled";
import { StyledListLinkSelected } from "./styled";

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
                    <StyledArrowPlusIco src={process.env.PUBLIC_URL + '/img/arrow_down_ico.png'} />
                </StyledLink>
            </StyledBlock>
            <StyledBlock>
                <StyledList>
                    <StyledListPoint>
                        <StyledListLinkSelected  href="#">
                            <StyledListMethod>GET</StyledListMethod>
                            <StyledListText>New project</StyledListText>
                        </StyledListLinkSelected>
                    </StyledListPoint>
                    <StyledListPoint>
                        <StyledListLink href="#" onClick={function(){}}>
                            <StyledListMethod>POST</StyledListMethod>
                            <StyledListText>First Test</StyledListText>
                        </StyledListLink>
                    </StyledListPoint>
                </StyledList>
            </StyledBlock>
        </StyledEnvironmentPane>
    );
};

export default EnvironmentPane;