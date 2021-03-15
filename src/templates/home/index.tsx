import React from "react"
import Layout from "containers/layout"
import Banner from "components/banner"
import Services from "./services"
import Blogs from "./blog"
import Newsletter from "components/newsletter"

const Home: React.FC = () => {
  return (
    <Layout>
      <div>
        <Banner/>
        <Services/>
        <Blogs/>
        <Newsletter/>
      </div>
    </Layout>
  )
}

export default Home