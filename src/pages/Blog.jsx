import blogimg from "../assets/images/blog-img.jpg"
import bothbg from "../assets/images/both-side-gradient.png"
import { Helmet } from "react-helmet";
import bgsolid from "../assets/images/background-solid.png"
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function RevolutionSection() {
  return (
    <>
    <Helmet>
      <title>BLOGS - Masterclass in Orthodontics</title>
    </Helmet>
    <Navbar/>
    <section className="w-full min-h-screen flex items-center justify-center py-40"
    style={{
        backgroundImage:`url(${bothbg})`,
    }}
    >
      {/* Outer Box */}
      <div className="w-full max-w-[80vw] rounded-xl px-[4vw] py-10"
      style={{
        backgroundImage:`url(${bgsolid})`
      }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left Column */}
          <div className="flex items-center justify-center">
            <div className="w-full overflow-hidden rounded-md">
              <img
                src={blogimg}
                alt="3D Printed Orthodontics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center text-left">
            <h2 className="text-[32px] font-semibold text-black leading-snug mb-5">
              <span className="block">
                Revolutionizing Orthodontics:
              </span>
              <span className="block">
                The Synergy of 3D Printed Appliances and
              </span>
              <span className="block">
                Temporary Anchorage Devices (TADs)
              </span>
            </h2>

            <p className="text-gray-700 text-[15px] leading-relaxed mb-7">
              The field of orthodontics has experienced a transformative
              revolution due to technological advancements, particularly
              the integration of 3D printing technology with Temporary
              Anchorage Devices (TADs). This has streamlined treatment
              processes and opened up new possibilities for customized
              solutions. Metal 3D printing technology is being used to
              produce customized orthodontic appliances, offering patient
              comfort, treatment efficacy, and predictability.
            </p>

            <Link to="/revolutionizing-orthodontics-the-synergy-of-3d-printed-appliances-and-temporary-anchorage-devices-tads">
              <button
                className="
                w-fit
                px-8 py-3
                border-4 border-black
                rounded-md
                font-semibold
                text-black
                bg-transparent
                transition
                hover:shadow-md
                "
              >
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

