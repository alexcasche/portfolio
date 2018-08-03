import styled from 'styled-components'
import Item from './Item'

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

Flex.Item = Item

export default Flex