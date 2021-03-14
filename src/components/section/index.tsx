import React from "react"
import Container from "../container"
import { SectionStyled, Badge, Title } from "./styled"

type PropTypes = {
  children: React.ReactNode,
  badge?: string,
  title?: string,
  description?: string,
}

const Section: React.FC<PropTypes> = (props) => {
  const { children, badge, title, description } = props
  return (
    <SectionStyled className="py-28">
      <Container>
        <div>
          <div className="w-1/2">
            {
              badge ? <Badge className="text-tiny text-blueGray-400 uppercase font-bold">{badge}</Badge> : null
            }
            {
              title ? (
                <Title className="text-4xl font-extrabold mt-4">{title}</Title>
              ) : null
            }
            {
              description ? (
                <p className="mt-8 text-lg">{description}</p>
              ) : null
            }
          </div>
          <div>
            {children}
          </div>
        </div>
      </Container>
    </SectionStyled>
  )
}

export default Section