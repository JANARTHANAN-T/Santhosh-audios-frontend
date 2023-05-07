import { useState } from "react";
import logo from '../../asserts/images/logo.png'
import { NavLink , useLocation} from "react-router-dom";
import './Navbar.css'
import { motion, useScroll} from "framer-motion";



function Navbar({floatingNav}) {
  const location=useLocation();
  const [nav, setNav] = useState(false);
  const siteRoutes = ['/'];
  const { scrollYProgress } = useScroll();

  if(siteRoutes.includes(location.pathname) && !floatingNav)
  return (
    <div className="absolute z-10 w-[100%] ">
    <nav className="flex justify-between items-center px-5 md:px-10 h-20   ">
      <div className="w-full">
      <a href="https://santhoshaudios.in/">
        <img src={logo} className='h-16' alt="Santhosh Audios" />
      </a>
      </div>
      <ul className="hidden font-medium md:flex items-center">
        <NavLink to="/" className="p-4 hover:cursor-pointer hover:text-[#312e81] ">HOME</NavLink>
        <NavLink to="/about" className="p-4 hover:cursor-pointer hover:text-[#312e81] ">ABOUT</NavLink>
        <NavLink to="/service" className="p-4 hover:cursor-pointer hover:text-[#312e81] ">SERVICE</NavLink>
        <NavLink to="/gallery" className="p-4 hover:cursor-pointer hover:text-[#312e81] ">GALLERY</NavLink>
        <NavLink to="/contact" className="p-4 hover:cursor-pointer hover:text-[#312e81] ">CONTACT</NavLink>
        <NavLink to="/quotation" className="p-4 hover:cursor-pointer text-[#39359f] font-bold ">Apply for Quotation</NavLink>
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
          <li className="py-3 hover:cursor-pointer hover:text-[#176b9c]"><NavLink to="/">HOME</NavLink></li>
          <li className="py-3 hover:cursor-pointer hover:text-[#176b9c]"><NavLink to="/about">ABOUT</NavLink></li>
          <li className="py-3 hover:cursor-pointer hover:text-[#176b9c]"><NavLink to="/service">SERVICE</NavLink></li>
          <li className="py-3 hover:cursor-pointer hover:text-[#176b9c]"><NavLink to="/gallery">GALLERY</NavLink></li>
          <li className="py-3 hover:cursor-pointer hover:text-[#176b9c]"><NavLink to="/contact">CONTACT</NavLink></li>
          <li className="py-3 hover:cursor-pointer hover:text-[#176b9c] font-bold"><NavLink to="/quotation">Apply for Quotation</NavLink></li>
       
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
    </div>
  )
  if(floatingNav)
  return(
    <div className="fixed z-10 w-[100%]  ">
    <nav className={!siteRoutes.includes(location.pathname) ? "flex justify-between items-center px-5 md:px-10 h-20 bg-slate-100 shadow-lg" : "md:flex hidden justify-between items-center px-5 md:px-10 h-20 bg-slate-100 shadow-lg "}>
      <div className="w-full">
        <img src={logo} className='h-16' alt="Santhosh Audios" />
      </div>
      <ul className="hidden font-medium md:flex items-center">
        <NavLink to="/" className="p-4 hover:cursor-pointer hover:text-[#312e81] ">HOME</NavLink>
        <NavLink to="/about" className="p-4 hover:cursor-pointer hover:text-[#312e81] ">ABOUT</NavLink>
        <NavLink to="/service" className="p-4 hover:cursor-pointer hover:text-[#312e81] ">SERVICE</NavLink>
        <NavLink to="/gallery" className="p-4 hover:cursor-pointer hover:text-[#312e81] ">GALLERY</NavLink>
        <NavLink to="/contact" className="p-4 hover:cursor-pointer hover:text-[#312e81] ">CONTACT</NavLink>
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
          <li className="py-3 hover:cursor-pointer hover:text-[#176b9c]"><NavLink to="/">HOME</NavLink></li>
          <li className="py-3 hover:cursor-pointer hover:text-[#176b9c]"><NavLink to="/about">ABOUT</NavLink></li>
          <li className="py-3 hover:cursor-pointer hover:text-[#176b9c]"><NavLink to="/service">SERVICE</NavLink></li>
          <li className="py-3 hover:cursor-pointer hover:text-[#176b9c]"><NavLink to="/gallery">GALLERY</NavLink></li>
          <li className="py-3 hover:cursor-pointer hover:text-[#176b9c]"><NavLink to="/contact">CONTACT</NavLink></li>
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
    <motion.div className="absoute z-50 h-1 bg-[#312e81]"  style={{ scaleX:scrollYProgress,transformOrigin:"0%" }} />
    </div>
  )
}

export default Navbar;
