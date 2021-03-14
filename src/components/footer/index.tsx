import Container from "components/container"
import React from "react"
import Logo from "components/logo"

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-500 py-12">
      <Container>
        <div>
          <section>
            <div className="flex">
              <div>
                <Logo color="black"/>
              </div>
            </div>
          </section>
          <section>
            <div className="flex mt-8">
              <div>
                <span>© {new Date().getFullYear()} PT. Jamas Teknologi Kreatif. All rights reserved.</span>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </footer>
  )
}

export default Footer