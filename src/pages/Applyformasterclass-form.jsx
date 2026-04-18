import { useState } from "react";
import { Helmet } from "react-helmet";
import downloadmou from "../assets/images/download-pdf-img.png";
import submitenrolbtn from "../assets/images/Submit_enrollment_form-btn.png";
import gridBg from "../assets/images/from-bg.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PHP_API_BASE_URL = import.meta.env.VITE_PHP_API_BASE_URL;

const LabelInput = ({ label, name, required = true, type = "text", value, onChange }) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-900 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value || ""}
      onChange={onChange}
      className="w-full bg-white border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-700"
      required={required}
    />
  </div>
);

export default function EnrollmentForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${PHP_API_BASE_URL}/enrollment-institutional.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Form Submitted Successfully!");
        setFormData({}); // Reset form
      } else {
        alert("Error submitting form: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("Network error, please try again later");
    }
  };

  return (
    <>
    <Helmet>
      <title>APPLY FOR MASTERCLASS UNIVERSITY PROGRAM - Masterclass in Orthodontics</title>
    </Helmet>
      <Navbar />
      <section
        className="min-h-screen bg-gray-100 px-6 py-[30%] lg:py-[10%]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.78)),url(${gridBg})`,
          backgroundSize: "contain",
        }}
      >
        <h3 className="text-center text-[40px] text-[#CDA448] font-base leading-base mb-12">
          Enrollment Form (Institutional)<br />
          for<br />
          Masterclass University Program
        </h3>

        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-6">
          {/* Full width fields */}
          <LabelInput label="Name of the Dental College" name="college_name" value={formData.college_name} onChange={handleChange} />
          <LabelInput label="Name of the University under which it is affiliated" name="university_name" value={formData.university_name} onChange={handleChange} />
          <LabelInput label="Address of communication of the dental college" name="address" value={formData.address} onChange={handleChange} />

          {/* City / State / Pin */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LabelInput label="City" name="city" value={formData.city} onChange={handleChange} />
            <LabelInput label="State" name="state" value={formData.state} onChange={handleChange} />
            <LabelInput label="Pin No" name="pin" value={formData.pin} onChange={handleChange} />
          </div>

          {/* Email */}
          <LabelInput label="Official Email ID of the College" name="college_email" type="email" value={formData.college_email} onChange={handleChange} />

          {/* Contact Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LabelInput label="Contact Details (Mobile No)" name="mobile" value={formData.mobile} onChange={handleChange} />
            <LabelInput label="Alternate Contact Details (Landline No)" name="landline" required={false} value={formData.landline} onChange={handleChange} />
          </div>

          {/* HOD Details */}
          <LabelInput label="Name of the Head of the Department of Orthodontics and Dento-facial Orthopedics" name="hod_name" value={formData.hod_name} onChange={handleChange} />
          <LabelInput label="Official Email ID of the Head of the Department of Orthodontics and Dento-facial Orthopedics" name="hod_email" type="email" value={formData.hod_email} onChange={handleChange} />
          <LabelInput label="Official Contact No (Mobile) of the Head of the Department of Orthodontics and Dento-facial Orthopedics" name="hod_mobile" value={formData.hod_mobile} onChange={handleChange} />

          {/* MOU Box */}
          <div className="bg-white h-[15vh] flex justify-between items-center px-6 rounded shadow">
            <strong className="text-lg">Memorandum of Understanding (MOU) Details</strong>
            <a href="/files/MOU-SAMPLE-FOR-APPROVAL.docx" download> 
              <img src={downloadmou} alt="Download MOU" className="w-100 cursor-pointer" loading="lazy" />
            </a>
          </div>

          {/* ---TERMS CONTENT--- */}
          <div className="bg-white h-[45vh] overflow-y-scroll p-6 shadow rounded text-sm">
            <h2 className="font-bold text-lg">MEMORANDUM OF UNDERSTANDING (MOU)</h2>
            <p className="text-lg">between</p>
            <h2 className="font-bold text-lg">ECO ACADEMY (Masterclass in Orthodontics, India), Kolkata, West Bengal, India</h2>
            <p className="text-lg">and</p>
            <h2 className="font-bold text-lg">XXXXX Dental College and Hospital, XXXX, XXXXX, India</h2><br/>
            <p className="text-lg">This Memorandum of Understanding (hereinafter referred to as "MOU") is entered into on this ____ day of XXXX, 2025 by and between:</p><br/>
            <h2 className="font-bold text-lg">1. ECO Academy (Masterclass in Orthodontics, India)</h2>
            <p className="text-lg">Represented by Dr. Abhisek Ghosh (Authorised Signatory, Partner) and Dr. Adith Venugopal (Partner), hereinafter referred to as "ECO Academy."</p><br/>
            <h2 className="font-bold text-lg">2. XXXXX Dental College and Hospital, XXXX</h2>
            <p className="text-lg">Represented by Dr. XXXX, Dean and Head, Department of Orthodontics and Dento-facial Orthopaedics, XXXXX Dental College and Hospital, hereinafter referred to as “XXXX Dental College and Hospital”.</p><br/>
            <p className="text-lg">WHEREAS, ECO Academy is an educational organization based in Kolkata, West Bengal, India, registered as a commercial school (non-technical) (C.E No – 002784018075 – KMC, GSTIN -19AAKFE1375Q1ZQ), aimed at promoting excellence in clinical orthodontics through its Masterclass online and offline educational programs;</p><br/>
            <p className="text-lg">AND WHEREAS, XXXXX Dental College & Hospital, under XXXXX Institute of Higher Education and Research, is a premier institution dedicated to providing accessible, affordable, and high-quality dental education and oral health care. Established in XXXX, it offers excellent infrastructure, state-of-the-art facilities, and a renowned faculty.</p><br/>
            <p className="text-lg">The college's mission is to establish itself as a leading dental school, set professional practice standards, and nurture graduates with human dignity and values.</p><br/>
            <p className="text-lg">(The qualified students and staff of XXXXX Dental College and Hospital in this MOU refer to postgraduate students of Masters in Dental Surgery (M.D.S) in Orthodontics and postgraduate teaching faculty of Masters in Dental Surgery (M.D.S) in Orthodontics only.)</p><br/>
            <p className="text-lg">AND WHEREAS, both parties desire to collaborate and promote high-quality orthodontic education programs across India and internationally;</p><br/>
            <p className="text-lg"><span className="font-bold">NOW, THEREFORE, </span>the Parties hereby agree as follows:</p><br/>
            <h2 className="font-bold text-lg">1. Purpose of the MOU</h2><br/>
            <p className="text-lg">As part of ECO Academy’s continued efforts towards delivering quality educational content and promoting orthodontic excellence, this MOU outlines a collaborative framework between ECO Academy and XXXXX Dental College and Hospital to develop and promote educational and training programs on contemporary orthodontics.</p><br/>
            <p className="text-lg"><span className="font-bold">1.1</span> – The collaboration would facilitate mutual exchange of ideas and discussions on the latest updates in orthodontics through online portal-based lectures and discussions, which will be free for students and staff of institutes officially collaborating with ECO Academy through this MOU.</p><br/>
            <p className="text-lg"><span className="font-bold">1.2</span> – ECO Academy would hold study clubs in the form of online scientific sessions by national and international faculty at defined intervals. These include research and clinical discussions on recent advances in orthodontics, free for students and staff of collaborative institutes.</p><br/>
            <p className="text-lg"><span className="font-bold">1.3</span> – ECO Academy could propose collaborations with XXXXX Dental College and Hospital to hold various offline scientific sessions such as “The Masterclass” – clinical workshops or symposiums, subject to mutual agreement.</p><br/>
            <p className="text-lg"><span className="font-bold">1.4</span> – The qualified students and staff of XXXXX Dental College and Hospital can register for any offline sessions held anywhere in India at discounted rates. The discount amount shall be decided solely by ECO Academy.</p><br/>
            <p className="text-lg"><span className="font-bold">1.5</span> – The collaboration would also support funding for research projects (grants) and professional welfare aids for student development.</p><br/>
            <h2 className="text-lg font-bold">2. Roles and Responsibilities</h2><br/>
            <h2 className="text-lg font-bold">A. Responsibilities of ECO Academy:</h2><br/>
            <p className="text-lg"><span className="font-bold">2.1</span> – ECO Academy will provide faculty, educational content, and course materials for every online session, ensuring they align with the latest standards. This will be free for all qualified students and faculty.</p><br/>
            <h2 className="text-lg font-bold">B. Responsibilities of XXXXX Dental College and Hospital:</h2><br/>
            <p className="text-lg"><span className="font-bold">2.2</span> – XXXXX Dental College and Hospital will support ECO Academy by promoting the Masterclass series within its institution to qualified students and faculty.</p><br/>
            <p className="text-lg"><span className="font-bold">2.3</span> – The College will provide insights and ensure that content remains aligned with scientific advancements.</p><br/>
            <h2 className="text-lg font-bold">C. Collaboration on Research and Development:</h2><br/>
            <p className="text-lg"><span className="font-bold">2.4</span> – Any joint research or intellectual property (IP) created shall credit both parties, in compliance with Indian IP laws.</p><br/>
            <h2 className="text-lg font-bold">3. Intellectual Property Rights</h2><br/>
            <p className="text-lg"><span className="font-bold">3.1</span> – ECO Academy retains rights over all its independently created intellectual property, lectures, and materials as per the Indian Copyright Act, 1957.</p><br/>
            <p className="text-lg"><span className="font-bold">3.2</span> – Any patentable discoveries shall acknowledge contributions of both parties under the Indian Patent Act, 1970.</p><br/>
            <p className="text-lg"><span className="font-bold">3.3</span> – ECO Academy prohibits the recording or reproduction of its lecture materials; violations will be considered a breach of this MOU.</p><br/>
            <h2 className="text-lg font-bold">4. Financial Terms</h2><br/>
            <p className="text-lg"><span font-bold>4.1</span> – ECO Academy shall conduct free online programs for students and staff of XXXXX Dental College and Hospital, including sessions by both national and international faculties.</p><br/>
            <p className="text-lg"><span className="font-bold">4.2</span> – ECO Academy shall offer discounted registration rates for offline programs and workshops within India. Discounts are at ECO Academy’s discretion. International sessions are exempted.</p><br/>
            <p className="text-lg"><span className="font-bold">4.3</span> – ECO Academy shall not demand financial remuneration for online lectures. Sponsorships may be requested but remain optional.</p><br/>
            <p className="text-lg"><span className="font-bold">4.4</span> – ECO Academy may sponsor orthodontic research proposals from the College after due review.</p><br/>
            <h2 className="text-lg font-bold">5. Confidentiality and Non-Disclosure</h2><br/>
            <p className="text-lg"><span className="font-bold">5.1</span> – Both Parties agree to maintain confidentiality of shared information as per Section 27 of the Indian Contract Act, 1872.</p><br/>
            <p className="text-lg"><span className="font-bold">5.2</span> – Both parties may publish collaborations and event images on their official websites and social media.</p><br/>
            <p className="text-lg"><span className="font-bold">5.3</span> – Neither party shall use the other’s name or image without written consent, except as per Clause 5.2.</p><br/>
            <p className="text-lg"><span className="font-bold">5.4</span> – ECO Academy shall provide one login access portal per college with a single IP address.</p><br/>
            <h2 className="font-bold text-lg">6. Termination of the MOU</h2><br/>
            <p className="text-lg"><span className="font-bold">6.1</span>– Either Party may terminate the MOU with sixty (60) days’ written notice.</p><br/>
            <p className="text-lg"><span className="font-bold">6.2</span>– Upon termination, ECO Academy shall discontinue access for students and staff. Ongoing research projects will be concluded professionally.</p><br/>
            <p className="text-lg"><span className="font-bold">6.3</span> – Both parties agree not to make defamatory statements about each other during or after collaboration.</p><br/>
            <h2 className="font-bold text-lg">7. Compliance with Applicable Laws</h2><br/>
            <p className="text-lg"><span className="font-bold">7.1</span> – This MOU shall be governed by the Indian Contract Act, 1872, the Indian Patent Act, 1970, and other relevant Indian regulations.</p><br/>
            <h2 className="text-lg font-bold">8. Dispute Resolution</h2><br/>
            <p className="text-lg"><span className="font-bold">8.1</span> – Any disputes shall first be resolved amicably.</p><br/>
            <p className="text-lg font-bold"><span>8.2</span> – If unresolved, disputes shall be referred to arbitration in Kolkata, West Bengal, under the Arbitration and Conciliation Act, 1996.</p><br/>
            <p className="text-lg"><span className="font-bold">8.3</span> – The courts of Kolkata, West Bengal, shall have exclusive jurisdiction for unresolved matters.</p><br/><br/>
            <h2 className="font-bold text-lg">9. Amendments and Notices</h2><br/>
            <p className="text-lg"><span className="font-bold">9.1</span> – This MOU may be amended only by a written document signed by both parties.</p><br/>
            <p className="text-lg"><span className="font-bold">9.2</span> – Notices or communications shall be delivered to the official addresses of both parties.</p><br/>
            <p className="text-lg"><span className="font-bold">ECO ACADEMY</span> – c/o Dr. Abhisek Ghosh, 27, Janak Road (Behind Lake Mall), Kolkata – 700029, West Bengal, India</p>
            <p className="text-lg"><span className="font-bold">XXXXX Dental College and Hospital</span> – Address: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p><br/>
            <h2 className="text-lg font-bold">10. Signatures</h2><br/>
            <h2 className="text-lg font-bold">ECO ACADEMY</h2>
            <p className="text-lg">Authorized Signatory: __________________</p>
            <p className="text-lg">Date: __________________</p>
            <p className="text-lg">Witness 1: ___________________ Date: ________________</p>
            <p className="text-lg">Witness 2: ___________________ Date: ________________</p><br/>
            <h2 className="text-lg font-bold">XXXXX DENTAL COLLEGE AND HOSPITAL</h2>
            <p className="text-lg">Authorized Signatory: __________________</p>
            <p className="text-lg">Date: __________________</p>
            <p className="text-lg">Witness 1: ___________________ Date: ________________</p>
            <p className="text-lg">Witness 2: ___________________ Date: ________________</p><br/>
          </div>

          {/* Agreement Checkboxes */}
          <div className="space-y-4">
            <label className="flex gap-3 items-start">
              <input type="checkbox" required className="mt-1" />
              <span>I hereby accept that I have understood the Terms and Conditions of the MOU before submitting the request to register for the same.</span>
            </label>
            <label className="flex gap-3 items-start">
              <input type="checkbox" required className="mt-1" />
              <span>I hereby accept that mere submission of the registration form does not make the students and staff eligible to access the online program.</span>
            </label>
            <label className="flex gap-3 items-start">
              <input type="checkbox" required className="mt-1" />
              <span>I accept that access will be provided only after assessment and MOU signature.</span>
            </label>
            <label className="flex gap-3 items-start">
              <input type="checkbox" required className="mt-1" />
              <span>I shall respect the decision and confidentiality of the eligibility assessment.</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-start pt-8">
            <button type="submit">
              <img src={submitenrolbtn} alt="Submit Enrollment Form" className="mx-auto w-[30vw] cursor-pointer" loading="lazy" />
            </button>
          </div>
        </form>
      </section>
      <Footer/>
    </>
  );
}
