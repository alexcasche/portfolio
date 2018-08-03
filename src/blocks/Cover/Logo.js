import styled from 'styled-components'

const Logo = styled.img`
  width: 75px;
  margin: 0 0 15px;
  filter: drop-shadow( 0px 0px .5rem rgba(0,0,0,.15));
  ${props => props.theme.breaks.medium} {
    width: 90px;
  }
  ${props => props.theme.breaks.xsmall} {
    width: 60px;
  }
`

export default Logo