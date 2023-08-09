import { useState } from "react";
import { DropdownMenu} from "./styled";
import { httpMethods } from "../../consts/httpConst";
import { Button } from "../Button/Button";
import { Menu } from "../Menu/Menu";
import { MenuItem, MenuItemButton } from "../Menu/styled";

export const DropdownHttp = ({ onClickHandler, children, ...rest }: any) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(httpMethods[0])

  const httpDropdownOptions = httpMethods
  
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <DropdownMenu>
      <Button onClick={handleOpen} sx={{color: value.color}}>{value.label}&#9660;</Button>
      {open ? (
        <Menu>
          {
            httpDropdownOptions.map((item, index) => 
            <MenuItem key={index} color={item.color}>
              <MenuItemButton onClick={() => {setValue(item);setOpen(false);}}>{item.label}</MenuItemButton>
            </MenuItem>)
          }
          <MenuItem>
            <MenuItemButton onClick={() => { setOpen(false);}}>Custom Method</MenuItemButton>
          </MenuItem>
        </Menu>
      ) : null}
    </DropdownMenu>
  );
}
