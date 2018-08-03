import { Wrapper } from 'elements'
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIERS = {
  animated: () => `
    opacity: 1;
  `
}

const Content = Wrapper.extend `
  opacity: 0;
  transition: opacity .35s ease-in-out .25s;
  text-align: center;
  ${props => props.theme.breaks.medium} {
    padding-bottom: 20px;
  }
  ${applyStyleModifiers(MODIFIERS)};
`

export default Content