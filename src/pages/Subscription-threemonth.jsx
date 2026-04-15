import Navbar from "../components/Navbar";
import logo from "../assets/images/masterclass-logo.png";
import submitBtn from "../assets/images/submit-button.png";
import bg from "../assets/images/from-bg.png"
import Footer from "../components/Footer";
import termsmuppdf from "../assets/files/TERMS-AND-CONDITIONS-OF-MUP-SUBSCRIPTION.pdf"
import { Helmet } from "react-helmet";
import { useState } from "react";

const subscriptionthreemonth = () =>{
  const [loading, setLoading] = useState(false);

    return(
        <>
        <Helmet>
          <title>QUARTERLY SUBSCRIPTION FORM - Masterclass in Orthodontics</title>
        </Helmet>
    <Navbar/>
    <div className="min-h-screen py-32 flex flex-col items-center"
        style={{
            backgroundImage:`linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.78)),url(${bg})`
        }}
        >
          {/* Top Image */}
          <img src={logo} alt="Logo" className="w-1/3 mb-4" />
    
          <h1 className="text-xl font-semibold text-center">
            ECO ACADEMY INITIATIVE
          </h1>
    
          <h2 className="text-4xl font-bold text-gray-500 mt-2 text-center">
            Quarterly Subscription Form
          </h2>
    
          <p className="italic text-center text-gray-500">
            Kindly fill up the form
          </p>
    
          {/* Form */}
        <form
          className="w-[80vw] max-w-6xl mt-10 space-y-6"
          onSubmit={async (e) => {
            e.preventDefault();

            if (loading) return;

            const gender = e.target.gender?.value;

            if (!gender) {
              alert("Please select gender");
              return;
            }

            const formData = {
              fullName: e.target.fullName.value,
              gender: gender,
              membershipNo: e.target.membershipNo.value,
              orthodontistConfirm:
                e.target.orthodontistConfirm?.checked || false,
              email: e.target.email.value,
              mobile: e.target.mobile.value,
            };

            try {
              setLoading(true);

              const res = await fetch(
                "https://powderblue-wasp-496475.hostingersite.com/php_php/subscription_three.php",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData),
                }
              );

              // 🔥 DEBUG START
              const text = await res.text();
              console.log("========= DEBUG RESPONSE =========");
              console.log(text);
              console.log("==================================");

              let data;

              try {
                data = JSON.parse(text);
              } catch (err) {
                console.error("❌ JSON Parse Error:", err);
                alert("Server is not returning valid JSON. Check console.");
                return;
              }
              // 🔥 DEBUG END

              if (data.status === "success") {
                window.location.href = `https://powderblue-wasp-496475.hostingersite.com/php_php/subscription_three.php?id=${data.id}`;
              } else {
                alert(data.message || "Submission failed. Please try again.");
              }
            } catch (error) {
              console.error("❌ FETCH ERROR:", error);
              alert("Server error. Please try again later.");
            } finally {
              setLoading(false);
            }
          }}
        >
            {/* Full Name */}
            <div className="space-y-1">
              <label className="block font-normal">
                Full Name of the Participant
              </label>
              <input
                name="fullName"
                className="w-full border border-gray-300 p-2 rounded bg-white"
                required
              />
            </div>
    
            {/* Gender */}
            <div className="space-y-2">
              <label className="block font-normal">Gender</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    required
                  />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                  />
                  Female
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                  />
                  Others
                </label>
              </div>
    
              {/* Instruction below gender */}
              <p className="italic text-sm text-gray-600">
                (Pick tick in relevant box)
              </p>
            </div>
    
            {/* Membership */}
            <div className="space-y-1">
              <label className="block font-normal">
                Membership Number of IOS (LM/SLM)
              </label>
              <input
                name="membershipNo"
                className="w-full border border-gray-300 p-2 rounded bg-white"
              />
            </div>
    
            {/* Note above orthodontist checkbox */}
            <p className="font-normal">
              For Non - IOS Members only (Please Tick in the relevant box)
            </p>
    
            {/* Orthodontist Checkbox */}
            <div className="space-y-1">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="orthodontistConfirm"
                  className="mt-1"
                />
                <span>
                  I am an Orthodontist with qualifications accepted under the
                  regulation of Dental Council of India (Non-Orthodontist are not
                  allowed to be a part of the course)
                </span>
              </label>
            </div>
    
            {/* Email */}
            <div className="space-y-1">
              <label className="block font-normal">Email ID</label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded bg-white"
                required
              />
            </div>
    
            {/* Mobile */}
            <div className="space-y-1">
              <label className="block font-normal">Mobile Number(Whatsapp Number)</label>
              <input
                type="tel"
                name="mobile"
                className="w-full border border-gray-300 p-2 rounded bg-white"
                required
              />
            </div>
    
            {/* Whatsapp */}
            {/* <div className="space-y-1">
              <label className="block font-semibold">Whatsapp Number</label>
              <input
                type="tel"
                name="whatsapp"
                className="w-full border border-gray-300 p-2 rounded bg-white"
              />
            </div> */}
    
            {/* Diet */}
            {/* <div className="space-y-2">
              <label className="block font-semibold">Preference of Diet</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="diet"
                    value="Veg"
                  />
                  Veg
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="diet"
                    value="Non-Veg"
                  />
                  Non-Veg
                </label>
              </div>
            </div> */}

          {/* Terms */}
          <div className="space-y-1">
            <a
              href={termsmuppdf}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here to read the Terms and Conditions before submitting the form
            </a>
          </div>

          <div className="space-y-1">
            <label className="flex items-start gap-2">
              <input type="checkbox" name="pdfcheck" required className="mt-1" />
              <span>
                Please tick if you have read the Terms and Conditions properly
              </span>
            </label>
          </div>
    
            {/* Declaration */}
            <div className="space-y-1">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="declaration"
                  required
                  className="mt-1"
                />
                <span>
                  I certify that the above information are true to the best of my
                  knowledge and I understand that I subject myself to disciplinary
                  action in the event that the above fact are found to be falsified
                </span>
              </label>
            </div>
    
            {/* Submit */}
            <button type="submit" className="pt-6">
              <img
                src={submitBtn}
                alt="Submit"
                className="w-1/2 hover:scale-105 transition"
              />
            </button>
          </form>
        </div>
        <Footer/>  
    </>
    )
}

export default subscriptionthreemonth;