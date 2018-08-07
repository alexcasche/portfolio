import { Section } from 'elements'
import Logo from './Logo'
import Social from './Social'
import Text from './Text'

const Footer = Section.extend`
  display: flex;
  flex-direction: column;
  text-align: center;
`

Footer.Logo = Logo
Footer.Social = Social
Footer.Text = Text

export default Footer