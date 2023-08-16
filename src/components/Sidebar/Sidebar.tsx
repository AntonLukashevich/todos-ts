import React from "react";
import { StyledSidebar, StyledIco, StyledIcoLinks } from "./styled";

const Sidebar = () => {
    return (
        <StyledSidebar>
            <StyledIcoLinks href="#"><StyledIco src={process.env.PUBLIC_URL + '/img/home_ico.svg'} /></StyledIcoLinks>
            <StyledIcoLinks href="#"><StyledIco src={process.env.PUBLIC_URL + '/img/simple_plus_ico.png'} /></StyledIcoLinks>
        </StyledSidebar>
    );
};

export default Sidebar;