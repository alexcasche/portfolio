import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIERS = {
  left: ({ theme }) => `
    left: 0;
    transform: translateX(-200%) skew(-30deg);
    background-color: ${theme.colors.lightBlue};
    &::before {
      transform: translateX(-99%);
    }
  `,
  right: ({ theme }) => `
    left: 50%;
    transform: translateX(200%) skew(-30deg);
    background-color: ${theme.colors.baseBlue};
    &::before {
      transform: translateX(49%);
    }
  `,
  animated: (props) => `
    transform: translateX(0) skew(-30deg);
  `
}

const Side = styled.div`
  position: absolute;
  top: 0;
  width: calc(50% + 1px);
  height: 100%;
  transition-property: transform;
  transition-duration: ${props => props.transitionDuration};
  transition-timing-function: ${props => props.transitionTiming};
  transition-delay: ${props => props.transitionDelay};
  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 200%;
    background-color: inherit;
  }
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: skew(30deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ${applyStyleModifiers(MODIFIERS)};
`

export default Side