import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  font-weight: 500;
  letter-spacing: normal;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`
const ButtonLink = Button.withComponent('a')

export default Button
export { ButtonLink }