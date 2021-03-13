import React from "react"
import Particles from "react-particles-js"
import Container from "../container"
import { config } from "./particle-config"
import { BannerStyled } from "./styled"

const Banner: React.FC = () => {
  return (
    <BannerStyled className="bg-black text-white">
      <Container>
        <div>
          <div className="sm:flex items-center" style={{height: 600}}>
            <div className="sm:w-1/2">
              <div className="relative">
                <div className="font-black text-6xl top-0 absolute opacity-50" style={{mixBlendMode: "hard-light", zIndex: 1}}>We Build Fast Site and Apps</div>
                <h1 className="font-black text-6xl z-20 relative">We Build Fast Site and Apps</h1>
                <p className="z-20 relative mt-8 text-xl text-gray-400 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio similique quasi illo porro.</p>
                <button className="rounded-full py-2 bg-opacity-30 px-4 text-white font-semibold mt-8 bg-white relative z-20">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Particles height={600} params={config} className="absolute z-10 left-0 right-0 top-0"/>
    </BannerStyled>
  )
}

export default Banner