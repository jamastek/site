import React from "react"
import { BiChevronRight } from "react-icons/bi"
import Container from "components/container"

const Latest: React.FC = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center" style={{height: 600}}>
          <div className="w-1/2">
            <div>
              <span className="text-xs bg-blueGray-400 text-white uppercase font-bold px-3 py-1 rounded-full">Latest from the blog</span>
              <h1 className="text-5xl font-black text-black mt-6">How to Test React.useEffect</h1>
              <p className="text-lg mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, culpa similique non voluptatem incidunt nobis est ab accusantium!</p>
              <div className="mt-8">
                <a href="#" className="inline-block text-indigo-600">
                  <div className="flex items-center font-medium">
                    <span>Read more </span>
                    <span>
                      <BiChevronRight size={22}/>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Latest