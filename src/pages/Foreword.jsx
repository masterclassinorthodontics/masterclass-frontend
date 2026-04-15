import { useState } from "react";
import pagebg from "../assets/images/Zoombg.jpg";
import img1 from "../assets/images/FOREWORD-img.png";
import img2 from "../assets/images/FOREWORD-img2.jpg";
import img3 from "../assets/images/FOREWORD-img3.png";
import img4 from "../assets/images/FOREWORD_img4.png";
import img5 from "../assets/images/FOREWORD-img5.png";
import img6 from "../assets/images/FOREWORD-img6.png";
import img7 from "../assets/images/FOREWORD-img7.png";
import img8 from "../assets/images/FOREWORD-img8.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function Foreword() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Navbar />

      {/* FULL-WIDTH BACKGROUND */}
      <section
        className="w-full py-28"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.78)),url(${pagebg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* FIXED-WIDTH CONTENT */}
        <div className="max-w-6xl mx-auto p-4">
          <div className="grid grid-cols-3 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Gallery ${index}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}

            {/* Empty cell for alignment */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
      <Footer/>
    </>
  );
}
