import { useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import pagebg from "../assets/images/BG.jpg";
import signInImg from "../assets/images/sign-In.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PasswordLogin = () => {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
  setError("");

  if (password === "MUPFAC100") {
    window.location.href =
      "/masterclass-faculty/";
  } else {
    setError("Incorrect password. Try again.");
    setPassword("");
  }
};


  return (
    <>
    <Helmet>
      <title>APPLY FOR FACULTY AT MASTERCLASS UNIVERSITY - Masterclass in Orthodontics</title>
    </Helmet>
    <Navbar/>
    <div
      className="
        min-h-screen w-full
        flex items-center justify-center
        bg-cover bg-center bg-no-repeat
        px-4
      "
      style={{ backgroundImage: `url(${pagebg})` }}
    >
      {/* Glass Card */}
      <div
        className="
          w-full max-w-[600px]
          text-center font-telegraf
          rounded-[20px]
          p-10 md:p-16
        "
      >
        <h2 className="text-2xl md:text-3xl text-gray-800 mb-10 font-normal">
          Enter Password
        </h2>

        {/* Password Field */}
        <div className="relative mb-8">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full px-6 py-5 pr-14
              rounded-full text-[19px]
              outline-none bg-white text-gray-800
              shadow-[inset_2px_2px_8px_rgba(0,0,0,0.15),inset_-2px_-2px_8px_rgba(255,255,255,0.8)]
            "
          />

          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-xl text-gray-600"
          >
            {show ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Login Image Button */}
        <img
          src={signInImg}
          alt="Sign In"
          onClick={handleLogin}
          className="
            mx-auto w-[80%] h-[120px]
            object-contain cursor-pointer
            rounded-full
          "
        />

        {/* Error */}
        {error && (
          <p className="mt-4 text-red-500 text-sm">
            {error}
          </p>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PasswordLogin;
