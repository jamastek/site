import React from "react"
import SEO from "components/seo"
import { LayoutType } from "types"
import Nav from "components/navigation"
import Footer from "components/footer"

const Layout: React.FC<LayoutType> = ({children, type}) => {
  return (
    <>
      <SEO/>
      <Nav type={type}/>
      <div>
        {children}
      </div>
      <Footer/>
    </>
  )
}

export default Layout

Layout.defaultProps = {
  type: "primary"
}