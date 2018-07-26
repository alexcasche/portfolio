import { ButtonLink } from 'elements' 
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIERS = {
  animated: () => `
  opacity: 1;
  `
}

const Button = ButtonLink.extend`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.white};
  font-size: 2vw;
  opacity: 0;
  transition: opacity .35s ease-in-out 1s;
  ${applyStyleModifiers(MODIFIERS)};
`

export default Button