import { Heading } from 'elements'

const Text = Heading.extend`
  color: ${props => props.theme.colors.logoBlue};
  font-size: 21px;
  margin: 0;
  font-weight: 500;
  text-transform: uppercase;
  text-shadow: 0px 0px .15rem rgba(0,0,0,0.25);
  ${props => props.theme.breaks.medium} {
    font-size: 27px;
  }
  ${props => props.theme.breaks.xsmall} {
    font-size: 17px;
  }
`

export default Text