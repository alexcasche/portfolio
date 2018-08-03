import styled from 'styled-components'
import Slice from './Slice'
import Stripes from './Stripes'
import Content from './Content'
import Logo from './Logo'
import Title from './Title'
import Text from './Text'
import Social from './Social'
import Scroll from './Scroll'

const Cover = styled.section`
  position: relative;
  height: 100vh;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: ${props => props.theme.colors.darkerBlue};
  padding-bottom: 40px;
`

Cover.Slice = Slice
Cover.Stripes = Stripes
Cover.Content = Content
Cover.Logo = Logo
Cover.Title = Title
Cover.Text = Text
Cover.Social = Social
Cover.Scroll = Scroll

export default Cover