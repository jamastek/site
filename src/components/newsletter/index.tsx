import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Container from "components/container"
import { Heading } from "./styled"

const Newsletter: React.FC = () => {
  return (
    <div className="py-12">
      <Container>
        <div className="bg-black rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 z-10">
            <div className="flex justify-center text-center items-center" style={{height: 440}}>
              <div>
                <Heading className="text-4xl font-extrabold">Ready to join Jamstack revolution?</Heading>
                <div className="w-2/3 mx-auto text-blueGray-400">
                  <p className="mt-6">Start your super-fast project with us or take your existing product to the next level.</p>
                </div>
                <div>
                  <div className="flex -mx-2 justify-center items-center mt-8">
                    <div className="px-2">
                      <input type="text" className="py-2 px-4 rounded-lg" style={{height: 46}} placeholder="Enter your email"/>
                    </div>
                    <div className="px-2">
                      <button style={{height: 46}} className="py-2 px-4 rounded-lg font-semibold bg-indigo-500 text-white">Notify me</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <StaticImage width={100} height={440} style={{zIndex: 1}} layout="fullWidth" src="../../images/newsletter-transparent.png" alt=""/>
        </div>
      </Container>
    </div>
  )
}

export default Newsletter