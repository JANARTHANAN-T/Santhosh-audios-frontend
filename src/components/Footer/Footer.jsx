import React from "react";
import logo from "../../asserts/images/logo.png";

function Footer() {
  return (
    <div className="bg-indigo-50">
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-between items-center py-5 border-gray-300 border-b-2">
        <div className="flex items-center justify-center md:my-10 mt-10">
          <img src={logo} className="h-20" alt="Santhosh Audios" />
        </div>
        <div className="justify-center flex md:my-10 mt-10">
        <div className="">
          <div className="text-xl font-md text-center ">Links</div>
          <ul className="my-5 flex  items-center">
            <li className="font-thin text-lg mx-2">home</li>
            <li className="font-thin text-lg mx-2">about</li>
            <li className="font-thin text-lg mx-2">service</li>
            <li className="font-thin text-lg mx-2">gallery</li>
            <li className="font-thin text-lg mx-2">contact</li>
          </ul>
        </div>
        </div>
        <div className="flex items-center justify-center">
        <div className="my-10">
          <div className="text-xl font-md text-center">Address</div>
          <pre className="my-5 text-center">
            SANTHOSH AUDIOS,
            <br />
            307/2, Perundurai Road,
            <br />
            Near URC Nagar State Bank,
            <br />
            Erode - 638012.
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
