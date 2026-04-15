import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import imgA from "../assets/images/gallery-banglore.jpg"
import imgB from "../assets/images/gallery-delhi.jpg";
import bothbg from "../assets/images/both-side-gradient.png"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GallerySection() {
  return (
    <>
    <Helmet>
      <title>GALLERY - Masterclass in Orthodontics</title>
    </Helmet>
    <Navbar/>
    <section className="w-full py-40 md:py-32 lg:py-48 bg-no-repeat bg-cover bg-center"
    style={{
      backgroundImage:`url(${bothbg})`,
    }}
    >
      {/* Heading */}
      <div className="flex flex-col items-center mb-12 px-6">
        <h2 className="text-2xl sm:text-3xl md:text-[2.15rem] font-bold text-center">
          Masterclass Sessions Gallery
        </h2>

        {/* Underlines */}
        <div className="mt-3 flex flex-col items-center w-full max-w-xs sm:max-w-md">
          <span className="block w-full h-[1px] bg-black mb-1"></span>
          <span className="block w-full h-[8px] sm:h-[12px] bg-black"></span>
        </div>
      </div>

      {/* Images Row */}
      <div
        className="flex flex-col md:flex-row gap-12 md:gap-10 px-6 md:px-[10vw] lg:px-[15vw]">
        {/* Card 1 */}
        <div className="w-full md:w-1/2 text-center">
          <img
            src={imgA}
            alt="Gallery One"
            className="w-full h-auto mb-6 rounded-xl"
          />

          <h3 className="text-lg sm:text-xl md:text-[24px] font-bold leading-snug mb-6">
            MASTERCLASS<br /> GALLERY DELHI
          </h3>

          <Link to="/masterclass-session-delhi">
            <button className="
              px-6 sm:px-8 py-2
              border-4 border-black
              rounded-lg
              text-black
              font-semibold
              bg-transparent
              transition
              cursor-pointer
              hover:shadow-2xl
              active:shadow-sm
            ">
              VIEW ALL
            </button>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/2 text-center">
          <img
            src={imgB}
            alt="Gallery Two"
            className="w-full h-auto mb-6 rounded-xl"
          />

          <h3 className="text-lg sm:text-xl md:text-[24px] font-bold leading-snug mb-6">
            MASTERCLASS <br /> GALLERY BANGALORE
          </h3>

          <Link to="/masterclass-session-bangalore">
            <button className="
              px-6 sm:px-8 py-2
              border-4 border-black
              rounded-lg
              text-black
              font-semibold
              bg-transparent
              transition
              cursor-pointer
              hover:shadow-2xl
              active:shadow-sm
            ">
              VIEW ALL
            </button>
          </Link>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
