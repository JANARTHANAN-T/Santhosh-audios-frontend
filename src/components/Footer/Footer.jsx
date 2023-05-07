import React from "react";
import logo from "../../asserts/images/logo.png";
import { Link } from "react-router-dom";

function Footer({data}) {
  return (
    <div className="bg-indigo-50">
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-between items-center py-5 border-gray-300 border-b-2">
        <div className="flex items-center justify-center md:my-10 mt-10">
        <a href="https://santhoshaudios.in/">
          <img src={logo} className="h-20" alt="Santhosh Audios" />
        </a>
        </div>
        <div className="justify-center flex md:my-10 mt-10">
        <div className="">
          <div className="text-xl font-md text-center ">Links</div>
          <ul className="my-5 flex  items-center">
            <Link to='/' onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})} className="font-thin text-lg mx-2">home</Link>
            <Link to='/about' onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})} className="font-thin text-lg mx-2">about</Link>
            <Link to='/service' onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})} className="font-thin text-lg mx-2">service</Link>
            <Link to='/gallery' onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})} className="font-thin text-lg mx-2">gallery</Link>
            <Link to='/contact' onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})} className="font-thin text-lg mx-2">contact</Link>
          </ul>
        </div>
        </div>
        <div className="flex items-center justify-center">
        <div className="my-10">
          <div className="text-xl font-md text-center">Address</div>
          <pre className="my-5 text-center">
            SANTHOSH AUDIOS,
            <br />
            {data.AddressStreet}
            <br />
           `{data.AddressArea}
            <br />
            {data.AddressDistrict}
          </pre>
        </div>
        </div>
      </div>
      <div className="flex justify-between p-4 px-10">
        <div>&copy; Copyrights 2023 Santhosh Audios</div>
        <div>All Rights Reserved</div>
      </div>
    </div>
  );
}

export default Footer;
