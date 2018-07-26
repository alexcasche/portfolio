import { ButtonLink } from 'elements' 

const Social = ButtonLink.extend`
  margin: 0 1.5vw;
  color: ${props => props.theme.colors.white};
  font-size: 2.5vw;
`

export default Social