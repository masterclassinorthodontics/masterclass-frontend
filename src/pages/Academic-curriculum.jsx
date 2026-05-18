import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";

import gridbg from "../assets/images/from-bg.png";

// Main images
import mainImg from "../assets/images/Academic-Schedule-for-June-2025.png";
import mainImg2 from "../assets/images/Academic-Schedule-for-July-2025.png";
import mainImg3 from "../assets/images/Academic-Schedule-for-August-2025.png";
import mainImg4 from "../assets/images/Academic-Schedule-for-September-2025.png";
import mainImg5 from "../assets/images/Academic-Schedule-for-October-2025.png";
import mainImg6 from "../assets/images/Academic-Schedule-for-November-2025.png";
import mainImg7 from "../assets/images/Academic-Schedule-for-December-2025.png";
import mainImg8 from "../assets/images/Academic-Schedule-for-January-2026.png";
import mainImg9 from "../assets/images/Academic-Schedule-for-February-2026.png";
import mainImg10 from "../assets/images/Academic-Schedule-for-March-2026.png.png";
import mainImg11 from "../assets/images/Academic-Schedule-for-April-2026.png"
import mainImg12 from "../assets/images/Academic-Schedule-for-May-2026.png"
import mainImg13 from "../assets/images/Academic-Schedule-for-June-2026.png"

// Session images
import img1 from "../assets/images/SESSION-1-June-2025.png";
import img2 from "../assets/images/SESSION-2-June-2025.png";
import img3 from "../assets/images/SESSION-3-June-2025.png";
import img4 from "../assets/images/SESSION-4-June-2025.png";

import img5 from "../assets/images/SESSION-1-July-2025.png";
import img6 from "../assets/images/SESSION-2-July-2025.png";
import img7 from "../assets/images/SESSION-3-July-2025.png";
import img8 from "../assets/images/SESSION-4-July-2025.png";

import img9 from "../assets/images/SESSION-1-Aug-2025.png";
import img10 from "../assets/images/SESSION-2-Aug-2025.png";
import img11 from "../assets/images/SESSION-3-Aug-2025.png";

import img12 from "../assets/images/SESSION-1-Sept-2025.png";
import img13 from "../assets/images/SESSION-2-Sept-2025.png";
import img14 from "../assets/images/SESSION-3-Sept-2025.png";
import img15 from "../assets/images/SESSION-4-Sept-2025.png";

import img16 from "../assets/images/SESSION-1-Oct-2025.png";
import img17 from "../assets/images/SESSION-2-Oct-2025.png";
import img18 from "../assets/images/SESSION-3-Oct-2025.png";
import img19 from "../assets/images/SESSION-4-Oct-2025.png";

import img20 from "../assets/images/SESSION-1-Nov-2025.png";
import img21 from "../assets/images/SESSION-2-Nov-2025.png";

import img22 from "../assets/images/SESSION-1-Dec-2025.png";
import img23 from "../assets/images/SESSION-2-Dec-2025.png";
import img24 from "../assets/images/SESSION-3-Dec-2025.png";

import img25 from "../assets/images/SESSION-1-Jan-2026.png";
import img26 from "../assets/images/SESSION-2-Jan-2026.png";
import img27 from "../assets/images/SESSION-3-Jan-2026.png";

import img28 from "../assets/images/SESSION-1-Feb-2026.png"
import img29 from "../assets/images/SESSION-2-Feb-2026.png"
import img30 from "../assets/images/SESSION-3-Feb-2026.png"

import img31 from "../assets/images/SESSION-1-Mar-2026.png"
import img32 from "../assets/images/SESSION-2-Mar-2026.png"
import img33 from "../assets/images/SESSION-3-Mar-2026.png"

import img34 from "../assets/images/SESSION-1-April-2026.png"
import img35 from "../assets/images/SESSION-2-April-2026.png"
import img36 from "../assets/images/SESSION-3-April-2026.png"
import img37 from "../assets/images/SESSION-4-April-2026.png"
import img38 from "../assets/images/SESSION-5-Apri-2026.png"

import img39 from "../assets/images/SESSION-1-May-2026.png"
import img40 from "../assets/images/SESSION-2-May-2026.png"
import img41 from "../assets/images/SESSION-3-May-2026.png"

import img42 from "../assets/images/SESSION-1-June-2026.png"
import img43 from "../assets/images/SESSION-2-June-2026.png"
import img44 from "../assets/images/SESSION-3-June-2026.png"
import img45 from "../assets/images/SESSION-4-June-2026.png"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const rowsData = [
  { main: mainImg, images: [img1, img2, img3, img4] },
  { main: mainImg2, images: [img5, img6, img7, img8] },
  { main: mainImg3, images: [img9, img10, img11] },
  { main: mainImg4, images: [img12, img13, img14, img15] },
  { main: mainImg5, images: [img16, img17, img18, img19] },
  { main: mainImg6, images: [img20, img21] },
  { main: mainImg7, images: [img22, img23, img24] },
  { main: mainImg8, images: [img25, img26, img27] },
  { main: mainImg9, images: [img28, img29, img30] },
  { main: mainImg10, images: [img31, img32, img33]},
  { main: mainImg11, images:[img34, img35, img36, img37, img38]},
  { main: mainImg12, images:[img39, img40, img41]},
  { main: mainImg13, images:[img42, img43, img44, img45]}
];

const AcademicCurriculumsection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
    <Helmet>
      <title>ACADEMIC CURRICULUM UNDER MASTERCLASS UNIVERSITY - Masterclass in Orthodontics</title>
    </Helmet>
    <Navbar/>
    <section
      className="w-full py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.78)), url(${gridbg})`,
        backgroundSize: "contain",
        backgroundPosition: "top",
      }}
    >
      {/* INNER CONTENT WRAPPER */}
      <div className="max-w-6xl mx-auto px-6">
        {rowsData.map((row, index) => (
          <div key={index} className="mb-16">

            {/* Main Image (slightly bigger) */}
            <div className="mb-8">
              <img
                src={row.main}
                alt="Main"
                className="w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] h-auto object-cover"
              />
            </div>

            {/* Session Images (slightly smaller, with side gaps) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {row.images.map((img, idx) => (
                <div key={idx} className="w-full">
                  <img
                    src={img}
                    alt="Row Image"
                    onClick={()=>setSelectedImage(img)}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Divider aligned to content width */}
            {index !== rowsData.length - 1 && (
              <hr className="mt-16 border-gray-300 w-full" />
            )}
          </div>
        ))}
      </div>
    </section>
    {selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 backdrop-blur-sm bg-opacity-80 flex items-center justify-center z-50"
    onClick={() => setSelectedImage(null)}
  >
    {/* Close Button */}
    <button
      className="absolute top-5 right-5 text-white text-4xl font-bold"
      onClick={() => setSelectedImage(null)}
    >
      &times;
    </button>

    {/* Image */}
    <img
      src={selectedImage}
      alt="Preview"
      onClick={(e) => e.stopPropagation()}
      className="max-w-[90%] max-h-[90%] object-contain"
    />
  </div>
)}
    <Footer/>
    </>
  );
};

export default AcademicCurriculumsection;
