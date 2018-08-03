import { Heading } from 'elements'

const Title = Heading.extend`
  color: ${props => props.theme.colors.white};
  font-size: 58px;
  text-transform: uppercase;
  margin: 0 0 .25rem;
  text-shadow: 0px 0px .25rem rgba(0,0,0,0.25);
  line-height: 1;
  ${props => props.theme.breaks.medium} {
    font-size: 76px;
  }
  ${props => props.theme.breaks.xsmall} {
    font-size: 48px;
  }
`

export default Title