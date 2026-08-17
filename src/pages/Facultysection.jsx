import React from "react";
import { Helmet } from "react-helmet";
import bgimg from "../assets/images/Bg-images-Final.jpg";

// National Faculty Images
import nat1 from "../assets/images/Faculty-img.png";
import nat2 from "../assets/images/faculty-img2.png";
import nat3 from "../assets/images/faculty-img3.png";
import nat4 from "../assets/images/faculty-img4.png";
import nat5 from "../assets/images/faculty-img-05.png";
import nat6 from "../assets/images/Faculty-img-06.png";

// International Faculty Images
import int1 from "../assets/images/faculty-int-img.png";
import int2 from "../assets/images/faculty-int-img-0002.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FacultySection = () => {
  return (
    <>
    <Helmet>
      <title>LIST OF FACULTY ASSOCIATED WITH MASTERCLASS UNIVERSITY PROGRAM - Masterclass in Orthodontics</title>
    </Helmet>
    <Navbar/>
    <section
      className="w-full py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.78)), url(${bgimg})`,
        backgroundSize: "contain",
        backgroundPosition: "top",
      }}
    >
      {/* National Heading */}
      <h2 className="text-[3.125rem] text-[#CDA448] font-base text-center leading-snug py-20">
        <span className="block">Enrolled National Faculty Members</span>
        <span className="block">of</span>
        <span className="block">Masterclass University Program</span>
      </h2>

      {/* National Images */}
      {[nat1, nat2, nat3, nat4, nat5, nat6].map((img, index) => (
        <div
          key={index}
          className="w-full py-2 md:py-4 lg:py-2 flex items-center justify-center">
          {/* FIXED WIDTH WRAPPER */}
          <div className="w-[92vw] md:w-[85vw] lg:w-[75vw] flex items-start justify-center">
            <img
              src={img}
              alt="National Faculty"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      ))}

      {/* International Heading */}
      <h2 className="text-[3.125rem] text-[#CDA448] font-base text-center leading-snug py-20">
        <span className="block">Enrolled International Faculty Members</span>
        <span className="block">of</span>
        <span className="block">Masterclass University Program</span>
      </h2>

      {/* International Images */}
      {[int1,int2].map((img, index) => (
        <div
          key={index}
          className="w-full py-2 md:py-2 lg:py-2 flex items-center justify-center"
        >
          {/* SAME FIXED WIDTH WRAPPER */}
          <div className="w-[92vw] md:w-[80vw] lg:w-[70vw] flex items-start justify-center">
            <img
              src={img}
              alt="International Faculty"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      ))}
    </section>
    <Footer/>
    </>
  );
};

export default FacultySection;
