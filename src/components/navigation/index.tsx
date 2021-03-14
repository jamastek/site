import React from "react"
import { Link } from "gatsby"
import Container from "../container"
import Logo from "../logo"

const Navigation: React.FC = () => {
  return (
    <nav className="absolute left-0 right-0 top-0 text-white z-50">
      <Container>
        <div className="sm:flex justify-between items-center" style={{height: 70}}>
          <div>
            <Link to="/">
              <Logo/>
            </Link>
          </div>
          <div>
            <ul className="flex items-center -mx-4">
              <li className="px-4">
                <a href="#">Product</a>
              </li>
              <li className="px-4">
                <a href="#">Service</a>
              </li>
              <li className="px-4">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="rounded-full py-1 text-sm bg-opacity-20 px-3 text-white font-semibold bg-white relative z-20">Contact Us</button>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navigation