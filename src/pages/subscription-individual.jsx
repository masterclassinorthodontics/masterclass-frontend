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
  className="h-[150vh] py-32"
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
        loading="lazy"
      />
    </div>

    {/* Right Section */}
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <div className="relative w-full max-w-[900px] lg:max-w-[1000px] aspect-[3/4]">

    {/* Background */}
    <img
      src={bodybtn}
      alt="Right"
      className="absolute inset-0 w-full h-full object-contain"
      loading="lazy"
    />

    {/* Overlay */}
    <div className="absolute top-[10%] inset-0 flex flex-col items-center justify-center px-4">

      <h2 className="font-semibold text-base md:text-xl lg:text-2xl mb-4 blink">
        SUBSCRIBE NOW
      </h2>

      <Link to="/subscription-onemonth">
        <img src={subsone} className="w-52 sm:w-48 md:w-72 lg:w-120 object-contain" />
      </Link>

      <Link to="/subscription-threemonth">
        <img src={substwo} className="w-52 sm:w-48 md:w-72 lg:w-120 object-contain" />
      </Link>

      <Link to="/subscription-sixmonth">
        <img src={substhree} className="w-52 sm:w-48 md:w-72 lg:w-120 object-contain" />
      </Link>

      <Link to="/subscription-twelve">
        <img src={subsfour} className="w-52 sm:w-48 md:w-72 lg:w-120 object-contain" />
      </Link>

    </div>
  </div>
</div>
  </div>
</section>
        <Footer/>
        </>
    )
}

export default subscriptionindividual;