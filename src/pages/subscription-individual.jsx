import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import logo from "../assets/images/masterclass-logo.png";
import submitBtn from "../assets/images/submit-button.png";
import sparkimg from "../assets/images/Sparkspecial-pricingchart.png"
import bodybtn from "../assets/images/body 111 _sample.png"
import subsone from "../assets/images/1 month 33_new.png"
import substwo from "../assets/images/3 month bttn 22_new.png"
import substhree from "../assets/images/6 month bttn 22_new.png"
import subsfour from "../assets/images/4th bttn 22_new.png"
import bg from "../assets/images/from-bg.png"
import Footer from "../components/Footer";

const subscriptionindividual = () =>{
    return(
        <>
        <Helmet>
          <title>SUBSCRIPTION INDIVIDUAL - Masterclass in Orthodontics</title>
        </Helmet>
        <Navbar/>
        <section
  className="min-h-screen py-32"
  style={{
    backgroundImage: `linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.78)),url(${bg})`,
  }}
>
  <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">

    {/* Left Section */}
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <img
        src={sparkimg}
        alt="Left"
        className="w-full max-w-none object-contain px-4 lg:px-10"
      />
    </div>

    {/* Right Section */}
    <div className="w-full lg:w-1/2 relative flex justify-center items-center">
      
      {/* Background */}
      <img
        src={bodybtn}
        alt="Right"
        className="w-full max-w-none object-contain px-4 lg:px-10"
      />

      {/* Overlay Buttons */}
      <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <h2 className="font-semibold text-lg md:text-2xl blink mb-8 -mt-8 md:-mt-8 blink">SUBSCRIBE NOW</h2>
        
        <Link to="/subscription-onemonth">
          <img src={subsone} className="w-48 lg:w-72 xl:w-108 object-contain" />
        </Link>

        <Link to="/subscription-threemonth">
          <img src={substwo} className="w-48 lg:w-72 xl:w-108 object-contain" />
        </Link>

        <Link to="/subscription-sixmonth">
          <img src={substhree} className="w-48 lg:w-72 xl:w-108 object-contain" />
        </Link>

        <Link to="/subscription-twelve">
          <img src={subsfour} className="w-48 lg:w-72 xl:w-108 object-contain" />
        </Link>

      </div>
    </div>
  </div>
</section>
        <Footer/>
        </>
    )
}

export default subscriptionindividual;