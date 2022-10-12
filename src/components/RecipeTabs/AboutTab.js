import { StyledAboutContainer } from '../styles/StyledContainers.styled'
import { StyledParagraph } from '../styles/StyledText.styled'

const AboutTab = ({ recipe }) => {
  return (
    <StyledAboutContainer>
      <StyledParagraph>{recipe?.about}</StyledParagraph>
    </StyledAboutContainer>
  )
}
export default AboutTab
