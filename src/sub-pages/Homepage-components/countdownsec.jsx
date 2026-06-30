import React from "react";
import bothbg from "../../assets/images/both-side-gradient.png";
import RegisterBtn from "../../assets/images/reg-bttn.png";
// import { useNavigate } from "react-router-dom";

const CountdownSection = () => {
  // const navigate = useNavigate();

  return (
    <section
      className="w-full flex flex-col items-center gap-12 py-10"
      style={{
        backgroundImage: `url(${bothbg})`,
        backgroundPosition: "top",
        backgroundSize: "100vw 350px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={RegisterBtn}
        alt="Register Now"
        // onClick={() => navigate("/register")}
        className="cursor-pointer w-[75%] md:w-[65%] lg:w-[55%] animate-fadeIn"
        loading="lazy"
      />
    </section>
  );
};

export default CountdownSection;