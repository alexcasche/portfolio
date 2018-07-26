import styled from 'styled-components'

import Side from './Side'

const Slice = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${props => props.theme.colors.darkBlue};
  &::before {
    content: 
  }
`

Slice.Side = Side

export default Slice