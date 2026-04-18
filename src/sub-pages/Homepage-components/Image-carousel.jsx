import { useEffect, useState } from "react";
import bothbg from "../../assets/images/both-side-gradient.png";
import buttonImg from "../../assets/images/gallery-bttn.png";

// images
import img1 from "../../assets/carousel/Event-Img-1.jpg";
import img2 from "../../assets/carousel/Event-Img-2.png";
import img3 from "../../assets/carousel/Event-Img-3.png";
import img4 from "../../assets/carousel/Event-Img-4.jpg";
import img5 from "../../assets/carousel/Event-Img-5.jpg";
import img6 from "../../assets/carousel/Event-Img-6.jpg";
import img7 from "../../assets/carousel/Event-Img-7.jpg";
import img8 from "../../assets/carousel/Event-Img-8.jpg";
import img9 from "../../assets/carousel/Event-Img-9.jpg";
import img10 from "../../assets/carousel/Event-Img-10.jpg";
import img11 from "../../assets/carousel/Event-Img-11.jpg";
import img12 from "../../assets/carousel/Event-Img-12.jpg";
import img13 from "../../assets/carousel/Event-Img-13.jpg";
import img14 from "../../assets/carousel/Event-Img-14.jpg";
import img15 from "../../assets/carousel/Event-Img-15.jpg";
import img16 from "../../assets/carousel/Event-Img-16.jpg";
import img17 from "../../assets/carousel/Event-Img-17.jpg";
import img18 from "../../assets/carousel/Event-Img-18.jpg";
import img19 from "../../assets/carousel/Event-Img-19.jpg";

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19,
];

// 🔹 responsive visible count
const getVisibleCount = () => {
  if (window.innerWidth < 640) return 1;   // mobile
  if (window.innerWidth < 1024) return 2;  // tablet
  return 3;                                // desktop
};

const ImageCarouselSection = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [visible, setVisible] = useState(getVisibleCount());

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // loop reset logic
  useEffect(() => {
    if (index === images.length) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 700);
    } else {
      setAnimate(true);
    }
  }, [index]);

  // handle resize
  useEffect(() => {
    const handleResize = () => {
      setVisible(getVisibleCount());
      setIndex(0);
      setAnimate(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // clone slides for infinite loop
  const slides = [...images, ...images.slice(0, visible)];

  return (
    <section
      className="w-full py-16 flex flex-col items-center gap-12"
      style={{
        backgroundImage:
          `url(${bothbg})`,
        backgroundPosition: "top",
      }}
    >
      <img
        src={buttonImg}
        alt="Button"
        className="w-[75%] md:w-[65%] lg:w-[55%]"
        loading="lazy"
      />

      <div className="w-full overflow-hidden">
        <div
          className={`flex ${
            animate ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(-${(index * 100) / slides.length}%)`,
            width: `${(slides.length / visible) * 100}%`,
          }}
        >
          {slides.map((img, i) => (
            <div
              key={i}
              className="flex justify-center shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <img
                src={img}
                alt={`carousel-${i}`}
                className="w-[90%] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarouselSection;
