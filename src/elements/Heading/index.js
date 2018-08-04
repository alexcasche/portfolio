import styled from 'styled-components'

const Heading = styled.h1`
  color: ${props => props.theme.colors.baseBlue};
  font-family: ${props => props.theme.fonts.serif};
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 1rem;
  line-height: 1.5;
`

export default Heading