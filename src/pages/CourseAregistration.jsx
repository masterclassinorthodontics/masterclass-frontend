import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/masterclass-logo.png";
import submitBtn from "../assets/images/submit-button.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bg from "../assets/images/from-bg.png"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const CourseARegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    membershipNo: "",
    orthodontistConfirm: false,
    email: "",
    mobile: "",
    whatsapp: "",
    diet: "",
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.declaration) {
    alert("Please accept the declaration");
    return;
  }

  const payload = {
    course: "CourseA",
    ...formData,
  };

  const res = await fetch(`${API_BASE_URL}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  console.log("API response:", data);

  if (!res.ok || !data.registrationId) {
    alert("Registration failed");
    return;
  }

  navigate(`/invoice/${data.registrationId}`);
};

  return (
    <>
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

      <h2 className="text-2xl font-bold text-gray-500 mt-2 text-center">
        Registration Form for COURSE A Participants
      </h2>

      <p className="italic mt-2 text-center">
        Kindly fill up the form
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-[80vw] max-w-6xl mt-10 space-y-6"
      >
        {/* Full Name */}
        <div className="space-y-1">
          <label className="block font-semibold">
            Full Name of the Participant
          </label>
          <input
            name="fullName"
            className="w-full border border-gray-300 p-2 rounded bg-white"
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <label className="block font-semibold">Gender</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
              />
              Female
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Other"
                onChange={handleChange}
              />
              Others
            </label>
          </div>

          {/* Instruction below gender */}
          <p className="italic text-sm text-gray-600">
            (Pick Tick in Relevant box)
          </p>
        </div>

        {/* Membership */}
        <div className="space-y-1">
          <label className="block font-semibold">
            Membership Number of IOS (LM/SLM)
          </label>
          <input
            name="membershipNo"
            className="w-full border border-gray-300 p-2 rounded bg-white"
            onChange={handleChange}
          />
        </div>

        {/* Note above orthodontist checkbox */}
        <p className="font-semibold">
          For Non - IOS Members only (Please Take in the Relevant Box)
        </p>

        {/* Orthodontist Checkbox */}
        <div className="space-y-1">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              name="orthodontistConfirm"
              onChange={handleChange}
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
          <label className="block font-semibold">Email ID</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded bg-white"
            onChange={handleChange}
            required
          />
        </div>

        {/* Mobile */}
        <div className="space-y-1">
          <label className="block font-semibold">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            className="w-full border border-gray-300 p-2 rounded bg-white"
            onChange={handleChange}
            required
          />
        </div>

        {/* Whatsapp */}
        <div className="space-y-1">
          <label className="block font-semibold">Whatsapp Number</label>
          <input
            type="tel"
            name="whatsapp"
            className="w-full border border-gray-300 p-2 rounded bg-white"
            onChange={handleChange}
          />
        </div>

        {/* Diet */}
        <div className="space-y-2">
          <label className="block font-semibold">Preference of Diet</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="diet"
                value="Veg"
                onChange={handleChange}
              />
              Veg
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="diet"
                value="Non-Veg"
                onChange={handleChange}
              />
              Non-Veg
            </label>
          </div>
        </div>

        {/* Declaration */}
        <div className="space-y-1">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              name="declaration"
              onChange={handleChange}
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
  );
};

export default CourseARegistration;
