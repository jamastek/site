import React from "react"
import SEO from "components/seo"
import { LayoutType } from "types"
import Nav from "components/navigation"

const Layout: React.FC<LayoutType> = ({children}) => {
  return (
    <>
      <SEO/>
      <Nav/>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout