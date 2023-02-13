import Home from "../../components/Home/Home";
import Service from "../../components/Service/Service";
import Works from "../../components/Works/Works";
import ContactQuick from "../../components/ContactQuick/ContactQuick";
import TopNavBtn from "../../components/TopNavBtn/TopNavBtn";

function LandingPage() {
  return (
    <div>
      {/* Home */}
      <Home />
      {/* Service */}
      <Service />
      {/* Works */}
      <Works />
      {/* Contact */}
      <ContactQuick />
      {/* Top Navigation btn */}
      <TopNavBtn />
    </div>
  )
}

export default LandingPage