import styled from 'styled-components';

export const DropdownMenu = styled.div`
  position: relative;
` 

export const Menu = styled.ul`
  position: absolute;
  list-style-type: none;
  margin: 5px 0;
  padding: 0;
  border: 1px solid grey;
  width: 200px;
`

export const MenuItem = styled.li`
  margin: 0;
  background-color: #2F2C36;
  :hover {
    background-color: #494747;
  }
`

export const MenuItemButton = styled.button`
  width: 100%;
  height: 100%;
  text-align: left;

  background: none;
  color: inherit;
  border: none;
  padding: 5px;
  margin: 0;
  font: inherit;
  cursor: pointer;
`
export const Button = styled.button`
  width: auto;
  background-color: #2F2C36;
  color: whitesmoke;
  border: none;
  padding: 5px;
  :hover {
    color: #000;
    cursor: pointer;
  }
`
