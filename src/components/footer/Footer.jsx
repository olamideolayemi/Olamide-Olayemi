import { Link } from "react-router-dom"
import logo from "../../assets/OLAMIDE OLAYEMI LOGO.png"

const Footer = () => {
  return (

    <footer className=" bg-gray-light">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex ">
          <Link to='/' className="-m-1.5 p-1.5">
            <img
              src={logo}
              alt=""
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex ">
          Column 2
        </div>
        <div className="flex ">
          Column 3
        </div>
        <div className="flex ">
          Column 4
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8">
        <small > © Krane Wealth Labs 2024</small>
      </div>
    </footer>
  )
}

export default Footer