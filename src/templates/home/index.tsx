import React from "react"
import Layout from "containers/layout"
import Banner from "components/banner"

const Home: React.FC = () => {
  return (
    <Layout>
      <div>
        <Banner/>
      </div>
    </Layout>
  )
}

export default Home