import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIERS = {
  left: ({ theme }) => `
    left: 0;
    transform: translateX(-100vw);
    &::before {
      background: repeating-linear-gradient(
        to right,
        ${theme.colors.baseBlue},
        ${theme.colors.baseBlue} 20px,
        ${theme.colors.lightBlue} 20px,
        ${theme.colors.lightBlue} 40px
      );
      transform: rotate(45deg) translate(-100%, -30%);
    }
  `,
  right: ({ theme }) => `
    right: 0;
    transform: translateX(100vw);
    &::before {
      background: repeating-linear-gradient(
        to left,
        ${theme.colors.baseBlue},
        ${theme.colors.baseBlue} 20px,
        ${theme.colors.lightBlue} 20px,
        ${theme.colors.lightBlue} 40px
      );
      transform: rotate(225deg) translate(-100%, -30%);
    }
  `,
  animated: () => `
  transform: translateX(0);
  `
}

const Stripes = styled.div`
  width: 120px;
  height: 100%;
  min-height: 350px;
  position: absolute;
  top: 0;
  transition: transform .5s ease-in-out .75s;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
  }
  ${applyStyleModifiers(MODIFIERS)};
`

export default Stripes