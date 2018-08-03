import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

import Stripes from './Stripes'

const MODIFIERS = {
  dark: ({theme}) => `
    background-color: ${theme.colors.darkerBlue}
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
      background-color: ${theme.colors.baseBlue};
      transform: translateX(-100%) skew(-30deg);
    }
    &::after {
      background-color: ${theme.colors.darkBlue};
      transform: skew(-30deg);
    }
  `
}

const Section = styled.section`
  padding: 60px 0 100px;
  position: relative;
  text-align: center;
  linear-gradient(#FFFFFF, #FAFAFA);
  ${applyStyleModifiers(MODIFIERS)};
`

Section.Stripes = Stripes

export default Section