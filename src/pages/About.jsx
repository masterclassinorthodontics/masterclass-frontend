import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Funcspeakers from "../sub-pages/Aboutpage-components/funcspeaker";
import ImageCarouselSection from "../sub-pages/Homepage-components/Image-carousel";
import SpeakersSection from "../sub-pages/Homepage-components/speaker-section";

export default function AboutPage() {

  const speakersData = [
    {
      name: "Dr. Adith Venugopal",
      img: "https://zsi.org.in/design/front/assets/images/tourist1.jpg",
    },
    {
      name: "Dr. Abhisek Ghosh",
      img: "https://zsi.org.in/design/front/assets/images/tourist1.jpg",
    },
    {
      name: "Dr. Rajaganesh Gautam",
      img: "https://zsi.org.in/design/front/assets/images/tourist1.jpg",
    },
    {
      name: "Dr. Arun Nayak",
      img: "https://zsi.org.in/design/front/assets/images/tourist1.jpg",
    },
    {
      name: "Dr. Ajit Kalia",
      img: "https://zsi.org.in/design/front/assets/images/tourist1.jpg",
    },
  ];

  const [expanded, setExpanded] = useState(false);

  return (
    <>
    <Helmet>
      <title>ABOUT - Masterclass in Orthodontics</title>
    </Helmet>
      <Navbar />

      <section className="w-full py-40 px-4">
        <div className="max-w-7xl mx-auto">

          {/* TOP HEADING */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              About Eco Academy
            </h1>

            {/* UNDERLINES */}
            <div className="flex flex-col items-center">
              <div className="w-100 h-[1px] bg-black mb-1"></div>
              <div className="w-100 h-[6px] bg-black"></div>
            </div>
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT COLUMN */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                About <span className="text-[#D245B7]">The Seminar</span>
              </h2>

              <p className="text-gray-800 leading-relaxed mb-4">
                Masterclass in Orthodontics, an initiative by ECO ACADEMY is aimed
                at teaching and sharing the latest and best in contemporary
                orthodontics by a team of world class accomplished clinicians.
                We aim to promote Excellence in Clinical Orthodontics through
                comprehensive 2 or 3 day in person courses, restricted only to
                orthodontists. In these courses there is a showcase of clinical
                case reports, procedural videos along with a hands-on component
                on very realistic hand-held models and demonstrations on digital
                3D resources.
              </p>

              {/* EXPANDED CONTENT */}
              {expanded && (
                <p className="text-gray-800 leading-relaxed mb-4 whitespace-pre-line">
{`The resource faculty is a team of enthusiastic, energetic and experienced clinicians who are ready to share their clinical experiences, and more importantly their journey of learning, trouble shooting and improvisation so as to consistently achieve excellent clinical results for the patient. Our aim is to share a canvas of varied clinical scenarios, starting from simple clinical cases and progressing on to more advanced and complex situations. Each clinical case scenario is discussed threadbare with a presentation of top-class records, the logic and thought process behind the diagnosis and treatment planning based on sound fundamental principles and contemporary scientific evidence, the treatment steps and finally a critical appraisal of the finished results. Efforts are towards developing critical thinking skills rather than a mere bland pedagogy, with the participants constantly encouraged to question, analyze, understand and assimilate.

We have been hugely successful in this endeavor with our Masterclass series on Temporary Anchorage Devices (TADs), that happened in Bangalore and New Delhi, India in February and July 2023, where the delegates left back with huge amounts of clinical take back, inspiration, know how and most importantly confidence in incorporating TADs in their routine clinical practices. Our participant feedbacks have been a testimony to this fact.

Come, join us and be a part of this journey of raising the bar of Excellence in Clinical Orthodontics. We promise you that this is the best continuing education program that you can give yourself. You owe it to your patients!`}
                </p>
              )}

              {/* READ MORE / LESS BUTTON */}
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-4 px-8 py-4 border-2 border-black rounded-md transition shadow-lg hover:bg-black hover:text-white"
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            </div>

            {/* RIGHT COLUMN – YOUTUBE VIDEO */}
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-gb2gar7Z-w?si=0c9VIekAl8kg50yF"
                title="Eco Academy Seminar"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* <Funcspeakers/> */}
      <SpeakersSection/>
      <ImageCarouselSection/>

      <Footer />
    </>
  );
}
