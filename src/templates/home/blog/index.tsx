import React from "react"
import Section from "components/section"
import BlogItem from "components/blog/item"

const Blogs: React.FC = () => {
  return (
    <Section
      colors={["#667EEA", "#764BA2"]}
      badge="Blogs"
      title="Deliver a fast app like experience in the browser"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ut corporis quisquam enim sint dolorum quibusdam, est blanditiis."
    >
      <div className="flex -mx-4">
        <div className="w-1/3 px-4">
          <BlogItem/>
        </div>
        <div className="w-1/3 px-4">
          <BlogItem/>
        </div>
        <div className="w-1/3 px-4">
          <BlogItem/>
        </div>
      </div>
    </Section>
  )
}

export default Blogs