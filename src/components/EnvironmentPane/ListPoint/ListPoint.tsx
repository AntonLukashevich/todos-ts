import React, {FC, useState} from 'react'
import { StyledListText, StyledListPoint, StyledListMethod, StyledListLinkSelected } from "./styled";

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
