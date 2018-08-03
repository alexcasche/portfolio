import { Flex } from 'elements'
import Item from './Item'
import Figure from './Figure'
import Caption from './Caption'

const Gallery = Flex.extend`
  margin-top: 40px;
`

Gallery.Item = Item
Gallery.Figure = Figure
Gallery.Caption = Caption

export default Gallery