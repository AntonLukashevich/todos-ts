import styled from 'styled-components';

export const StyledListPoint = styled.li`
  font-size: 14px;
  color: #fff;
  width: 100%;
  height: 100%;   
`

export const StyledListLink = styled.a`
  text-decoration: none;  
  display:flex;    
  margin: 5px 0px 0 -35px;
  padding: 5px;
`

export const StyledListLinkSelected = styled.a<{isActive:boolean}>`
  text-decoration: none;  
  display:flex;    
  margin: 5px 0 0 -40px;
  padding: 5px;
  border-left: 4px solid #ac9aff;
  border-left: ${({isActive}) => isActive ? "4px solid #ac9aff" : "none"};
  background-color: ${({isActive}) => isActive ? "#353535" : "none"};

  &:hover {
    background: #fff;
  }
`

export const StyledListMethod = styled.p`
  color: #ac9aff;
  width: 25%;
  height: 100%;
  margin: 5px 5px 0 0;
`

export const StyledListText = styled.p`
  color: #fff;
  width: 100%;
  height: 100%;
  margin: 5px 5px 0 0;
`