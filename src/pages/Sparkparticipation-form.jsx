import {Helmet} from "react-helmet";
import Navbar from "../components/Navbar";
import gridBg from "../assets/images/from-bg.png";
import submitbtn from "../assets/images/submit-participation-form.png";

export default function SparkparticipationForm() {
  return (
    <>
    <Helmet>
      <title>SPARK ALIGNER PRACTICE PARTICIPATION FORM</title>
    </Helmet>
      <Navbar />

      <section
        className="min-h-screen bg-gray-100 px-6 py-[40%] lg:py-[10%]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.78),
          rgba(255,255,255,0.78)),url(${gridBg})`,
          backgroundSize: "contain",
        }}
      >
        <h6 className="text-center text-[#CDA448] text-[30px] font-medium leading-tight mb-12">
          SPARK ALIGNER <br />
          PRACTICE PARTICIPATION PROGRAM <br />
          FOR ORTHODONTISTS
        </h6>

        <form className="max-w-5xl mx-auto space-y-6">

            {/* Name of the Orthodontist */}
            <div className="space-y-2">
                <label classname="block font-normal">
                    Name of the Orthodontist -
                </label>
                <input
                    name="orthodontistName"
                    className="w-full border border-gray-300 p-2 rounded bg-white"
                    required
                />
            </div>

            {/* IOS LM/SLM NO */}
            <div className="space-y-1">
                <label className="block font-normal">
                    IOS LM / SLM NO -
                </label>
                <input
                    name="membershipNo"
                    className="w-full border border-gray-300 p-2 rounded bg-white"
                    required
                />
            </div>

            {/* Date of Birth */}
            <div className="space-y-1">
                <label className="block font-normal">
                    Date of Birth -
                </label>
                <input
                    name="dob"
                    type="date"
                    className="w-full border border-gray-300 p-2 rounded bg-white"
                    required
                />
            </div>

            {/* Mobile Number */}
            <div className="space-y-1">
                <label className="block font-normal">
                    Mobile Number -
                </label>
                <input
                    name="mobile"
                    type="tel"
                    className="w-full border border-gray-300 p-2 rounded bg-white"
                    required
                />
            </div>

            {/* Email id */}
            <div className="space-y-1">
                <label className="block font-normal">
                    Email id -
                </label>
                <input
                    name="email"
                    type="email"
                    className="w-full border border-gray-300 p-2 rounded bg-white"
                    required
                />
            </div>

          
          <label className="flex gap-3 items-start">
            <input type="checkbox" required className="mt-1" />
            <span>
              I am an Orthodontist registered under the Dental Council of India / National Dental Council.
            </span>
          </label>

          <label className="flex gap-3 items-start">
            <input type="checkbox" required className="mt-1" />
            <span>
              I declare that all the details provided in this form are accurate to the best of my knowledge and I understand that any concealment of information is considered unlawful with due legal implications.
            </span>
          </label>

          <button type="submit">
            <img src={submitbtn} className="lg:w-[30vw] sm:w-[60vw]" loading="lazy" />
          </button>

        </form>
      </section>
    </>
  );

}