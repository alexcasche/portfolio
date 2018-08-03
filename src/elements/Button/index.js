import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIERS = {
  circle: () => `
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  `
}

const Button = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  font-weight: 500;
  letter-spacing: normal;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  ${applyStyleModifiers(MODIFIERS)};
`
const Link = Button.withComponent('a')

Button.Link = Link

export default Button