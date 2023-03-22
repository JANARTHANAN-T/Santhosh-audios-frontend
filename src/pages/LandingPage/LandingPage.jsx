import Home from "../../components/Home/Home";
import Service from "../../components/Service/Service";
import ContactQuick from "../../components/ContactQuick/ContactQuick";
import TopNavBtn from "../../components/TopNavBtn/TopNavBtn";


function LandingPage() {
  return (
    <div>
      {/* Home */}
      <Home />
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="100%" y1="51%" x2="0%" y2="49%"><stop offset="5%" stop-color="#0ea5e9"></stop><stop offset="95%" stop-color="#6366f1"></stop></linearGradient></defs><path d="M 0,500 C 0,500 0,250 0,250 C 205.71428571428572,321.42857142857144 822.8571428571429,285.7142857142857 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg>      {/* Service */}
      <Service />
      {/* Works */}
      {/* <Gallery /> */}
      {/* Contact */}
      <ContactQuick />
      {/* Top Navigation btn */}
      <TopNavBtn />
    </div>
  )
}

export default LandingPage