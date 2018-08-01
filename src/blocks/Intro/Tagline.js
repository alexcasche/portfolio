import Title from './Title'

const Tagline = Title.extend`
  color: ${props => props.theme.colors.logoBlue};
  font-size: 2.2vw;
  margin: 0 0 2vw;
  font-weight: 300;
  text-shadow: 0px 0px .25vw rgba(0,0,0,0.25);
`

export default Tagline.withComponent('h2')