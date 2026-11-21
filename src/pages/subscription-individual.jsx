import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import sparkimg from "../assets/images/Sparkspecial-pricingchart.png";
import bodybtn from "../assets/images/body 111 _sample.png";
import subsone from "../assets/images/1 month 33_new.png";
import substwo from "../assets/images/3 month bttn 22_new.png";
import substhree from "../assets/images/6 month bttn 22_new.png";
import subsfour from "../assets/images/4th bttn 22_new.png";
import bg from "../assets/images/from-bg.png";
import Footer from "../components/Footer";

const subscriptionindividual = () => {
  return (
    <>
      <Helmet>
        <title>SUBSCRIPTION INDIVIDUAL - Masterclass in Orthodontics</title>
      </Helmet>
      <Navbar />

      <section
        className="w-full overflow-x-clip bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.78)), url(${bg})`,
        }}
      >
        <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-10">
          {/* Left Section: 50% width on lg+, flush left, full height of section */}
          <div className="w-full lg:w-1/2 self-stretch flex">
            <img
              src={sparkimg}
              alt="Masterclass University Program Individual Subscription Plan"
              className="w-full h-full min-h-[520px] lg:min-h-[820px] object-fill block"
              loading="lazy"
            />
          </div>

          {/* Right Section: Remaining 50% width on lg+ */}
          <div className="w-full lg:w-1/2 flex justify-center items-center px-4">
            <div className="relative w-full max-w-[840px] lg:max-w-[960px] aspect-[7/10] overflow-hidden flex items-center justify-center">
              {/* Background Board Image */}
              <img
                src={bodybtn}
                alt="Subscription Plans Board"
                className="w-full h-full object-contain rounded-xl select-none pointer-events-none"
                loading="lazy"
              />

              {/* Independent SUBSCRIBE NOW heading */}
              <h2 className="absolute top-[22%] sm:top-[22%] left-1/2 -translate-x-1/2 z-10 font-semibold text-base md:text-xl lg:text-2xl blink text-center whitespace-nowrap px-6">
                SUBSCRIBE NOW
              </h2>

              {/* Overlay strictly inside bodybtn for the 4 identical buttons */}
              <div className="absolute inset-0 flex flex-col items-center pt-[44%] pb-[20%] px-[1%] min-h-0 min-w-0">
                <div className="w-full flex-1 min-h-0 flex flex-col justify-center gap-2 sm:gap-2.5">
                  <Link
                    to="/subscription-onemonth"
                    className="w-full flex-1 min-h-0 flex items-center justify-center transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <img
                      src={subsone}
                      alt="1 Month Subscription"
                      className="w-[60%] h-auto object-contain"
                    />
                  </Link>

                  <Link
                    to="/subscription-threemonth"
                    className="w-full flex-1 min-h-0 flex items-center justify-center transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <img
                      src={substwo}
                      alt="3 Months Subscription"
                      className="w-[60%] h-auto object-contain"
                    />
                  </Link>

                  <Link
                    to="/subscription-sixmonth"
                    className="w-full flex-1 min-h-0 flex items-center justify-center transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <img
                      src={substhree}
                      alt="6 Months Subscription"
                      className="w-[60%] h-auto object-contain"
                    />
                  </Link>

                  <Link
                    to="/subscription-twelve"
                    className="w-full flex-1 min-h-0 flex items-center justify-center transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <img
                      src={subsfour}
                      alt="12 Months Subscription"
                      className="w-[60%] h-auto object-contain"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default subscriptionindividual;