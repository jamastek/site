import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { BiChevronRight } from "react-icons/bi"

const BlogItem: React.FC = () => {
  return (
    <div>
      <StaticImage height={210} width={100} className="rounded-lg" layout="fullWidth" src="https://images.unsplash.com/photo-1615387000571-bdcfe92eb67c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" alt=""/>
      <div className="mt-6">
        <h3 className="text-lg mt-3 font-bold leading-snug text-blueGray-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit odio eaque suscipit enim, saepe numquam ab neque reiciendis fuga.</p>
        <div className="mt-6 flex justify-between">
          <div>
            <span className="text-blueGray-400">12 March 2021</span>
          </div>
          <div>
            <a href="#" className="inline-block">
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
  )
}

export default BlogItem