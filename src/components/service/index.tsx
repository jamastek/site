import React from "react"
import { BiChevronRight } from "react-icons/bi"

type PropTypes = {
  title?: string,
  icon?: React.ReactNode,
  description?: string,
}

const Service: React.FC<PropTypes> = ({
  icon, title, description
}) => {
  return (
    <div>
      <div>
        {icon}
      </div>
      <h3 className="mt-6 font-bold text-gray-900">{title}</h3>
      <p className="mt-2">{description}</p>
      <div className="mt-4">
        <a href="#" className="inline-block">
          <div className="flex items-center font-medium">
            <span>Learn more </span>
            <span>
              <BiChevronRight size={22}/>
            </span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Service