// FullScreenSection.jsx
import React from "react";
import MyImage from "../../assets/images/banner-img.png"; // banner image link

const BannerSection = () => {
  return (
    <section className="w-full h-full flex items-center justify-center pt-[16vh] overflow-hidden">
  <img
    src={MyImage}
    alt="Banner"
    className="max-w-full max-h-full object-contain md:object-cover"
    loading="lazy"
  />
</section>

  );
};

export default BannerSection;
