import React, {FC, useState} from 'react'

import { StyledListText } from "./styled";
import { StyledListPoint } from "./styled";
import { StyledListMethod } from "./styled";
import { StyledListLinkSelected } from "./styled";

const ListPoint:FC<{method: string, text: string, isFirst?: boolean}> = ({method, text, isFirst}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <StyledListPoint onClick={() => setIsActive(!isActive)}>
            <StyledListLinkSelected isActive={isActive || !!isFirst} href="#">
                <StyledListMethod>{method}</StyledListMethod>
                <StyledListText>{text}</StyledListText>
            </StyledListLinkSelected>
        </StyledListPoint>
    )
}

export default ListPoint
