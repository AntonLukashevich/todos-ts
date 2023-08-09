import { StyledButton } from "./styled"


export const Button = ({ onClick, children, ...rest }: any) => {
  return(
    <StyledButton onClick={onClick} style={{...rest}}>{children}</StyledButton>
  )
}
