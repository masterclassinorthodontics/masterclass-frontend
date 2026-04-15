import React from "react";

import img1 from "../assets/images/delhi-gallery/1.jpg";
import img2 from "../assets/images/delhi-gallery/2.jpg";
import img3 from "../assets/images/delhi-gallery/2.jpg";
import img4 from "../assets/images/delhi-gallery/4.jpg";
import img5 from "../assets/images/delhi-gallery/5.jpg";
import img6 from "../assets/images/delhi-gallery/6.jpg";
import img7 from "../assets/images/delhi-gallery/7.jpg";
import img8 from "../assets/images/delhi-gallery/8.jpg";
import img9 from "../assets/images/delhi-gallery/9.jpg";
import img10 from "../assets/images/delhi-gallery/10.jpg";
import img11 from "../assets/images/delhi-gallery/11.jpg";
import img12 from "../assets/images/delhi-gallery/12.jpg";
import img13 from "../assets/images/delhi-gallery/13.jpg";
import img14 from "../assets/images/delhi-gallery/14.jpg";
import img15 from "../assets/images/delhi-gallery/15.jpg";
import img16 from "../assets/images/delhi-gallery/16.jpg";
import img17 from "../assets/images/delhi-gallery/17.jpg";
import img18 from "../assets/images/delhi-gallery/18.jpg";
import img19 from "../assets/images/delhi-gallery/19.jpg";
import img20 from "../assets/images/delhi-gallery/20.jpg";
import img21 from "../assets/images/delhi-gallery/21.jpg";
import img22 from "../assets/images/delhi-gallery/22.jpg";
import img23 from "../assets/images/delhi-gallery/23.jpg";
import img24 from "../assets/images/delhi-gallery/24.jpg";
import img25 from "../assets/images/delhi-gallery/25.jpg";
import img26 from "../assets/images/delhi-gallery/26.jpg";
import img27 from "../assets/images/delhi-gallery/27.jpg";
import img28 from "../assets/images/delhi-gallery/28.jpg";
import img29 from "../assets/images/delhi-gallery/29.jpg";
import img30 from "../assets/images/delhi-gallery/30.jpg";
import img31 from "../assets/images/delhi-gallery/31.jpg";
import img32 from "../assets/images/delhi-gallery/32.jpg";
import img33 from "../assets/images/delhi-gallery/33.jpg";
import img34 from "../assets/images/delhi-gallery/34.jpg";
import img35 from "../assets/images/delhi-gallery/35.jpg";
import img36 from "../assets/images/delhi-gallery/36.jpg";
import img37 from "../assets/images/delhi-gallery/37.jpg";
import img38 from "../assets/images/delhi-gallery/38.jpg";
import img39 from "../assets/images/delhi-gallery/39.jpg";
import img40 from "../assets/images/delhi-gallery/40.jpg";
import img41 from "../assets/images/delhi-gallery/41.jpg";
import img42 from "../assets/images/delhi-gallery/42.jpg";
import img43 from "../assets/images/delhi-gallery/43.jpg";
import img44 from "../assets/images/delhi-gallery/44.jpg";
import img45 from "../assets/images/delhi-gallery/45.jpg";
import img46 from "../assets/images/delhi-gallery/46.jpg";
import img47 from "../assets/images/delhi-gallery/47.jpg";
import img48 from "../assets/images/delhi-gallery/48.jpg";
import img49 from "../assets/images/delhi-gallery/49.jpg";
import img50 from "../assets/images/delhi-gallery/50.jpg";
import img51 from "../assets/images/delhi-gallery/51.jpg";
import img52 from "../assets/images/delhi-gallery/52.jpg";
import img53 from "../assets/images/delhi-gallery/53.jpg";
import img54 from "../assets/images/delhi-gallery/54.jpg";
import img55 from "../assets/images/delhi-gallery/55.jpg";
import img56 from "../assets/images/delhi-gallery/56.jpg";
import img57 from "../assets/images/delhi-gallery/57.jpg";
import img58 from "../assets/images/delhi-gallery/58.jpg";
import img59 from "../assets/images/delhi-gallery/59.jpg";
import img60 from "../assets/images/delhi-gallery/60.jpg";
import img61 from "../assets/images/delhi-gallery/61.jpg";
import img62 from "../assets/images/delhi-gallery/62.jpg";
import img63 from "../assets/images/delhi-gallery/63.png";
import bothbg from "../assets/images/both-side-gradient.png"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ... import up to img43

const DelhiGallerySection = () => {
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
          Masterclass Delhi
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
          <div className="overflow-hidden rounded-lg">
            <img src={img34} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img35} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img36} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img37} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img38} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img39} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img40} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img41} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img42} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img43} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img44} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img45} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img46} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img47} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img48} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img49} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img50} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img51} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img52} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img53} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img54} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img55} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img56} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img57} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img58} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img59} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img60} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img61} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img62} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={img63} alt="img6" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
          </div>

          {/* ... keep adding more images the same way up to img43 */}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default DelhiGallerySection;
