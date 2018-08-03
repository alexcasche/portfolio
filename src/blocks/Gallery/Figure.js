import styled from 'styled-components'

const Figure = styled.figure`
  position: relative;
  margin: 0;
  border-radius: 5px;
  overflow: hidden;
  img {
    transition: transform .35s ease-in-out;
    display: block;
  }
  figcaption {
    transition: opacity .35s ease-in-out;
    opacity: 0;
  }
  &:hover {
    img {
      transform: scale(1.25);
    }
    figcaption {
      opacity: 1;
    }
  }
`

export default Figure