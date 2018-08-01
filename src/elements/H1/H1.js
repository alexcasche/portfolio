import styled from 'styled-components'

const H2 = styled.h2`
  color: ${props => props.theme.colors.baseBlue};
  font-family: ${props => props.theme.fonts.serif};
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 1rem;
`

export default H2