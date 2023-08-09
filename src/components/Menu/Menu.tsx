import { StyledMenu } from "./styled"

export const Menu = ({  children, ...rest }: any) => {
  return(
    <StyledMenu>
      {children}
    </StyledMenu>
  )
}
