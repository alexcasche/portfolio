import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIERS = {
  section: ({theme}) => `
    color: ${theme.colors.lighterBlue};
    font-family: ${theme.fonts.serif};
    font-size: 20px;
    font-weight: 600;
    border-bottom: none;
    padding: 24px 0 0;
    margin-bottom: -20px;
  `
}

const Row = styled.div`
  padding: 20px 20px;
  font-weight: 400;
  font-size: 16px;
  border-color: ${props => props.theme.colors.white};
  border-style: solid;
  border-width: 0 1px 1px 1px;
  ${applyStyleModifiers(MODIFIERS)};
`

export default Row