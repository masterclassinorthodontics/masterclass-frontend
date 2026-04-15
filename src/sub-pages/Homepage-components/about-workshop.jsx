import React, { useState } from "react";
import bothbg from "../../assets/images/both-side-gradient.png"
import WorkshopBtn from "../../assets/images/workshop-btn.png";
import Gallery1 from "../../assets/images/DAY1-COURSEA-img.png";
import Gallery2 from "../../assets/images/DAY2-COURSE-A-img.png";
import Gallery3 from "../../assets/images/DAY3-COURSEB-img.png";

const AboutWorkshopSection = () => {
  const galleryImages = [Gallery1, Gallery2, Gallery3];
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="w-full flex flex-col items-center gap-12 py-16"
    style={{
      backgroundImage:`url(${bothbg})`,
      backgroundPosition:"top",
      backgroundSize:"100vw 850px",
      backgroundRepeat:"no-repeat"
    }}
    >

      {/* WORKSHOP BUTTON */}
      <img
        src={WorkshopBtn}
        alt="Workshop Button"
        className="w-[75%] md:w-[65%] lg:w-[55%] cursor-pointer animate-fadeIn"
        onClick={() => console.log("Workshop button clicked")}
      />

      {/* GALLERY ROW */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
        {galleryImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Gallery ${idx + 1}`}
            className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => setActiveImage(img)}
          />
        ))}
      </div>

      {/* MODAL */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          {/* Close button */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:text-red-500"
          >
            &times;
          </button>

          {/* Zoomed image */}
          <img
            src={activeImage}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] object-contain shadow-xl rounded-lg animate-fadeIn"
          />
        </div>
      )}
    </section>
  );
};

export default AboutWorkshopSection;
