import React from "react";
import pioneer from "../../asserts/images/Pioneer-logo.png";
import harman from "../../asserts/images/harman.png";
import infinity from "../../asserts/images/infinity.png";
import jbl from "../../asserts/images/jbl.png";
import jvc_mobile from "../../asserts/images/jvc_mobile.png";
import jvc from "../../asserts/images/jvc.png";

function Dealers() {
  return (
    <div className=" md:p-20 p-10 mb-24">
      <div className="text-start md:text-4xl text-3xl italic  font-semibold text-[#312e81] mb-24 ">
        WE ARE GREAT DEALERS OF...
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-20  ">
        <div className="flex items-center justify-center">
        <a href="https://pioneer-india.in/">
          <img src={pioneer} alt="pioneer" className="h-32" />
        </a>
        </div>
        <div className="flex items-center justify-center">
        <a href="https://www.harman.com/">
          <img src={harman} alt="harman" className="h-36" />
        </a>
        </div>
        <div className="flex items-center justify-center">
        <a href="https://www.infinityspeakers.com/">
          <img src={infinity} alt="infinity" className="h-24" />
        </a>
        </div>
        <div className="flex items-center justify-center">
        <a href="https://in.jbl.com/">
          <img src={jbl} alt="JBL" className="h-32" />
        </a>
        </div>
        <div className="flex items-center justify-center">
        <a href="https://www.jvc.com/in/">
          <img src={jvc} alt="JVC" className="h-32" />
        </a>
        </div>
        <div className="flex items-center justify-center">
        <a href="https://www.jvc.com/usa/car-entertainment/">
          <img src={jvc_mobile} alt="JVC Mobile" className="h-32" />
        </a>
        </div>
      </div>
    </div>
  );
}

export default Dealers;
