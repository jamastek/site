import React from "react"
import { Link } from "gatsby"
import Container from "../container"
import Logo from "../logo"

type PropTypes = {
  type?: string,
}

const Navigation: React.FC<PropTypes> = ({type}) => {
  const isPrimary = type === "primary"
  const textColor = isPrimary ? "text-white" : "text-blueGray-600"
  return (
    <nav className={`absolute left-0 right-0 top-0 ${textColor} z-50`}>
      <Container>
        <div className="sm:flex justify-between items-center" style={{height: 70}}>
          <div>
            <Link to="/">
              <Logo color={isPrimary ? "white" : "black"}/>
            </Link>
          </div>
          <div>
            <ul className="flex items-center -mx-4">
              <li className="px-4">
                <Link to="/products">
                  <a>
                    Products
                  </a>
                </Link>
              </li>
              <li className="px-4">
                <a href="#">Services</a>
              </li>
              <li className="px-4">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <button className={`rounded-full py-1 text-sm bg-opacity-20 px-3 ${isPrimary ? "text-white bg-white" : "text-blueGray-600 bg-gray-800"} font-semibold relative z-20`}>Contact Us</button>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navigation