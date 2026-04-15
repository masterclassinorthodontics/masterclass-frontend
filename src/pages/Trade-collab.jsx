import React from "react";
import { Helmet } from "react-helmet";
import {Link} from "react-router-dom"

import artbg from "../assets/images/Artboard-bg.png"

// Image buttons
import btnImg1 from "../assets/images/Trade-Platform-img.png";
import btnImg2 from "../assets/images/Sponsor-Masterclass-University-Program.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TradePlatformSection = () => {
  return (
    <>
    <Helmet>
      <title>TRADE COLLABORATION - Masterclass in Orthodontics</title>
    </Helmet>
    <Navbar/>
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center gap-8"
    style={{
        backgroundImage:`url(${artbg})`,
        backgroundPosition:"center",
    }}
    >
      
      
      {/* Heading */}
      <h2 className="text-2xl font-semibold">
        Trade Platform
      </h2>

      {/* Image Button 1 */}
      <Link to="/trade-registration">
      <button className="focus:outline-none">
        <img
          src={btnImg1}
          alt="Trade Platform Button 1"
          className="w-[35vw] h-auto object-containt transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)]"
        />
      </button>
      </Link>

      {/* Image Button 2 */}
      <Link>
      <button className="focus:outline-none">
        <img
          src={btnImg2}
          alt="Trade Platform Button 2"
          className="w-[35vw] h-auto object-contain transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)]"
        />
      </button>
      </Link>

    </section>
    <Footer/>
    </>
  );
};

export default TradePlatformSection;
