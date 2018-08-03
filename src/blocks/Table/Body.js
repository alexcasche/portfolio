import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIERS = {
  left: ({theme}) => `
    border-width: 0 1px 1px 1px;
    ${theme.breaks.tablet} {
      border-radius: 0 0 0 5px;
    }
  `,
  right: ({theme}) => `
    border-width: 0 1px 1px 1px;
    border-radius: 0 0 5px 5px;
    ${theme.breaks.tablet} {
      border-width: 0 1px 1px 0;
      border-radius: 0 0 5px 0;
    }
  `
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-color: ${props => props.theme.colors.white};
  overflow: hidden;
  flex: 1;
  ${applyStyleModifiers(MODIFIERS)};
`

export default Content

