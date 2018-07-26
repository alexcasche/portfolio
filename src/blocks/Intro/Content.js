import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIERS = {
  animated: () => `
  opacity: 1;
  `
}

const Content = styled.div`
  padding-bottom: 50px;
  opacity: 0;
  transition: opacity .35s ease-in-out .25s;
  text-align: center;
  ${applyStyleModifiers(MODIFIERS)};
`

export default Content