import { useState } from "react";
import logo from '../../asserts/images/logo.png'

function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <nav className="flex justify-between items-center px-5 md:px-10 h-20 bg-indigo-50 shadow-lg">
      <div className="w-full">
        <img src={logo} className='h-16' alt="Santhosh Audios" />
      </div>
      <ul className="hidden font-medium md:flex">
        <li className="p-4 hover:cursor-pointer text-indigo-800 font-bold ">HOME</li>
        <li className="p-4 hover:cursor-pointer hover:text-[#6b78b1]">ABOUT</li>
        <li className="p-4 hover:cursor-pointer hover:text-[#6b78b1]">SERVICE</li>
        <li className="p-4 hover:cursor-pointer hover:text-[#6b78b1]">WORKS</li>
        <li className="p-4 hover:cursor-pointer hover:text-[#6b78b1]">GALLERY</li>
        <li className="p-4 hover:cursor-pointer hover:text-[#6b78b1]">CONTACT</li>
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
          <li className="py-3 hover:cursor-pointer hover:text-[#6b78b1]">HOME</li>
          <li className="py-3 hover:cursor-pointer hover:text-[#6b78b1]">ABOUT</li>
          <li className="py-3 hover:cursor-pointer hover:text-[#6b78b1]">SERVICE</li>
          <li className="py-3 hover:cursor-pointer hover:text-[#6b78b1]">WORKS</li>
          <li className="py-3 hover:cursor-pointer hover:text-[#6b78b1]">GALLERY</li>
          <li className="py-3 hover:cursor-pointer hover:text-[#6b78b1]">CONTACT</li>
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
