import { useState } from "react";
import { Helmet } from "react-helmet";
import downloadmou from "../assets/images/download-pdf-img.png";
import submitenrolbtn from "../assets/images/Submit_enrollment_form-btn.png";
import gridBg from "../assets/images/from-bg.png";
import Navbar from "../components/Navbar";


const PHP_API_BASE_URL = import.meta.env.VITE_PHP_API_BASE_URL;

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Somalia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

/* Reusable Label + Input */
const LabelInput = ({
  label,
  name,
  required = true,
  type = "text",
  onChange,
}) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-900 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      onChange={onChange}
      className="w-full bg-white border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-700"
    />
  </div>
);

export default function FinancialdetailForm() {

const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form); // IMPORTANT: FormData from the form

  try {
    const res = await fetch(`${PHP_API_BASE_URL}/faculty-financial-details.php`, {
      method: "POST",
      body: formData, // multipart/form-data automatically set
    });

    const data = await res.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      form.reset(); // reset all fields
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
        <title>FINANCIAL DETAILS FORM FACULTY OF MASTERCLASS UNIVERSITY - Masterclass in Orthodontics</title>
      </Helmet>
      <Navbar />

      <section
        className="min-h-screen bg-gray-100 px-6 py-[30%] lg:py-[10%]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.78)),url(${gridBg})`,
          backgroundSize: "contain",
        }}
      >
        {/* Heading */}
        <h1 className="text-center text-[#CDA448] text-[36px] font-medium leading-relaxxed mb-12">
          Financial Details Form
          <br />
          Faculty
          <br />
          of
          <br/>
          Masterclass University Program
        </h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-5xl mx-auto space-y-6"
        >
          {/* ================= INSTITUTION DETAILS ================= */}


          {/* ================= FACULTY & BANK DETAILS ================= */}

          {/* <h2 className="text-center text-2xl font-bold mt-16 mb-8">
            Faculty & Bank Details
          </h2> */}

          <LabelInput
            label="Name of the Faculty Member"
            name="faculty_name"
          />

          <LabelInput
            label="PAN Card Number"
            name="pan_number"
          />

          <LabelInput
            label="Address of Communication (House Number / Street Name)"
            name="faculty_address"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LabelInput label="City" name="faculty_city"/>
            <LabelInput label="State" name="faculty_state"/>

            {/* Country Dropdown */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                required
                className="w-full bg-white border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-700"
              >
                <option value="">Select Country</option>
                {countries.map((country)=>(
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <LabelInput
            label="Pincode"
            name="faculty_pincode"
          />

          <LabelInput
            label="Bank Account Name (Beneficiary)"
            name="bank_account_name"
          />

          <LabelInput
            label="Bank Account Number (Savings)"
            name="bank_account_number"
          />

          <LabelInput
            label="Bank Name"
            name="bank_name"
          />

          <LabelInput
            label="Bank Address"
            name="bank_address"
          />

          <LabelInput
            label="RTGS / NEFT (IFSC Code)"
            name="ifsc_code"
          />

          {/* ================= MOU DOWNLOAD ================= */}

          <div className="bg-white h-[15vh] flex justify-between items-center px-6 rounded shadow">
            <strong className="text-lg">
              Memorandum of Understanding (MOU) Details
            </strong>
            <a href="/files/MOU-SAMPLE-FOR-APPROVAL.docx" download>
              <img
                src={downloadmou}
                alt="Download MOU"
                className="w-100 cursor-pointer"
              />
            </a>
          </div>

          {/* ================= AGREEMENT TEXT ================= */}

          <div className="bg-white h-[45vh] overflow-y-scroll p-6 shadow rounded text-sm leading-relaxed">
            <h2 className="text-lg font-bold">1. Introduction:</h2>
            <p className="text-lg">These Terms and Conditions (“Terms”) govern the collection and use of bank account details provided by individuals (“you” or “your”) to ECO Academy (GSTIN-19AAKFE1375Q1ZQ) (“we,” “us,” or “our”). By providing your bank account details, you agree to comply with and be bound by these Terms.</p>
            <p><br/>
            <h2 className="text-lg font-bold">2. Purpose of Data Collection:</h2>
            <p className="text-lg">We collect your bank account details for the following purposes:</p>
            <div className="mx-10 text-lg">
            <li>To process payments and transactions related to our services.</li>
            <li>To facilitate refunds and chargebacks if necessary.</li>
            <li>To verify your identity and prevent fraud.</li>
            <li>To comply with legal, regulatory, and compliance requirements.</li><br/>
            </div>
            <h2 className="text-lg font-bold">3. Data Security:</h2>
            <p className="text-lg">We are committed to protecting your bank account details. We implement industry-standard security measures to safeguard your information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p><br/>
            <h2 className="text-lg font-bold">4. Data Sharing and Disclosure:</h2>
            <p className="text-lg">Your bank account details may be shared with:</p>
            <div className="mx-10 text-lg">
                <li>Trusted third-party service providers who assist us in processing payments and providing services to you. These parties are bound by confidentiality obligations.</li>
                <li>Regulatory authorities or law enforcement agencies as required by applicable law or in response to valid legal requests.</li>
            </div>
            <h2 className="text-lg font-bold">5. Your Rights:</h2>
            <p>You have the following rights regarding your bank account details:</p>
            <div className="mx-10">
              <li className="text-lg"><span className="font-bold">Access:</span>You may request a copy of the bank details we hold about you.</li>
              <li className="text-lg"><span className="font-bold">Correction:</span>You have the right to request correction of any inaccuracies.</li>
              <li className="text-lg"><span className="font-bold">Deletion:</span>You may request the deletion of your bank account details, subject to legal obligations.</li>
            </div><br/>
            <h2 className="text-lg font-bold">6. Data Retention:</h2>
            <p className="text-lg">We will retain your bank account details only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Once the retention period expires, we will securely delete or anonymize your information.</p><br/>
            <h2 className="text-lg font-bold">7. Consent:</h2>
            <p className="text-lg">By providing your bank account details, you consent to the collection, processing, and use of your information as described in these Terms. You may withdraw your consent at any time, subject to legal restrictions.</p><br/>
            <h2 className="text-lg font-bold">8. Changes to Terms:</h2>
            <p className="text-lg">We reserve the right to modify these Terms at any time. If we make significant changes, we will notify you via email or through our website. Continued provision of bank account details following such changes constitutes acceptance of the new Terms.</p><br/>
            <h2 className="text-lg font-bold">9. Contact Information:</h2>
            <p>ECO ACADEMY</p>
            <p>Partner: Dr. Abhisek Ghosh, Dr. Adith Venugopal</p>
            <p>GF - 27, Janak Road, Behind Lake Mall, Kolkata – 700029, India</p>
            <p>Mob: +91 933015355, +91 8697191291</p><br/>
            <h2 className="text-lg font-bold">10. Governing Law:</h2>
            <p className="text-lg">These Terms shall be governed by and construed in accordance with the laws of courts in Kolkata, West Bengal, India over any matters not resolved through arbitration.</p>

            
            </p>
          </div>

          {/* ================= CHECKBOXES ================= */}

          <div className="mt-4">
  <label className="flex items-start gap-3 cursor-pointer">
    <input
      type="checkbox"
      name="mou_accepted"
      value="1"
      required
      className="mt-1"
    />
    <span>
      I hereby accept the terms and conditions for collection of bank account details by ECO Academy (Masterclass University Program)
    </span>
  </label>
</div>


          <input type="hidden" name="mou_accepted" value="1" />

          {/* ================= SUBMIT BUTTON ================= */}

          <div className="text-start pt-8">
            <button type="submit">
              <img
                src={submitenrolbtn}
                alt="Submit Enrollment Form"
                className="mx-auto w-[30vw] cursor-pointer"
              />
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
