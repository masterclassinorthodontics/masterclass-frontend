// FullScreenSection.jsx
import React from "react";
import bengalurubannerimg from "../../assets/images/web-png-4.png"
// import MyImage from "../../assets/images/banner-img.png"; // banner image link

const BegBannerSection = () => {
  return (
    <section className="w-full h-full flex items-center justify-center overflow-hidden">
  <img
    src={bengalurubannerimg}
    alt="Banner"
    className="w-full h-full object-contain md:object-cover"
    loading="lazy"
  />
</section>

  );
};

export default BegBannerSection;
