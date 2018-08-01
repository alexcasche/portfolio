import styled from 'styled-components'

const H2 = styled.h2`
  color: ${props => props.theme.colors.lighterBlue};
  font-family: ${props => props.theme.fonts.serif};
  font-size: 22px;
  text-transform: uppercase;
  margin: 0;
`

export default H2