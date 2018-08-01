import { applyStyleModifiers } from 'styled-components-modifiers'
import { Section } from 'elements'
import Content from './Content'
import Decorators from './Decorators'

const MODIFIERS = {
  light: () => `
    linear-gradient(#FFFFFF, #FAFAFA);
    overflow: hidden;
  `,
  dark: ({theme}) => `
    background-color: ${theme.colors.darkBlue}
    &::before, &:after {
      position: absolute;
      top: 0;
      left: 50%;
      content: '';
      display: block;
      height: 100%;
      width: 100%;
    }
    &::before {
      background-color: ${theme.colors.lightBlue};
      transform: translateX(-100%) skew(-30deg);
    }
    &::after {
      background-color: ${theme.colors.baseBlue};
      transform: skew(-30deg);
    }
  `
}

const Strip = Section.extend`
  ${applyStyleModifiers(MODIFIERS)};
`

Strip.Content = Content
Strip.Decorators = Decorators

export default Strip;