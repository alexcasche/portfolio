import { Paragraph } from 'elements'

const Text = Paragraph.extend`
  font-family: ${props => props.theme.fonts.serif};
  font-weight: 600;
  font-size: 18px;
  color: ${props => props.theme.colors.white};
  margin-top: 20px;
  svg {
    color: ${props => props.theme.colors.logoBlue};
    margin: 0 5px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`

export default Text