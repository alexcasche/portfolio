import { Button } from 'elements'

const Social = Button.Link.extend `
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 52px;
  width: 52px;
  margin: 30px 10px 15px;
  background-color: transparent;
  color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.logoBlue};
  transition: all .15s ease-in-out;
  svg {
    width: 20px;
  }
  &:hover {
    background: ${props => props.theme.colors.logoBlue};
  }
`

export default Social