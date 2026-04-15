import { Link } from "react-router-dom";
import mainimg from "../assets/regisgter-images/FINAL-main-img.jpg"
import daypic from "../assets/regisgter-images/3rd day.png"
import onedaypic from "../assets/regisgter-images/1st button.png"
import twodaypic from "../assets/regisgter-images/2nd button.png"
import threedaypic from "../assets/regisgter-images/3rd button.png"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";  

const RegistrationType = () => {
  return (
    <>
    <Navbar/>
    <section className="w-full py-20">
      {/* Top Full Width Image */}
      <div className="w-full">
        <img
          src={mainimg}
          alt="Top Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left 1/3 Column */}
          <div className="md:w-1/3 w-full">
            
            {/* Blinking Click Here */}
            <div className="text-center mb-4 animate-pulse">
              <p className="text-xl font-bold">Click Here</p>
              <p className="text-2xl">↓</p>
            </div>

            {/* Image with Absolute Buttons */}
            <div className="relative w-full">
              <img
                src={daypic}
                alt="Registration"
                className="w-full h-auto"
              />

              {/* Button 1 */}
              <Link to="/registercourseA">
                <img
                  src={onedaypic}
                  alt="Student"
                  className="absolute top-[22%] left-[1%] w-full cursor-pointer hover:scale-105 transition"
                />
              </Link>

              {/* Button 2 */}
              <Link to="/registercourseB">
                <img
                  src={twodaypic}
                  alt="Teacher"
                  className="absolute top-[45%] left-[1%] w-full cursor-pointer hover:scale-105 transition"
                />
              </Link>

              {/* Button 3 */}
              <Link to="/registercourseAB">
                <img
                  src={threedaypic}
                  alt="Admin"
                  className="absolute top-[67%] left-[1%] w-full cursor-pointer hover:scale-105 transition"
                />
              </Link>
            </div>
          </div>

          {/* Right side (empty or future content) */}
          <div className="md:w-2/3 w-full">
            {/* Optional content */}
          </div>

        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default RegistrationType;
