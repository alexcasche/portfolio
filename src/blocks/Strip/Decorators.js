import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import logo from 'assets/logo-white.svg'

const MODIFIERS = {
  light: () => `
    &::before, &::after {
      display: block;
      position: absolute;
      content: url(${logo});
      width: 400px;
      opacity: .5;
    }
    &::before {
      top: -60px;
      left: -150px;
      transform: rotate(180deg);
    }
    &::after {
      bottom: -60px;
      right: -150px;
    }
  `,
  dark: ({theme}) => `
    &::before, &::after {
      position: absolute;
      display: block;
      content: '';
      width: 120px;
      height: 500px;
      z-index: 1;
    }
    &::before {
      top: -100px;
      left: -50px;
      background: repeating-linear-gradient(
        to right,
        ${theme.colors.baseBlue},
        ${theme.colors.baseBlue} 20px,
        ${theme.colors.lightBlue} 20px,
        ${theme.colors.lightBlue} 40px
      );
      transform: rotate(45deg);
    }
    &::after {
      bottom: -100px;
      right: -50px;
      background: repeating-linear-gradient(
        to left,
        ${theme.colors.baseBlue},
        ${theme.colors.baseBlue} 20px,
        ${theme.colors.lightBlue} 20px,
        ${theme.colors.lightBlue} 40px
      );
      transform: rotate(225deg);
    }
  `
}

const Decorators = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  ${applyStyleModifiers(MODIFIERS)};
`

export default Decorators