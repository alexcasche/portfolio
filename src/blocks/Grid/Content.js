import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIERS = {
  left: () => `
    border-width: 0 1px 2px 2px;
    border-radius: 0 0 0 5px;
  `,
  right: () => `
    border-width: 0 2px 2px 1px;
    border-radius: 0 0 5px 0;
  `
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-color: #EEEEEE;
  overflow: hidden;
  flex: 1;
  h2 {
    padding: 10px;
    border-bottom: 2px solid #EEEEEE;
  }
  h3 {
    background-color: ${props => props.theme.colors.lightestBlue};
    color: white;
    padding: 10px 25px;
  }
  p {
    max-width: 350px;
    margin: 20px auto;
    padding: 0 25px;
    font-weight: 300;
    font-size: 17px;
    margin: 15px auto 30px;
  }
  ${applyStyleModifiers(MODIFIERS)};
`

export default Content

