import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  max-width: 1150px;
  margin: auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
  ${props => props.theme.breaks.medium} {
    padding: 0 50px;
  }
`

export default Wrapper