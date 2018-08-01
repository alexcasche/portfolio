import styled from 'styled-components'

const Title = styled.h2`
  color: ${props => props.theme.colors.lighterBlue};
  font-family: ${props => props.theme.fonts.serif};
  font-size: 19px;
  text-transform: uppercase;
  margin: 0;
  padding: 10px;
  border-left: 1px solid #EEEEEE;
  border-right: 1px solid #EEEEEE;
  border-bottom: 1px solid #EEEEEE;
`

export default Title