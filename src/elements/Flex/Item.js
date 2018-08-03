import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIERS = {
  2: ({theme}) => `
    ${theme.breaks.medium} {
      flex-basis: 50%;
    }
  `,
  3: ({theme}) => `
    ${theme.breaks.medium} {
      flex-basis: 50%;
    }
    ${theme.breaks.large} {
      flex-basis: calc(100% / 3);
    }
  `
}

const Item = styled.div`
  flex-basis: 100%;
  ${applyStyleModifiers(MODIFIERS)};
`

export default Item