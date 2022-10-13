import styled from 'styled-components'

export const NavHeader = styled.h1`
  font-weight: 700;
  font-size: 3.4rem;
  line-height: 4.1rem;

  color: #ffffff;
`

export const Title = styled.h1`
  font-family: Barlow;
  font-size: 6.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 7.7rem;
`

export const StyledDescription = styled.p`
  font-size: 2.4rem;
  margin-bottom: 7rem;
`

export const StyledParagraph = styled.p`
  font-size: 2rem;
  line-height: 3.2rem;
  font-family: Barlow, sans-serif;
  font-style: normal;
  font-weight: 400;
  padding-right: 2rem;
`

export const StyledTagList = styled.ul``

export const StyledIngredients = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`
export const StyledAmounts = styled(StyledIngredients)`
  align-items: flex-end;
`
export const StyledInstructions = styled(StyledParagraph)`
  grid-column: span 2;
`
export const StyledThumbnailText = styled.p`
  font-size: 2rem;
  line-height: 3.2rem;
`

export const AboutPageParagraph = styled(StyledParagraph)`
  font-size: 2.4rem;
  line-height: 2.9rem;
`
