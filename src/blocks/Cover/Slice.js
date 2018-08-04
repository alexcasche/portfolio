import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIERS = {
  left: ({ theme }) => `
    left: 0;
    transform: translateX(-200%) skew(-30deg);
    background-color: ${theme.colors.baseBlue};
    &::before {
      transform: translateX(-99%);
    }
  `,
  right: ({ theme }) => `
    left: 50%;
    transform: translateX(200%) skew(-30deg);
    background-color: ${theme.colors.darkBlue};
    &::before {
      transform: translateX(49%);
    }
  `,
  animated: (props) => `
    transform: translateX(0) skew(-30deg);
  `
  }

const Slice = styled.div`
  position: absolute;
  top: 0;
  width: calc(50% + 1px);
  height: 100%;
  transition-property: transform;
  transition-duration: .5s;
  transition-timing-function: ease-in-out;
  transition-delay: .5s;
  &:before {
    content: '';
    display: block;
    height: 100%;
    width: 200%;
    background-color: inherit;
  }
  ${applyStyleModifiers(MODIFIERS)};
`

export default Slice;