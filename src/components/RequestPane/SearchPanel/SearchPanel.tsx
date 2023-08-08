import { DropdownHttp } from "../../Dropdown/Dropdown"
import { Panel, SearchBar, SendButton } from "./styled"

export const SearchPanel = () => {
  return(
    <Panel>
      <DropdownHttp />
      <SearchBar placeholder={"https://api.myproguct.com/v1/users"}/>
      <SendButton>Send</SendButton>
    </Panel>
  )
}
