import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
  padding-bottom: 0.5rem;
  &[class*='active'] {
    font-weight: 700;
    border-bottom: 1px solid #fff;
  }
`
export const NavigateBack = styled(Link)`
  color: #5e5e5e;
  padding-bottom: 0.5rem;
  font-size: 1.4rem;
`

export const MenuItemLink = styled(Link)`
  color: #1c1c1c;
  font-size: 2.4rem;
  text-decoration: none;
  list-style: none;
  &:hover {
    color: #5e5e5e;
  }
`

export const StyledRecipeLink = styled(Link)`
  max-width: 22.38rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
