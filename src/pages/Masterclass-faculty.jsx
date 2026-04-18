import downloadpdf from "../assets/images/Download-PDF-btn.png";
import { Helmet } from "react-helmet";
import submitbtn from "../assets/images/Submit-Faculty-btn.png";
import gridBg from "../assets/images/from-bg.png";
import termsPdf from "../assets/files/Term-and-condition-faculty.pdf";
import Navbar from "../components/Navbar";

/* ---------------- API BASE ---------------- */
const PHP_API_BASE_URL = import.meta.env.VITE_PHP_API_BASE_URL;

/* ---------------- COUNTRIES ---------------- */
const countries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda",
  "Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain",
  "Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia",
  "Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso",
  "Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic",
  "Chad","Chile","China","Colombia","Comoros","Costa Rica","Croatia","Cuba","Cyprus",
  "Czech Republic","Denmark","Dominican Republic","Ecuador","Egypt","El Salvador",
  "Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany",
  "Ghana","Greece","Grenada","Guatemala","Guinea","Guyana","Haiti","Honduras",
  "Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
  "Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyzstan","Laos",
  "Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania",
  "Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta",
  "Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro",
  "Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands","New Zealand",
  "Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman",
  "Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland",
  "Portugal","Qatar","Romania","Russia","Rwanda","Saudi Arabia","Senegal","Serbia",
  "Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Somalia",
  "South Africa","South Korea","Spain","Sri Lanka","Sudan","Suriname","Sweden",
  "Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo",
  "Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine",
  "United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan",
  "Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];

/* ---------------- LABEL + INPUT ---------------- */
const LabelInput = ({ label, name, type = "text", required = true }) => (
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-900 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      className="w-full bg-white border border-gray-300 px-4 py-3 rounded
                 focus:outline-none focus:ring-2 focus:ring-gray-700"
    />
  </div>
);

export default function MasterclassFaculty() {

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form); // collects all inputs + files

    try {
      const response = await fetch(
        `${PHP_API_BASE_URL}/faculty-enrollment.php`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Application Submitted Successfully");
        form.reset();
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  };

  return (
    <>
    <Helmet>
      <title>APPLY FOR FACULTY AT MASTERCLASS UNIVERSITY - Masterclass in Orthodontics</title>
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
          Application Form for Enrollment as <br />
          Faculty <br />
          of <br />
          Masterclass University Program
        </h6>

        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-6">

          <LabelInput label="Name of the Faculty Member" name="faculty_name" />
          <LabelInput label="Name of the Dental College the Faculty Member is Associated with" name="dental_college" />
          <LabelInput label="Name of the University Under which the Dental College is Affiliated" name="university_affiliation" />
          <LabelInput label="Official Address of Communication (Address 1)" name="official_address" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LabelInput label="City" name="city" />
            <LabelInput label="State" name="state" />

            <div className="w-full">
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                required
                className="w-full bg-white border border-gray-300 px-4 py-3 rounded
                           focus:outline-none focus:ring-2 focus:ring-gray-700"
              >
                <option value="">Select Country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <LabelInput label="Pincode" name="pincode" />
          <LabelInput label="Email Address" name="email" type="email" />
          <LabelInput label="Contact Details (Mobile Number)" name="mobile" />
          <LabelInput label="Alternate Contact Details (Mobile Number)" name="alternate_mobile" />

          {/* -------- UPLOADS -------- */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col">
              <label className="font-medium mb-2">Upload Resume / CV</label>
              <input type="file" name="resume" accept=".pdf,.doc,.docx"
                className="border border-gray-300 rounded px-4 py-2" />
                <span className="text-xl text-gray-600 mt-1">
                Only .PDF, .DOC, .DOCX &nbsp;|&nbsp; File must be less than 2MB
                </span>
            </div>

            <div className="flex-1 flex flex-col">
              <label className="font-medium mb-2">Upload Photograph</label>
              <input type="file" name="photo" accept=".jpg,.jpeg,.png"
                className="border border-gray-300 rounded px-4 py-2" />
                <span className="text-xl text-gray-600 mt-1">
                Only .JPG, .JPEG, .PNG &nbsp;|&nbsp; File must be less than 5MB
                </span>
            </div>
          </div>

          {/* -------- TERMS DOWNLOAD -------- */}
          <div className="bg-white h-[15vh] flex justify-between items-center px-6 rounded shadow">
            <p className="font-medium">Terms and Conditions of Enrollment as Faculty:</p>
            <a
              href={termsPdf}
              download
            >
              <img src={downloadpdf} className="w-[25vw]" loading="lazy" />
            </a>
          </div>

          {/* -------- TERMS CONTENT (SCROLLABLE) -------- */}
          <div className="bg-white h-[45vh] overflow-y-scroll p-6 shadow rounded text-sm">
            <p> 1. I agree to participate as a Guest Speaker / Resource Faculty / Chairperson at the Masterclass University Program – after being invited for the same by the scientific coordinators of Masterclass. </p><br/>
            <p>2. I acknowledge that this is going to be an online program – limited to teachers of Orthodontics (Orthodontist only) and post-graduate students in Orthodontics of institutes that ECO Academy has signed an MOU (Memorandum of Understanding) with only.</p><br/>
            <p>3. I agree to present my lecture in the online program on the "Date and Time" that will be communicated to me by the scientific coordinators after mutual discussion with me.</p><br/>
            <p>4. I agree to comply with all program-related deadlines provided to me by the scientific coordinators.</p><br/>
            <p>5. I agree to provide my brief biodata and photograph for printing in Masterclass Symposium / University Program proceedings, posting on the masterclass website and other social media handles.</p><br/>
            <p>6. I understand that my presentation is educational in nature, matches the session description, and the scientific coordinators reserve the right to change the duration and schedule of the presentation with prior information.</p><br/>
            <p>7. I agree that my presentation shall be without any commercial interest in the products discussed. In case of any violation, I shall be subjected to legal proceedings whichever may be deemed suitable by partners of ECO Academy.</p><br/>
            <p>8. I agree to notify the scientific coordinators of Masterclass University Program immediately if an emergency should restrain me from meeting my obligation as a Speaker / Resource Person / Chairperson and will make every attempt possible to provide a qualified substitute Speaker/ Resource Person / Chairperson.</p><br/>
            <p>9. I shall see to the best of my knowledge that my presentation does not violate any proprietary or personal rights of others (including any copyright, trademark, and privacy rights), is factually accurate, and contains nothing defamatory or otherwise unlawful. I have the full authority to enter into this agreement and have obtained all necessary permissions or licenses from any individuals or organizations whose material is included or used in my presentation.</p><br/>
          <p>10. I acknowledge that Masterclass University Program (ECO Academy) shall only be providing me the online platform via a link – minimum 48 hours before the presentation. I am aware that all other accessories like – laptop, microphone, headphone, and internet services have to be arranged by myself for the purpose of the presentation.</p><br/>
          <p>11. I will be using a visual presentation limited to the following format: PowerPoint / Keynote (Mac Users) only. My presentation may contain both audio/visual clips embedded in it.</p><br/>
          <p>12. I authorize the scientific coordinators of Masterclass University Program to furnish my name, photo, and C.V for promotion of the program on the masterclass website and various social media platforms.</p><br/>
          <p>13. I agree that my presentation may be recorded but will only be streamed on social media/website for the benefit of other fraternity members after taking separate consent for the same from me.</p><br/>
          <p>14. I understand that I shall be eligible for an honorarium for my role as a Guest Speaker / Resource Person. The amount could be variable for each session and each Guest Speaker / Resource Person. The decision of the amount shall solely rest on the partners of ECO Academy and I will have no opinion or interference in the same. Chairpersons of the sessions are not eligible for any honorarium.</p><br/>
          <p>15. I do understand that I have to maintain absolute confidentiality about the content of the private meetings of Guest Speakers / Resource Persons / Chairpersons conducted by the scientific coordinators of the Masterclass University Program and the partners of ECO Academy. Any private information leaked through any forum by any members of the meeting shall call for punitive legal actions deemed suitable by the partners of ECO Academy.</p><br/>
          <p>16. I do understand that I shall not disrepute or defame the Masterclass University Program, ECO Academy, its partners, the scientific coordinators, and all guest speakers/resource persons/chairpersons associated with the program in any public/social media platforms. Any such act would call for punitive legal consequences deemed suitable by partners of ECO Academy.</p><br/>
          <p>17. Any controversy or claim arising out of or relating to this agreement shall be entered in any court having jurisdiction of – ECO Academy, Kolkata section only and thereof.</p><br/>
          </div><br/>
          
          <label className="flex gap-3 items-start">
            <input type="checkbox" required className="mt-1" />
            <span>
              I hereby accept all the above terms and conditions for being a faculty
              at the Masterclass University Program under the ECO ACADEMY.
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
