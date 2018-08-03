import styled from 'styled-components'

const Link = styled.a`
  color: ${props => props.theme.colors.lighterBlue};
  transition: color .15s ease-in-out;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.lightBlue};
  }
`

export default Link