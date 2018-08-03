import styled from 'styled-components'
import Head from './Head'
import Title from './Title'
import Row from './Row'
import Data from './Data'

const Table = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #EDEDED;
  box-shadow: 0px 0px 2px rgba(0,0,0,.05);
  overflow: hidden;
  margin: 10px;
  
`

Table.Head = Head
Table.Title = Title
Table.Row = Row
Table.Data = Data

export default Table