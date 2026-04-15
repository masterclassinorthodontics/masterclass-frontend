import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import subartbg from "../assets/images/Subartboard.png";
import termspdf from "../assets/files/TERMS-AND-CONDITIONS-TRADE.pdf";
import downloadbtn from "../assets/images/Download-PDF-of-Company-Information.png";
import submitbtn from "../assets/images/Submit-Company-Information-Form.png";

const PHP_API_BASE_URL = import.meta.env.VITE_PHP_API_BASE_URL;

export default function TradeForm() {
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accepted) {
      alert("Please accept the terms and conditions");
      return;
    }

    const formData = new FormData(e.target);
    formData.append("terms_accepted", "1");

    try {
      const res = await fetch(
        `${PHP_API_BASE_URL}/trade-enrollment.php`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();

      if (data.success) {
        alert("Registration submitted successfully");
        e.target.reset();
        setAccepted(false);
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
      <title>TRADE REGISTRATION - Masterclass in Orthodontics</title>
    </Helmet>
      <Navbar />

      <section
        className="w-full min-h-screen flex justify-center py-[6%]"
        style={{
          backgroundImage: `linear-gradient(rgba(250, 250, 250, 0.5),rgba(253, 253, 253, 0.65)),url(${subartbg})`,
        }}
      >
        <div className="w-full max-w-5xl p-8">

          {/* Heading */}
          <h1 className="text-center text-4xl text-[#CDA448] font-base leading-18 mb-8">
            Registration Form<br />
            for<br />
            Enrollment to Trade Platform
          </h1>

          {/* FORM START */}
          <form className="max-w-5xl space-y-6 mb-12" onSubmit={handleSubmit}>

            {/* Form Fields */}
            <div>
              <label className="block text-sm font-base mb-1">
                Name of The Company / Dealer *
              </label>
              <input
                name="company_name"
                required
                className="input w-full bg-white border border-gray-300 py-2 px-4 text-left caret-black focus:outline-none focus:ring-2 focus:ring-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-base mb-1">
                GSTIN / UIN
              </label>
              <input
                name="gstin"
                className="input w-full bg-white border border-gray-300 py-2 px-4 text-left caret-black focus:outline-none focus:ring-2 focus:ring-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-base mb-1">
                Address of Communication *
              </label>
              <input
                name="address"
                required
                className="input w-full bg-white border border-gray-300 py-2 px-4 text-left caret-black focus:outline-none focus:ring-2 focus:ring-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-base mb-1">
                Email Address *
              </label>
              <input
                name="email"
                type="email"
                required
                className="input w-full bg-white border border-gray-300 py-2 px-4 text-left caret-black focus:outline-none focus:ring-2 focus:ring-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-base mb-1">
                Mobile Number (Whatsapp)
              </label>
              <input
                name="mobile"
                type="tel"
                className="input w-full bg-white border border-gray-300 py-2 px-4 text-left caret-black focus:outline-none focus:ring-2 focus:ring-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-base mb-1">
                Alternate Mobile / Landline Number *
              </label>
              <input
                name="alternate_contact"
                type="tel"
                required
                className="input w-full bg-white border border-gray-300 py-2 px-4 text-left caret-black focus:outline-none focus:ring-2 focus:ring-gray-700"
              />
            </div>

            {/* Terms Header + Download */}
            <div className="border border-gray-300 bg-white rounded px-8 mb-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                <h2 className="font-semibold">
                  Terms and Conditions of Receiving Company Information
                </h2>

                <a href={termspdf} download>
                  <img
                    src={downloadbtn}
                    alt="Download Terms"
                    className="w-100 h-1/4 cursor-pointer hover:scale-105 transition"
                  />
                </a>
              </div>
            </div>

            {/* Scrollable Terms Box — UNCHANGED */}
            <div className="border border-gray-300 bg-white rounded p-4 h-60 overflow-y-scroll text-sm text-gray-700 mb-4">
              <p>
                <b>These Terms and Conditions</b> govern the collection, use, and storage of company information provided to ECO Academy’s trade platform. By submitting your company information, you agree to these terms.
              </p>

              <p className="mt-4 font-bold">1. Information Collection</p>
              <ul className="list-disc pl-15 mt-4 space-y-2">
                <li>Company / Dealer Name</li>
                <li>Address</li>
                <li>Contact Details (Email ID & Phone Number)</li>
                <li>Business Registration Information (GSTIN / UIN)</li>
              </ul>

              <p className="mt-4 font-bold">2. Purpose of Data Collection</p>
              <p className="mt-4">The information collected is used for:</p>
              <ul className="list-disc pl-15 mt-4 space-y-2">
                <li>Facilitating trade and communication between businesses</li>
                <li>Providing tailored services and support</li>
                <li>Analysing market trends and needs</li>
              </ul>

              <p className="mt-4 font-bold">3. User Consent</p>
              <p className="mt-4">
                By providing your company information, you consent to the collection and use of your data as outlined in these Terms and Conditions.
              </p>

              <p className="mt-4 font-bold">4. Data Usage</p>
              <p className="mt-2">
                ECO Academy shall not share your data with third-party partners for any of the following reasons:
              </p>
              <ul className="list-disc pl-15 mt-4 space-y-2">
                <li>Service enhancement</li>
                <li>Market research</li>
                <li>Legal compliance</li>
              </ul>
              <p className="mt-2">
                This data is only to be used for internal communications between ECO Academy and the company.
              </p>

              <p className="mt-4 font-bold">5. Data Security</p>
              <p className="mt-4">
                We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure.
              </p>

              <p className="mt-4 font-bold">6. User Rights</p>
              <p className="mt-4">You have the right to:</p>
              <ul className="list-disc pl-15 mt-4 space-y-2">
                <li>Access your data</li>
                <li>Request corrections to your data</li>
                <li>Request deletion of your data</li>
              </ul>

              <p className="mt-4 font-bold">7. Compliance</p>
              <p className="mt-2">
                ECO Academy complies with all relevant data protection laws and regulations under the Government of India.
              </p>

              <p className="mt-4 font-bold">8. Amendments</p>
              <p className="mt-4">
                These Terms and Conditions may be updated periodically. Users will be notified of significant changes through email or platform notifications.
              </p>

              <p className="mt-4 font-bold">9. Contact Information</p>
              <p className="mt-4">
                For any questions or concerns regarding these Terms and Conditions, please contact us at:<br />
                <b>masterclass.trade2025@gmail.com</b>
              </p>
            </div>

            {/* Accept Checkbox */}
            <div className="flex items-center gap-2 mb-6">
              <input
                id="termsAccepted"
                type="checkbox"
                name="terms"
                checked={accepted}
                onChange={() => setAccepted(!accepted)}
              />
              <label htmlFor="termsAccepted" className="text-sm">
                I hereby accept the terms and conditions of receiving company information
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <button
                type="submit"
                disabled={!accepted}
                className={`${accepted ? "" : "opacity-50 cursor-not-allowed"}`}
              >
                <img
                  src={submitbtn}
                  alt="Submit Registration"
                  className="w-1/2 cursor-pointer hover:scale-105 transition"
                />
              </button>
            </div>

          </form>
          {/* FORM END */}

        </div>
      </section>

      <Footer />
    </>
  );
}
