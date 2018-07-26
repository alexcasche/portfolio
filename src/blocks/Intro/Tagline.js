import Title from './Title'

const Tagline = Title.extend`
  color: ${props => props.theme.colors.logoBlue};
  font-size: 2.2vw;
  margin: 0 0 2vw;
  font-weight: 300;
`

export default Tagline.withComponent('h2')