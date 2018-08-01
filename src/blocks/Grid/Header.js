import styled from 'styled-components'

const Header = styled.header`
  background-color: ${props => props.theme.colors.lighterBlue};
  color: ${props => props.theme.colors.white};
  padding: 10px;
  font-size: 20px;
`

export default Header