import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from '../../asserts/images/aboutUsBanner.jpg'
import TopNavBtn from "../../components/TopNavBtn/TopNavBtn";

function AboutPage() {
  return (
    <div>
      <Navbar floatingNav />
      <div className="h-[80vh]">
        <img src={Banner} alt="banner" className="h-[100%] w-[100%]" />
      </div>
      <div>
        <h1 className="text-center text-4xl font-semibold text-[#312e81] my-10 ">
          About Us
        </h1>
        <div className="text-xl leading-10 text-center md:px-52 px-10 py-10">
          Santhosh Audios is established in the year 2005,which acts as one-stop
          destination servicing customers both local and from other parts of
          Erode.The belief that customer satisfaction is an important as their
          products and services,have helped this establishment garner a vast
          base of customers,which continues to grow day by day.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-10">
        <div className="justify-center items-center hidden md:flex">
        <div>image</div>
        </div>
          <div className="text-xl leading-10 text-center p-10">
          <div className="shadow-lg p-10">
            Ensuring a positive customer experience, making available goods
            and/or services that are of top-notch quality.
          </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-10">
          <div className="text-xl leading-10 text-center p-10">
          <div className="shadow-lg p-10">
            Ensuring a positive customer experience, making available goods
            and/or services that are of top-notch quality.
          </div>
          </div>
        <div className="justify-center items-center hidden md:flex">
        <div>image</div>
        </div>
        </div>
      </div>
      <TopNavBtn />
    </div>
  );
}

export default AboutPage;
