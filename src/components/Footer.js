import { StyledFooter } from './styles/StyledContainers.styled'
import { FooterButton } from './styles/StyledButtons.styled'

const Footer = ({ handler }) => {
  return (
    <StyledFooter>
      <FooterButton onClick={handler}>Dealer's Choice</FooterButton>
    </StyledFooter>
  )
}

export default Footer
