import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import programBtn1 from "../../assets/images/program-btn.png";
import programBtn2 from "../../assets/images/program-btn2.png";
import Navbar from "../../components/Navbar";
import universitybg from "../../assets/images/university-bg.png";
import gridBg from "../../assets/images/from-bg.png";

import img1 from "../../assets/images/university-prog-img1.png";
import img2 from "../../assets/images/university-prog-img2.png";
import img3 from "../../assets/images/university-prog-img3.png";
import img4 from "../../assets/images/university-prog-img4.png";
import img5 from "../../assets/images/university-prog-img5.png";
import img6 from "../../assets/images/university-prog-img6.png";
import img7 from "../../assets/images/university-prog-img7.png";
import img8 from "../../assets/images/university-prog-img8.png";
import img9 from "../../assets/images/university-prog-img9.png";
import img10 from "../../assets/images/university-prog-img10.png";
import img11 from "../../assets/images/university-prog-img11.png";
import img12 from "../../assets/images/university-prog-img14.png";
import Footer from "../../components/Footer";

/* 🔹 ROUTES FOR EACH IMAGE (ORDER MATTERS) */
const imageRoutes = [
  "/form",
  "/institution-in-collaboration-images",
  "/password-form",
  "/list-of-faculty-associated-with-masterclass-university-program-individual",
  "/academic-curriculum-under-masterclass-university-program",
  "/trade-collaboration",
  "/interdisciplinary",
  "/masterclass-awards",
  "https://pages.razorpay.com/pl_RZbGzY6eCxnmxC/view",
  "/financial-details-form-faculty-of-masterclass-university-program",
  "/zoom-meeting",
  "/subscription-individual"  
];

const MasterclassUniversityProgram = () => {
  return (
    <>
      <Helmet>
      <title>MASTERCLASS UNIVERSITY PROGRAM - Masterclass in Orthodontics</title>
      </Helmet>
      <Navbar />

      {/* 🔹 FIRST SECTION (unchanged) */}
      <section
        className="w-full pt-40 bg-no-repeat bg-center bg-cover md:bg-cover lg:bg-cover"
        style={{
          backgroundImage: `url(${universitybg})`,}}
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:pl-12">
          <div className="w-full lg:w-[60%]">
            <h3 className="text-[40px] font-semibold text-center mb-6">
              Masterclass University Program
            </h3>

            <div className="text-[15px] sm:text-[16px] md:text-[18px] text-gray-500 leading-7 space-y-6 text-justify break-words overflow-hidden px-2 sm:px-0">
              <p>
                Masterclass University Program is conceptualized by ECO (Excellence in ClinicalOrthodontics) Academy – the brainchild of Dr.Abhisek Ghosh and Dr.Adith Venugopal. This program is ably supported by its board members and technical team comprising of – Dr. Venkata Palla Yudhistar, Dr.Digvijay Patil, Dr.Digant Thakkar, Dr.Sumath Kumar Rengarajan and a team of close to 100 senior faculty members.
              </p>
              <p>
                It is aimed to channelize the deliverance of contemporary orthodontic education to post graduate students and academicians from across India and globally.
              </p>
              <p>
                It creates a platform for academicians and clinicians to reach out to the orthodontic fraternity irrespective of any bias.
              </p>
              <p>
                The university program provides post graduate students and academicians with this unique opportunity of receiving contemporary orthodontic education from the masters at no cost – something which is unique in itself.
              </p>
              <p>
                It’s an effort from the side of team – “Masterclass” to give back to the orthodontic community and nurture the future of orthodontics in India  and globally.
              </p>
              <p>
                Masterclass university program stands as a reminder that education is not just about aquiring knowledge, it is about building connections, sparking curiosity and growing together as a community dedicated to advancing our profession.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-6 items-start">
              <img
                src={programBtn2}
                alt="Program Button 1"
                className="w-[90%] sm:w-[80%] md:w-[70%] cursor-pointer"
                onClick={() =>
                  (window.location.href =
                    "/foreword")
                }
                loading="lazy"
              />

              <img
                src={programBtn1}
                alt="Program Button 2"
                className="w-[90%] sm:w-[80%] md:w-[70%] cursor-pointer"
                onClick={() => (window.location.href = "https://api.whatsapp.com/send/?phone=918697191291")}
                loading="lazy"
              />
            </div>
          </div>

          <div className="w-full lg:w-[35%]" />
        </div>
      </section>

      {/* 🔹 SECOND SECTION — RESPONSIVE GRID FIX */}
      <section
        className="w-full py-8"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.78)),url(${gridBg})`,
          backgroundSize: "contain",
          backgroundPosition: "top",
        }}
      >
        <div className="px-4 sm:px-10 lg:px-[12vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-10">
            {/* 🔹 MOBILE: custom order */}
  <div className="block md:hidden space-y-8">
    {/* Odd indexes */}
    {[img1, img3, img5, img7, img9, img11].map((img, i) => {
      const originalIndex = i * 2; // 0,2,4...
      return (
        <Link to={imageRoutes[originalIndex]} key={`odd-${i}`}>
          <img src={img} className="w-full cursor-pointer" />
        </Link>
      );
    })}

    {/* Even indexes */}
    {[img2, img4, img6, img8, img10, img12].map((img, i) => {
      const originalIndex = i * 2 + 1; // 1,3,5...
      return (
        <Link to={imageRoutes[originalIndex]} key={`even-${i}`}>
          <img src={img} className="w-full cursor-pointer" />
        </Link>
      );
    })}
  </div>

  {/* 🔹 DESKTOP: original layout untouched */}
  <div className="hidden md:grid md:grid-cols-2 gap-y-8 gap-x-10 col-span-1 md:col-span-2">
    {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12].map(
      (img, i) => (
        <Link to={imageRoutes[i]} key={i}>
          <img
            src={img}
            className="w-full cursor-pointer"
            alt={`program-${i}`}
            loading="lazy"
          />
        </Link>
      )
    )}
  </div>

            {/* LAST IMAGE */}
            {/* <Link to="/zoom-meeting" >
              <img
                src={img11}
                className="w-full mx-auto cursor-pointer"
                alt="zoom-meeting"
              />
            </Link> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MasterclassUniversityProgram;
