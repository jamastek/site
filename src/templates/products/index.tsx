import React from "react"
import Layout from "containers/layout"
import Latest from "./latest"
import Blogs from "./blogs"

const Products: React.FC = () => {
  return (
    <Layout type="secondary">
      <div>
        <Latest/>
        <Blogs/>
      </div>
    </Layout>
  )
}

export default Products