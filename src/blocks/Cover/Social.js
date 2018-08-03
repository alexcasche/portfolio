import { Button } from 'elements' 

const Social = Button.Link.extend`
  width: 40px;
  height: 40px;
  margin: 10px 10px 0;
  color: ${props => props.theme.colors.white};
  font-size: 1.25rem;
  opacity: 1;
  transition: opacity .15s ease-in-out;
  svg {
    filter: drop-shadow( 0px 0px .25rem rgba(0,0,0,.15));
  }
  &:hover {
    opacity: .5;
  }
`

export default Social