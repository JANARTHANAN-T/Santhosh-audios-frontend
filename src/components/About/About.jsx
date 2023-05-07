import React from "react";
import { Link } from "react-router-dom";
function About({data}) {
  console.log();
  return (
    <div className="relative md:-top-28">
      <div className="grid grid-col-1 md:grid-cols-2">
        <div className="justify-center items-center hidden md:flex">
          <div>
            <img
              className="h-80 shadow-md"
              src={data.Image}
              alt="company"
            />
          </div>
        </div>

        <div className="p-10">
          <h1 className="text-center text-4xl font-semibold text-[#312e81] mb-10 ">
            About Us
          </h1>
          <div className="text-xl leading-10">
           {data.AboutUs}
          </div>
          <div className="flex justify-start items-center">
            <Link
              to="/about"
              className="animate-pulse  text-xl text-blue-600 font-bold my-5 rounded-md"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              more {">"}
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset="1" stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default About;
