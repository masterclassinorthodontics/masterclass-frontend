import { useState, useEffect } from "react";
import bothbg from "../assets/images/both-side-gradient.png";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import bgsolid from "../assets/images/background-solid.png";
import Footer from "../components/Footer";


const PHP_API_BASE_URL = import.meta.env.VITE_PHP_API_BASE_URL;

const generateCaptcha = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let captcha = "";
  for (let i = 0; i < 5; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

export default function ContactpageSection() {
  const [captcha, setCaptcha] = useState("");

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);


  const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form); // captures all input values

  try {
    const res = await fetch(`${PHP_API_BASE_URL}/contact-form.php`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json(); // parse JSON response

    if (data.success) {
      alert("Form submitted successfully!");
      form.reset();
      setCaptcha(generateCaptcha()); // regenerate captcha
    } else {
      alert(data.message || "Submission failed");
    }
  } catch (err) {
    console.error(err);
    alert("Network error");
  }
};



  return (
    <>
      <Helmet>
        <title>CONTACT - Masterclass in Orthodontics</title>
      </Helmet>
      <Navbar />

      {/* CONTACT SECTION */}
      <section
        className="w-full py-20 md:py-32 lg:py-40"
        style={{
          backgroundImage:
            `url(${bothbg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT COLUMN */}
            <div className="mt-12">
              <h2 className="text-4xl font-bold mb-2">ECO ACADEMY</h2>

              <h3 className="text-2xl font-semibold mb-2">
                Masterclass in Orthodontics
              </h3>

              <div className="mb-6">
                <div className="w-72 h-[1px] bg-black mb-1"></div>
                <div className="w-72 h-[8px] bg-black"></div>
              </div>

              <p className="text-xl font-bold mb-4">Contact us at-</p>

              <p className="mb-3">
                <span className="font-semibold">Address: </span>
                GF - 27, Janak Road (Behind Lake Mall), Kolkata - 700029
              </p>

              <p className="mb-3">
                <span className="font-semibold">Email ID: </span>
                <a
                  href="mailto:reg.masterclass@gmail.com"
                  className="text-black hover:underline"
                >
                  reg.masterclass@gmail.com
                </a>
                ,{" "}
                <a
                  href="mailto:ecorthacademy@gmail.com"
                  className="text-black hover:underline"
                >
                  ecorthacademy@gmail.com
                </a>
              </p>

              <p>
                <span className="font-semibold">Phone No: </span>
                <a
                  href="tel:+919330153855"
                  className="text-black hover:underline"
                >
                  +91-9330153855
                </a>
                ,{" "}
                <a
                  href="tel:+918282965779"
                  className="text-black hover:underline"
                >
                  +91-8282965779
                </a>
              </p>
            </div>

            {/* RIGHT COLUMN – FORM (UNCHANGED LOGIC) */}
            <div
              className="border border-gray-200 rounded-xl p-6 sm:p-10 shadow-xl"
              style={{ backgroundImage: `url(${bgsolid})` }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="block font-semibold mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    required
                    className="w-full bg-white px-4 py-3"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold mb-1">
                      Email ID*
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-white px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">
                      Mobile Number*
                    </label>
                    <input
                      type="tel"
                      name="mobile_number"
                      required
                      className="w-full bg-white px-4 py-3"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold mb-1">
                      Whatsapp Number*
                    </label>
                    <input
                      type="tel"
                      name="whatsapp_number"
                      required
                      className="w-full bg-white px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">
                      Address of Communication*
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      className="w-full bg-white px-4 py-3"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full bg-white px-4 py-3"
                  ></textarea>
                </div>

                <div>
                  <label className="block font-semibold mb-1">
                    Please type the characters*
                  </label>
                  <input
                    type="text"
                    name="captcha"
                    required
                    className="w-full bg-white px-4 py-3"
                  />
                </div>

                <div className="relative font-mono tracking-widest text-lg select-none">
                  {captcha}
                  <input type="hidden" name="captcha_generated" value={captcha} />

                    <span
                      onClick={() => setCaptcha(generateCaptcha())}
                      className="
                      top-1/2
                      -translate-y-1/2
                      right-0
                      opacity-50
                      hover:opacity-100
                      cursor-pointer
                      text-xl
                      transition-opacity
                      "
                      title="Refresh captcha"
                    >
                      🗘
                    </span>
                </div>
                <button
                  type="submit"
                  className="
                    mt-6
                    px-10 py-3
                    border-4 border-black
                    rounded-xl
                    font-semibold
                    bg-transparent
                    cursor-pointer
                    transition
                    hover:shadow-xl
                  "
                >
                  SEND US
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FULL-WIDTH GOOGLE MAP */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps?q=Lake%20Mall%20Kolkata&output=embed"
          className="w-full h-[300px] md:h-[400px] border-0"
          loading="lazy"
        />
      </section>

      <Footer />
    </>
  );
}
