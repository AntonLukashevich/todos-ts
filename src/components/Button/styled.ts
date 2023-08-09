import styled from 'styled-components';

export const StyledButton = styled.button`
  width: auto;
  background-color: #2F2C36;
  color: ${(props) => props.color ? props.color : "white"};
  border: none;
  padding: 5px;
  :hover {
    color: #000;
    cursor: pointer;
  }
`
