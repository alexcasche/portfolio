import { Button } from 'elements' 
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIERS = {
  animated: () => `
    opacity: 1;
  `
}

const Scroll = Button.extend`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.white};
  font-size: 1em;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.15);
  opacity: 0;
  transition: opacity .35s ease-in-out 1s;
  ${applyStyleModifiers(MODIFIERS)};
`

export default Scroll