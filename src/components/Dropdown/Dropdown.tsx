import { useState } from "react";
import { Button, DropdownMenu, Menu, MenuItem, MenuItemButton } from "./styled";
import { httpMethods } from "../../consts/httpConst";

export const DropdownHttp = ({ onClickHandler, children, ...rest }: any) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(httpMethods[0])

  const httpDropdownOptions = httpMethods
  
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <DropdownMenu>
      <Button onClick={handleOpen}>{value.label}&#9660;</Button>
      {open ? (
        <Menu>
          {
            httpDropdownOptions.map((item, index) => 
            <MenuItem key={index}>
              <MenuItemButton onClick={() => {setValue(item);setOpen(false);}}>{item.label}</MenuItemButton>
            </MenuItem>)
          }
          <MenuItem >
            <MenuItemButton onClick={() => { setOpen(false);}}>Custom Method</MenuItemButton>
          </MenuItem>
        </Menu>
      ) : null}
    </DropdownMenu>
  );
}
