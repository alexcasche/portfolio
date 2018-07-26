import styled from 'styled-components'

const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.display};
  font-size: 6.5vw;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  line-height: 1;
  margin: 0 0 1.6vw;
`

export default Title