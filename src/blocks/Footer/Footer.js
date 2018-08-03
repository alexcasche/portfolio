import { applyStyleModifiers } from 'styled-components-modifiers'
import { Section } from 'elements'
import Stripes from './Stripes'

const Footer = Section.extend`
  background-color: ${props => props.theme.colors.darkBlue}
  padding: 50px 0 100px;
  &::before, &:after {
    position: absolute;
    top: 0;
    left: 50%;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
  }
  &::before {
    background-color: ${props => props.theme.colors.lightBlue};
    transform: translateX(-100%) skew(-30deg);
  }
  &::after {
    background-color: ${props => props.theme.colors.baseBlue};
    transform: skew(-30deg);
  }
  & > div {
    z-index: 1;
  }
  img {
    width: 50px;
  }
`

Footer.Stripes = Stripes

export default Footer;