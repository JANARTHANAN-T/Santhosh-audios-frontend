import { useState } from "react";
import logo from '../../asserts/images/logo.png'
import { NavLink , useLocation} from "react-router-dom";
import './Navbar.css'

function Navbar() {
  const location=useLocation();
  const [nav, setNav] = useState(false);
  const siteRoutes = ['/', '/about', '/service', '/gallery', '/contact'];
  if(siteRoutes.includes(location.pathname))
  return (
    <nav className="flex justify-between items-center px-5 md:px-10 h-20 absolute z-10 w-[100%]  ">
      <div className="w-full">
        <img src={logo} className='h-16' alt="Santhosh Audios" />
      </div>
      <ul className="hidden font-medium md:flex">
        <NavLink to="/" className="p-4 hover:cursor-pointer hover:text-white ">HOME</NavLink>
        <NavLink to="/about" className="p-4 hover:cursor-pointer hover:text-white ">ABOUT</NavLink>
        <NavLink to="/service" className="p-4 hover:cursor-pointer hover:text-white ">SERVICE</NavLink>
        <NavLink to="/gallery" className="p-4 hover:cursor-pointer hover:text-white ">GALLERY</NavLink>
        <NavLink to="/contact" className="p-4 hover:cursor-pointer hover:text-white ">CONTACT</NavLink>
      </ul>
      {!nav &&
      <div className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={()=>setNav(!nav)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>   
      }
      <div className="md:hidden">
      <div className={nav?"fixed left-0 top-0 w-[60%] p-5 h-full shadow-lg bg-indigo-50 ease-in-out duration-500":"fixed left-[-100%] top-0 p-5 ease-in w-[60%] duration-500 h-full"}>
        <div className="flex w-full text-xl font-bold">
        <img src={logo} className='h-12' alt="Santhosh Audios" />
        </div>
        <ul className=" py-4">
          <li className="py-3 hover:cursor-pointer hover:text-[#6b78b1]"><NavLink to="/">HOME</NavLink></li>
          <li className="py-3 hover:cursor-pointer hover:text-[#6b78b1]"><NavLink to="/about">ABOUT</NavLink></li>
          <li className="py-3 hover:cursor-pointer hover:text-[#6b78b1]"><NavLink to="/service">SERVICE</NavLink></li>
          <li className="py-3 hover:cursor-pointer hover:text-[#6b78b1]"><NavLink to="/works">WORKS</NavLink></li>
          <li className="py-3 hover:cursor-pointer hover:text-[#6b78b1]"><NavLink to="/gallery">GALLERY</NavLink></li>
          <li className="py-3 hover:cursor-pointer hover:text-[#6b78b1]"><NavLink to="/contact">CONTACT</NavLink></li>
        </ul>
        <div className="absolute top-6 right-2" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={()=>setNav(!nav)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      </div>
    </nav>
  );
}

export default Navbar;
