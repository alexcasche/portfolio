import { injectGlobal } from 'styled-components'
import theme from './theme'

injectGlobal`
  html {
    font-size: 18px;
    font-family: ${theme.fonts.sans};
    color: ${theme.colors.baseBlue};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${theme.breaks.medium} {
      font-size: 20px;
    }
  }
  body {
    margin: 0;
  }
  * {
   box-sizing: border-box
  }
`