import React from "react";

import { StyledHeader } from "./styled";
import { StyledBlock } from "./styled";
import { StyledIco } from "./styled";
import { StyledArrowIco } from "./styled";
import { StyledText } from "./styled";
import { StyledLinks } from "./styled";
import { StyledProphile } from "./styled";
import { StyledProphileIco } from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <StyledBlock>
        <StyledIco src={process.env.PUBLIC_URL + '/img/insomnia_ico.svg'} />
        <StyledText>
          Insomnia / 
          <StyledLinks href="#">
             My Collection
            <StyledArrowIco src={process.env.PUBLIC_URL + '/img/arrow_down_ico.png'}/>
          </StyledLinks>
        </StyledText>
        <StyledProphile>
          <StyledProphileIco src={process.env.PUBLIC_URL + '/img/prophile_ico.png'} />
          <StyledLinks href="#">
            Aliaksandr Kolb
            <StyledArrowIco src={process.env.PUBLIC_URL + '/img/arrow_down_ico.png'}/>
          </StyledLinks>
        </StyledProphile>
      </StyledBlock>
    </StyledHeader>
  );
};

export default Header;
