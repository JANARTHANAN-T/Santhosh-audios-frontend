import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import TopNavBtn from "../../components/TopNavBtn/TopNavBtn";
import Dealers from "../../components/Dealers/Dealers";
import mission from "../../asserts/images/mission.gif"
import vision from "../../asserts/images/vision.gif"

function AboutPage({data}) {
  return (
    <div>
      <Navbar floatingNav />
      <div className="h-[80vh]">
        <img src={data.Image} alt="banner" className="h-[100%] w-[100%]" />
      </div>
      <div>
        <h1 className="text-center text-4xl font-semibold text-[#312e81] my-10 ">
          About Us
        </h1>
        <div className="text-xl leading-10 text-center md:px-52 px-10 py-10">
          {data.AboutUs}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-10">
        <div className="justify-center items-center hidden md:flex">
        <div><img src={mission} alt="mission" className="h-60" /></div>
        </div>
          <div className="text-xl leading-10 text-center p-10">
          <div className="shadow-lg p-10">
          <h1 className="text-center text-3xl font-semibold text-[#312e81] mb-8">
          Mission
        </h1>
            {data.Mission}
          </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-10">
          <div className="text-xl leading-10 text-center p-10">
          <div className="shadow-lg p-10">
        <h1 className="text-center text-3xl font-semibold text-[#312e81] mb-8">
          Vision
        </h1>
            {data.Vision}
          </div>
          </div>
        <div className="justify-center items-center hidden md:flex">
        <div><img src={vision} alt="vision" className="h-60" /></div>
        </div>
        </div>
      </div>
      <Dealers />
      <TopNavBtn />
    </div>
  );
}

export default AboutPage;
