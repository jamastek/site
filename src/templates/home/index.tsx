import React from "react"
import Layout from "containers/layout"
import Banner from "components/banner"
import Services from "./services"

const Home: React.FC = () => {
  return (
    <Layout>
      <div>
        <Banner/>
        <Services/>
      </div>
    </Layout>
  )
}

export default Home