import styled from "styled-components"

export const BannerStyled = styled.div`
  color: #fff;
  height: 600px;
  h1 {
    mix-blend-mode: overlay;
    opacity: 1;
    &:after {
      position: absolute;
      left: 0;
      top: 0;
      content: "We Build Fast Site and Apps"
    }
  }
`