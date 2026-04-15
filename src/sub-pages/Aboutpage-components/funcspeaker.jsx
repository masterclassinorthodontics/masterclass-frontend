import React from "react";
import { Link } from "react-router-dom";
import bothbg from "../../assets/images/both-side-gradient.png"
import funcimg1 from "../../assets/images/funcimg1.png"
import funcimg2 from "../../assets/images/funcimg2.png"
import funcimg3 from "../../assets/images/funcimg3.png"
import funcimg4 from "../../assets/images/funcimg4.png"
import funcimg5 from "../../assets/images/funcimg5.png"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Funcspeakers() {
  const speakersData = [
    {
      name: "Dr. Adith Venugopal",
      img: funcimg1,
    },
    {
      name: "Dr. Abhisek Ghosh",
      img: funcimg2,
    },
    {
      name: "Dr. Rajaganesh Gautam",
      img: funcimg3,
    },
    {
      name: "Dr. Arun Nayak",
      img: funcimg4,
    },
    {
      name: "Dr. Ajit Kalia",
      img: funcimg5,
    },
  ];

  return (
    <section className="my-8 px-16 py-24"
    style={{
        backgroundImage:
          `url(${bothbg})`,
        backgroundPosition: "top",
      }}
    >
      <div className="grid grid-cols-3 gap-4 w-full max-w-[1200px] mx-auto">
        <div className="text-black pt-6">
          <p className="uppercase tracking-widest text-md">Listen to the</p>
          <h2 className="text-4xl font-bold mt-2 mb-6">Our Speakers</h2>
          <p className="text-md">
            Unlock precision in orthodontics at our Masterclass event. Refine
            techniques, exchange insights, and elevate your practice to new
            heights.
          </p>
        </div>

        {speakersData.map((speaker, index) => (
          <SpeakerCard key={index} name={speaker.name} img={speaker.img} />
        ))}
      </div>
    </section>
  );
}

const SpeakerCard = ({ name, img }) => {
  const socialIcons = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/masterclassecorthacademy?mibextid=LQQJ4d" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@masterclassinorthodontics" },
  ];

  return (
    <div className="relative h-[380px] rounded-2xl overflow-hidden bg-white shadow-2xl">
      <img src={img} alt={name} className="w-full h-full object-cover object-top" />

      <div className="absolute bottom-2 bg-white left-1/2 -translate-x-1/2 rounded-2xl w-[95%] px-4 py-4">
        <div className="flex justify-between">
          <h4 className="text-md font-semibold leading-tight">{name}</h4>
          <div className="text-md">Speaker</div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="w-6 h-6 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center text-md"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <Link
            to="/speaker-details"
            className="text-md font-medium text-blue-600 hover:underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Funcspeakers;
