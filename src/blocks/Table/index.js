import { Flex } from 'elements'
import Head from './Head'
import Body from './Body'
import Text from './Text'

const Table = Flex.extend`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 2px rgba(0,0,0,.05);
  overflow: hidden;
`

Table.Head = Head
Table.Body = Body
Table.Text = Text

export default Table