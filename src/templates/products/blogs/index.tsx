import React from "react"
import Section from "components/section"
import BlogItem from "components/blog/item"

const Blogs: React.FC = () => {
  return (
    <Section>
      <div className="grid grid-cols-3 gap-12">
        <div>
          <BlogItem/>
        </div>
        <div>
          <BlogItem/>
        </div>
        <div>
          <BlogItem/>
        </div>
        <div>
          <BlogItem/>
        </div>
        <div>
          <BlogItem/>
        </div>
        <div>
          <BlogItem/>
        </div>
      </div>
    </Section>
  )
}

export default Blogs