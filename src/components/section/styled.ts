import styled from "styled-components"

export const SectionStyled = styled.section`
  a {
    color: ${({color}) => color};
  }
`

export const Badge = styled.span``

export const Title = styled.h2`
  background: rgb(79,172,254);
  background: linear-gradient(117deg, ${({colors}) => colors[0]} 0%, ${({colors}) => colors[1]} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`