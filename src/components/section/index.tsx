import React from "react"
import { BiChevronRight } from "react-icons/bi"
import Container from "../container"
import { SectionStyled, Badge, Title } from "./styled"

type PropTypes = {
  children: React.ReactNode,
  badge?: string,
  title?: string,
  description?: string,
  colors?: [] | any,
}

const Section: React.FC<PropTypes> = (props) => {
  const { children, badge, title, description, colors } = props
  return (
    <SectionStyled className="py-28" color={colors[0]}>
      <Container>
        <div>
          <div className="w-1/2">
            {
              badge ? <Badge className="text-tiny text-blueGray-400 uppercase font-bold">{badge}</Badge> : null
            }
            {
              title ? (
                <Title colors={colors} className="text-4xl font-extrabold mt-4">{title}</Title>
              ) : null
            }
            {
              description ? (
                <p className="mt-8 text-lg">{description}</p>
              ) : null
            }
            <div className="mt-8">
              <a href="#" className="inline-block px-4 bg-opacity-30 py-1 text-gray-900 rounded-full" style={{background: `${colors[1]}33`}}>
                <div className="flex items-center font-medium">
                  <span>Explore more </span>
                  <span>
                    <BiChevronRight size={22}/>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="mt-14">
            {children}
          </div>
        </div>
      </Container>
    </SectionStyled>
  )
}

export default Section

Section.defaultProps = {
  colors: ["#4FACFE", "#00F2FE"]
}