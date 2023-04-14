import React from "react";
// import './About.css'
function About() {
  return (
    <div className="relative -top-36">
      {/* <div class="about-section">
            <div class="inner-container">
                <h1>About Us</h1>
                <p class="text">
                Santhosh Audios is established in the year 2005,which acts as one-stop destination servicing customers both local and from other parts of Erode.The belief that customer satisfaction is an important as their products and services,have helped this establishment garner a vast base of customers,which continues to grow day by day.
                </p>
            </div>
        </div>
        <div class="mission-section">
            <div class="inner-container1">
                
                <p class="text1">
                Ensuring a positive customer experience, making available goods and/or services that are of top-notch quality.
                </p>
            </div>
        </div>
        <div class="vision-section">
            <div class="inner-container2">
                
                <p class="text2">
                The company’s mission is to provide “exceptional service” and quality products to its customers at a fair price.
                </p>
            </div>
        </div> */}
      <div className="grid grid-col-1 md:grid-cols-2">
        <div className="flex justify-center items-center">
            <div>company image</div>
        </div>
        
        <div className="p-10">
        <h1 className="text-center text-4xl font-semibold text-[#312e81] mb-10 ">About Us</h1>
        <div className="text-xl leading-10">
         Santhosh Audios is established in the year 2005,which acts as one-stop
          destination servicing customers both local and from other parts of
          Erode.The belief that customer satisfaction is an important as their
          products and services,have helped this establishment garner a vast
          base of customers,which continues to grow day by day.
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
