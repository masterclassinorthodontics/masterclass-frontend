import React from "react";

import img1 from "../assets/images/bangalore-gallery/1.webp";
import img2 from "../assets/images/bangalore-gallery/2.webp";
import img3 from "../assets/images/bangalore-gallery/3.webp";
import img4 from "../assets/images/bangalore-gallery/4.webp";
import img5 from "../assets/images/bangalore-gallery/5.webp";
import img6 from "../assets/images/bangalore-gallery/6.webp";
import img7 from "../assets/images/bangalore-gallery/7.webp";
import img8 from "../assets/images/bangalore-gallery/8.webp";
import img9 from "../assets/images/bangalore-gallery/9.webp";
import img10 from "../assets/images/bangalore-gallery/10.webp";
import img11 from "../assets/images/bangalore-gallery/11.webp";
import img12 from "../assets/images/bangalore-gallery/12.webp";
import img13 from "../assets/images/bangalore-gallery/13.webp";
import img14 from "../assets/images/bangalore-gallery/14.webp";
import img15 from "../assets/images/bangalore-gallery/15.webp";
import img16 from "../assets/images/bangalore-gallery/16.webp";
import img17 from "../assets/images/bangalore-gallery/17.webp";
import img18 from "../assets/images/bangalore-gallery/18.webp";
import img19 from "../assets/images/bangalore-gallery/19.webp";
import img20 from "../assets/images/bangalore-gallery/20.webp";
import img21 from "../assets/images/bangalore-gallery/21.webp";
import img22 from "../assets/images/bangalore-gallery/22.webp";
import img23 from "../assets/images/bangalore-gallery/23.webp";
import img24 from "../assets/images/bangalore-gallery/24.webp";
import img25 from "../assets/images/bangalore-gallery/25.webp";
import img26 from "../assets/images/bangalore-gallery/26.webp";
import img27 from "../assets/images/bangalore-gallery/27.webp";
import img28 from "../assets/images/bangalore-gallery/28.webp";
import img29 from "../assets/images/bangalore-gallery/29.webp";
import img30 from "../assets/images/bangalore-gallery/30.webp";
import img31 from "../assets/images/bangalore-gallery/31.webp";
import img32 from "../assets/images/bangalore-gallery/32.webp";
import img33 from "../assets/images/bangalore-gallery/33.webp";
import bothbg from "../assets/images/both-side-gradient.png"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ... import up to img43

const BangGallerySection = () => {
  return (
    <>
    <Navbar/>
    <section className="py-36 bg-gray-100"
    style={{
        backgroundImage:`url(${bothbg})`,
        backgroundPosition:"bottom"
    }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Masterclass Bangalore
        </h2>

        {/* Underlines */}
        <div className="mt-2 flex justify-center flex-col items-center gap-0.5">
          <div className="w-160 h-[1px] bg-gray-400"></div> {/* thin */}
          <div className="w-160 h-2 bg-gray-900"></div> {/* thick */}
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Images */}
          <div className="overflow-hidden rounded-lg">
            <img src={img1} alt="img1" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img2} alt="img2" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img3} alt="img3" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>

          <div className="overflow-hidden rounded-lg">
            <img src={img4} alt="img4" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img5} alt="img5" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img6} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img7} alt="img7" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img8} alt="img8" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img9} alt="img9" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img10} alt="img10" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img11} alt="img11" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img12} alt="img12" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img13} alt="img13" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img14} alt="img14" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img15} alt="img15" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img16} alt="img16" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img17} alt="img17" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img18} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img19} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img20} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img21} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img22} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img23} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img24} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img25} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img26} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img27} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img28} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img29} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img30} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img31} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img32} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img33} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>

          {/* ... keep adding more images the same way up to img43 */}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default BangGallerySection;
