import styled from 'styled-components'

import Button from './Button'
import Content from './Content'
import Logo from './Logo'
import Social from './Social'
import Stripes from './Stripes'
import Tagline from './Tagline'
import Title from './Title'

const Intro = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

Intro.Button = Button
Intro.Content = Content
Intro.Logo = Logo
Intro.Social = Social
Intro.Stripes = Stripes
Intro.Tagline = Tagline
Intro.Title = Title

export default Intro