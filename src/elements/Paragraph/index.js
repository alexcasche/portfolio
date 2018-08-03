import styled from 'styled-components'

const P = styled.p`
  width: 100%;
  max-width: 700px;
  margin: auto;
  color: ${props => props.theme.colors.baseBlue};
  font-family: ${props => props.theme.fonts.sans};
  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
`

export default P