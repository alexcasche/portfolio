import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import theme from 'constants/theme'
import { ThemeProvider } from 'styled-components'
import 'jest-styled-components'

Enzyme.configure({ adapter: new Adapter() })

const mountWithTheme = component => {
  return mount(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

const renderWithTheme = component => {
  return renderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  )
}

global.React = React
global.shallow = shallow
global.mount = mountWithTheme
global.render = renderWithTheme
global.theme = theme