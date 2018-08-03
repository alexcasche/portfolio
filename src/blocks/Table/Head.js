import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIERS = {
  2: ({theme}) => `
    background-color: transparent;
    color: ${theme.colors.lightBlue};
    font-family: ${theme.fonts.serif};
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid ${theme.colors.white};
  `,
  3: ({theme}) => `
    background-color: ${theme.colors.lighterBlue};
    font-family: ${theme.fonts.sans};
    font-size: 18px;
    font-weight: 400;
    padding: 10px 25px;  
  `
}

const Head = styled.div`
  background-color: ${props => props.theme.colors.lightBlue};
  color: white;
  padding: 10px;
  font-size: 20px;
  ${applyStyleModifiers(MODIFIERS)};
`

export default Head