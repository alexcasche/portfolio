import styled from 'styled-components'

const Title = styled.h1`
  margin: 0;
  padding: 10px;
  background-color: transparent;
  color: ${props => props.theme.colors.lightBlue};
  font-family: ${props => props.theme.fonts.serif};
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 600;
  border-color: ${props => props.theme.colors.white};
  border-style: solid;
  border-width: 0 1px 1px 1px;
`

export default Title