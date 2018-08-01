import styled from 'styled-components'

import Box from './Box'
import Header from './Header'
import Title from './Title'

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  border: 1px solid #EEEEEE;
  background-color: white;
  box-shadow: 0px 0px 2px rgba(0,0,0,.05);
  & > div {
    flex-basis: calc(100% / 3);
  }
`
Grid.Box = Box
Grid.Header = Header
Grid.Title = Title

export default Grid