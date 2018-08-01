import styled from 'styled-components'

const P = styled.p`
  width: 100%;
  max-width: 700px;
  margin: auto;
  color: ${props => props.theme.colors.lightBlue};
  font-family: ${props => props.theme.fonts.sans};
  font-size: 18px;
  font-weight: 400;
  line-height: 2;
`

export default P