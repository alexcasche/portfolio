import styled from 'styled-components'

const Caption = styled.figcaption`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.darkerBlue};
  user-select: none;
  p {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.5;
    color: ${props => props.theme.colors.white};
    margin: 0 0 30px;

  }
  a {
    border: 2px solid ${props => props.theme.colors.lighterBlue};
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.serif};
    font-size: 14px;
    font-weight: bold;
    background-color: transparent;
    display: inline-block;
    padding: 9px 12px;
    transition: background-color .25s ease-in-out;
    &:hover {
      background-color: ${props => props.theme.colors.lighterBlue};
    }
  }
`

export default Caption