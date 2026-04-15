import img1 from "../assets/images/awards/01.png";
import img2 from "../assets/images/awards/02.png";
import img3 from "../assets/images/awards/03.png";
import img4 from "../assets/images/awards/04.png";
import img5 from "../assets/images/awards/05.png";
import img6 from "../assets/images/awards/06_new.png";
import img7 from "../assets/images/awards/07_new.png";
import img8 from "../assets/images/awards/08 _new.png";
import img9 from "../assets/images/awards/09_new.png";
import img10 from "../assets/images/awards/10_new.png";
import bg from "../assets/images/from-bg.png"
import {Helmet} from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const masterclassaward = () => {
  const images = [
    img1, img2,
    img3, img4,
    img5, img6,
    img7, img8,
    img9, img10
  ];

  return (
    <>
    <Helmet>
      <title>MASTERCLASS AWARDS - Masterclass in Orthodontics</title>
    </Helmet>
    <Navbar/>
    <section className="py-32 px-4"
    style={{
                backgroundImage:`linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.78)),url(${bg})`
            }}  
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {images.map((img, index) => (
          <div key={index} className="w-full">
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="w-full h-44 object-contain rounded-xl"
            />
          </div>
        ))}

      </div>
    </section>
    <Footer/>
    </>
  );
};

export default masterclassaward;