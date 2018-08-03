
import styled from 'styled-components'

const Stripes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  &::before, &::after {
    position: absolute;
    display: block;
    content: '';
    width: 120px;
    height: 500px;
    z-index: 1;
  }
  &::before {
    top: -100px;
    left: -50px;
    background: repeating-linear-gradient(
      to right,
      ${props=> props.theme.colors.lightBlue},
      ${props=> props.theme.colors.lightBlue} 20px,
      ${props=> props.theme.colors.baseBlue} 20px,
      ${props=> props.theme.colors.baseBlue} 40px
    );
    transform: rotate(45deg);
  }
  &::after {
    bottom: -100px;
    right: -50px;
    background: repeating-linear-gradient(
      to left,
      ${props=> props.theme.colors.darkBlue},
      ${props=> props.theme.colors.darkBlue} 20px,
      ${props=> props.theme.colors.lightBlue} 20px,
      ${props=> props.theme.colors.lightBlue} 40px
    );
    transform: rotate(225deg);
  }
`

export default Stripes