import topImg from "../../assets/images/venue-bttn.png";
import mapBg from "../../assets/images/background-solid.png"
import bothbg from "../../assets/images/both-side-gradient.png"

const ContactSection = () => {
  return (
    <section
      className="w-full py-16 flex flex-col items-center gap-12"
      style={{
        backgroundImage:
          `url(${bothbg})`,
        backgroundPosition: "top 120px",
      }}
    >
      {/* Top Center Image */}
      <img
        src={topImg}
        alt="Top Image"
        className="w-[75%] sm:w-[75%] md:w-[65%] lg:w-[55%] mx-auto"
        loading="lazy"
      />

      {/* Two Column Layout */}
      <div className="w-full max-w-[85vw] px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT SIDE */}
        <div className="space-y-8 text-left mt-[15%]">

          <div className="space-y-2">
            <h4 className="font-bold text-lg">Event Venue-</h4>
            <h3 className="text-2xl font-bold">Vivanta Bengaluru</h3>
            <p className="text-gray-700">
              (66, Residency Rd, Ashok Nagar, Bengaluru, Karnataka - 560025)
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold">Contact us at-</h3>

            <p>
              <span className="font-semibold">Email ID:</span>{" "}
              <a
                href="mailto:ecorthacademy@gmail.com"
                className="text-gray-700 hover:underline"
              >
                ecorthacademy@gmail.com
              </a>
              ,{" "}
              <a
                href="mailto:reg.masterclass@gmail.com"
                className="text-gray-700 hover:underline"
              >
                reg.masterclass@gmail.com
              </a>
            </p>

            <p>
              <span className="font-semibold">Phone No:</span>{" "}
              <a
                href="tel:+918282965779"
                className="text-gray-700 hover:underline"
              >
                +91-8282965779
              </a>
              ,{" "}
              <a
                href="tel:+919330153855"
                className="text-gray-700 hover:underline"
              >
                +91-9330153855
              </a>
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div
          className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg bg-cover bg-center flex items-center justify-center p-6"
          style={{
            backgroundImage:
              `url(${mapBg})`
          }}
        >
          <iframe
            title="Vivanta Bengaluru Location"
            src="https://www.google.com/maps?q=Vivanta+Bengaluru,+66,+Residency+Rd,+Ashok+Nagar,+Bengaluru,+Karnataka+560025&output=embed"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;