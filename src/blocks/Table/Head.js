import styled from 'styled-components'

const Head = styled.div`
  background-color: ${props => props.theme.colors.lightBlue};
  color: white;
  padding: 15px 10px;
  font-size: 24px;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid ${props => props.theme.colors.white};
`

export default Head