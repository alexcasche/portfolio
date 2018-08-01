import { ButtonLink } from 'elements' 

const Social = ButtonLink.extend`
  margin: 0 1.5vw;
  color: ${props => props.theme.colors.white};
  font-size: 2.5vw;
  svg {
    filter: drop-shadow( 0px 0px .7vw rgba(0,0,0,.15));
  }
`

export default Social