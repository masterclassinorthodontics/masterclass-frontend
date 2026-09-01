import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import gridBg from "../assets/images/from-bg.png";
import submitbtn from "../assets/images/submit-participation-form.png";
import banner1 from "../assets/images/Spark-banner-img1.png";
import banner2 from "../assets/images/Spark-banner-img2.png";
import banner3 from "../assets/images/Spark-banner-img3.png";


const PHP_API_BASE_URL = import.meta.env.VITE_PHP_API_BASE_URL;


export default function SparkparticipationForm() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    orthodontistName: "",
    membershipNo: "",
    dob: "",
    mobile: "",
    email: ""
  });

   const [banner3Zoomed, setBanner3Zoomed] = useState(false);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        `${PHP_API_BASE_URL}/spark-participation.php`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );


      const data = await response.json();


      if (data.success) {

        navigate("/spark-thanks");

        setFormData({
          orthodontistName: "",
          membershipNo: "",
          dob: "",
          mobile: "",
          email: ""
        });

      } else {

        alert(
          "Error submitting form: " +
          (data.message || "Unknown error")
        );

      }

    } catch (err) {

      console.error(err);

      alert("Network error, please try again later");

    }

  };


  return (

    <>

      <Helmet>
        <title>
          SPARK ALIGNER PRACTICE PARTICIPATION FORM
        </title>
      </Helmet>


      <Navbar />

      {/* Full Width Images */}

<div
  className="w-full px-[8%] pt-[35%] lg:pt-[20%] xl:pt-[10%]"
   onClick={() => setBanner3Zoomed(false)}
  style={{
    backgroundImage: `linear-gradient(
      rgba(255,255,255,0.78),
      rgba(255,255,255,0.78)
    ), url(${gridBg})`,
    backgroundSize: "contain",
  }}
>
  
  {/* First two images side by side */}
  <div className="w-full flex gap-[2%]">

    <div className="w-1/2 flex justify-center">
      <img
        src={banner1}
        alt=""
        className="w-full h-auto block"
        loading="lazy"
      />
    </div>

    <div className="w-1/2 flex justify-center">
      <img
        src={banner2}
        alt=""
        className="w-full h-auto block"
        loading="lazy"
      />
    </div>

  </div>


  {/* Third image */}
  <img
  src={banner3}
  alt=""
  onClick={(e) => {
    e.stopPropagation();
    setBanner3Zoomed(true);
  }}
  className={`w-full h-auto block mt-[2%] cursor-pointer transition-transform duration-300 ${
    banner3Zoomed ? "scale-120 lg:scale-100" : "scale-100"
  }`}
  loading="lazy"
/>

</div>



      <section
        className="min-h-screen bg-gray-100 px-6 py-[1%] lg:py-[1%]"
         onClick={() => setBanner3Zoomed(false)}
        style={{
          backgroundImage: `linear-gradient(
            rgba(255,255,255,0.78),
            rgba(255,255,255,0.78)
          ),url(${gridBg})`,

          backgroundSize: "contain",
        }}
      >


        <h6 className="text-center text-[#CDA448] text-[30px] font-medium leading-tight mb-12">

          SPARK ALIGNER <br />

          PRACTICE PARTICIPATION PROGRAM <br />

          FOR ORTHODONTISTS

        </h6>


        <form
          onSubmit={handleSubmit}
          className="max-w-5xl mx-auto space-y-6"
        >


          {/* Name of the Orthodontist */}

          <div className="space-y-2">

            <label className="block font-normal">

              Name of the Orthodontist -

            </label>


            <input
              name="orthodontistName"
              value={formData.orthodontistName}
              onChange={handleChange}
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
              value={formData.membershipNo}
              onChange={handleChange}
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
              value={formData.dob}
              onChange={handleChange}
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
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded bg-white"
              required
            />

          </div>



          {/* Email */}

          <div className="space-y-1">

            <label className="block font-normal">

              Email id -

            </label>


            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded bg-white"
              required
            />

          </div>



          {/* Declaration */}

          <label className="flex gap-3 items-start">

            <input
              type="checkbox"
              required
              className="mt-1"
            />


            <span>

              I am an Orthodontist registered under the Dental Council of
              India / National Dental Council.

            </span>

          </label>



          <label className="flex gap-3 items-start">

            <input
              type="checkbox"
              required
              className="mt-1"
            />


            <span>

              I declare that all the details provided in this form are
              accurate to the best of my knowledge and I understand that
              any concealment of information is considered unlawful with
              due legal implications.

            </span>

          </label>



          {/* Submit Button */}

          <button type="submit">

            <img
              src={submitbtn}
              className="lg:w-[30vw] sm:w-[60vw]"
              loading="lazy"
              alt="Submit Participation Form"
            />

          </button>


        </form>


      </section>


    </>

  );

}