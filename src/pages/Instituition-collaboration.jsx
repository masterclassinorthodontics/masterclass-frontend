import React from "react";
import { Helmet } from "react-helmet";

// Main image
import mainImage from "../assets/images/instituition-imgs/ALL-COLLEGES-min.png";
import frombg from "../assets/images/from-bg.png";

// Institution images
import img1 from "../assets/images/instituition-imgs/Ahmedabad-Dental-College-and-Hospital-min.png";
import img2 from "../assets/images/instituition-imgs/Malabar-Dental-College-and-Research-Centre-min.png";
import img3 from "../assets/images/instituition-imgs/Malla-Reddy-Institute-of-Dental-Sciences-min.png";
import img4 from "../assets/images/instituition-imgs/M.A.-Rangoonwala-Dental-College-and-Research-Centre-min.png";
import img5 from "../assets/images/instituition-imgs/Malla-Reddy-Institute-of-Dental-Sciences-min.png";
import img6 from "../assets/images/instituition-imgs/Al-Badar-Dental-College-and-Hospital-min.png";
import img7 from "../assets/images/instituition-imgs/NAMS-Bir-Hospital-min.png";
import img8 from "../assets/images/instituition-imgs/Narayana-Dental-College-and-Hospital-min.png";
import img9 from "../assets/images/instituition-imgs/Peoples-Dental-Academy-min.png";
import img10 from "../assets/images/instituition-imgs/Shree-Bankey-Bihari-Dental-College-and-Hospital-min.png";
import img11 from "../assets/images/instituition-imgs/Sri-Balaji-Dental-College-and-Hospital-min.png";
import img12 from "../assets/images/instituition-imgs/Sri-Hasanamaba-Dental-College-and-Hospital-min.png";
import img13 from "../assets/images/instituition-imgs/Sri-Venkateshwara-Dental-College-and-Hospital-min.png";
import img14 from "../assets/images/instituition-imgs/Terna-Dental-College-and-Hospital-min.png";
import img15 from "../assets/images/instituition-imgs/Certificate-1-min.png";
import img16 from "../assets/images/instituition-imgs/G-Pulla-Reddy-Dental-College-and-Hospital-AP.png";
import img17 from "../assets/images/instituition-imgs/Vinayaka-Missions-Dental-College-and-Hospital-Salem-Tamil-Nadu.png";
import img18 from "../assets/images/instituition-imgs/SCB-DENTAL-COLLEGE-AND-HOSPITAL-CUTTACK-ODISHA.png";
import img19 from "../assets/images/instituition-imgs/Oxford-Dental-College-and-Hospital-Bangalore.png";
import img20 from "../assets/images/instituition-imgs/College-of-Dental-Sciences-CODS-Davangere-png.png";
import img21 from "../assets/images/instituition-imgs/SRI-BALAJI-DENTAL-COLLEGE-AND-HOSPITAL-HYDERABAD-TELANGANA.png";
import img22 from "../assets/images/instituition-imgs/SRM-Dental-College-and-Hospital-Chennai-1.png";
import img23 from "../assets/images/instituition-imgs/ST.JOSEPH DENTAL COLLEGE AND HOSPITAL, ANDHRA PRADESH.png"
import img24 from "../assets/images/instituition-imgs/Institute of Dental Sciences and Hospital, Bhubaneswar, Odisha.png"
import img25 from "../assets/images/instituition-imgs/DJ College of Dental Sciences and Research, Ghaziabad, Uttar Pradesh.png"
import img26 from "../assets/images/instituition-imgs/SMBT Dental College and Hospital, Sangamner, Maharashtra.png"
import img27 from "../assets/images/instituition-imgs/KMCT DENTAL COLLEGE AND HOSPITAL, KOZHIKODE, KERALA, INDIA.png"
import img28 from "../assets/images/instituition-imgs/SUDHA RUSTAGI DENTAL SCIENCES AND RESEARCH, FARIDABAD, HARYANA, INDIA.png"


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ---------------- IMAGES ---------------- */
const images = [
  img1, img2, img3,
  img4, img5, img6,
  img7, img8, img9,
  img10, img11, img12,
  img13, img14, img15,
  img16, img17, img18,
  img19, img20, img21, img22, img23, img24, img25, img26, img27, img28
];

/* ---------------- COLLEGE DATA ---------------- */
const colleges = [
  { name: "Ahmedabad Dental College and Hospital", city: "Ahmedabad", state: "Gujarat", additionalInfo: "Additional Information" },
  { name: "Malabar Dental College and Research Centre", city: "Malappuram", state: "Kerala, India", additionalInfo: "Additional Information" },
  { name: "Malla Reddy Dental College for Women", city: "Hyderabad", state: "Telangana, India", additionalInfo: "Additional Information" },
  { name: "M.A. Rangoonwala Dental College", city: "Pune", state: "Maharashtra, India", additionalInfo: "Additional Information" },
  { name: "Malla Reddy Institute of Dental Sciences", city: "Hyderabad", state: "Telangana, India", additionalInfo: "Additional Information" },
  { name: "Al-Badar Dental College and Hospital", city: "Kalaburagi", state: "Karnataka, India", additionalInfo: "Additional Information" },
  { name: "NAMS Bir Hospital", city: "Kathmandu", state: "Nepal", additionalInfo: "Additional Information" },
  { name: "Narayana Dental College and Hospital", city: "Nellore", state: "Andhra Pradesh, India", additionalInfo: "Additional Information" },
  { name: "Peoples Dental Academy", city: "Bhopal", state: "Madhya Pradesh, India", additionalInfo: "Additional Information" },
  { name: "Shree Bankey Bihari Dental College", city: "Ghaziabad", state: "Uttar Pradesh, India", additionalInfo: "Additional Information" },
  { name: "Sri Balaji Dental College and Hospital", city: "Chennai", state: "Tamil Nadu, India", additionalInfo: "Additional Information" },
  { name: "Sri Hasanamba Dental College and Hospital", city: "Hassan", state: "Karnataka, India", additionalInfo: "Additional Information" },
  { name: "Sri Venkateshwara Dental College and Hospital", city: "Chennai", state: "Tamil Nadu, India", additionalInfo: "Additional Information" },
  { name: "Terna Dental College and Hospital", city: "Navi Mumbai", state: "Maharashtra, India", additionalInfo: "Additional Information" },
  { name: "Ranjeet Deshmukh College of Dental Sciences", city: "Nagpur", state: "Maharashtra, India", additionalInfo: "Additional Information" },
  { name: "G. Pulla Reddy Dental College and Hospital", city: "Kurnool", state: "Andhra Pradesh, India", additionalInfo: "Additional Information" },
  { name: "Vinayaka Missions Dental College", city: "Salem", state: "Tamil Nadu, India", additionalInfo: "Additional Information" },
  { name: "S.C.B. Dental College and Hospital", city: "Cuttack", state: "Odisha, India", additionalInfo: "Additional Information" },
  { name: "Oxford Dental College and Hospital", city: "Bangalore", state: "Karnataka, India", additionalInfo: "Additional Information" },
  { name: "College of Dental Sciences (CODS)", city: "Davangere", state: "Karnataka, India", additionalInfo: "Additional Information" },
  { name: "Sri Balaji Dental College and Hospital", city: "Hyderabad", state: "Telangana, India", additionalInfo: "Additional Information" },
  { name: "SRM Dental College and Hospital", city: "Chennai", state: "Tamil Nadu, India", additionalInfo: "Additional Information" },
  { name: "St. Joseph Dental College and Hospital", city:"Duggirala", state: "Andhra Pradesh, India", additionalInfo: "Additional Information"},
  { name: "Institute of Dental Sciences and Hospital", city:"(Sikha 'O'", state:"Anusandhan University )", additionalInfo: "Bhubaneswar, Odisha India"},
  { name: "D J College of Dental Sciences & Research", city: "Ghaziabad", state:"Uttar Pradesh, India"},
  { name: "SMBT Dental College and Hospital", city: "Sangamner", state:"Maharastra, India"},
  { name: "KMCT Dental College and Hospital", city: "Kozhikode", state:"Kerala, India"},
  { name: "Sudha Rustagi College of Dental Sciences and Research", city: "Faridabad", state:"Haryana, India"}
];

/* ---------------- MERGED DATA ---------------- */
const institutions = images.map((img, index) => ({
  img,
  ...colleges[index],
}));

const Insticollabsection = () => {
  return (
    <>
    <Helmet>
      <title>INSTITUITION IN COLLABORATION IMAGES - Masterclass in Orthodontics</title>
    </Helmet>
      <Navbar />

      <section className="w-full px-6 py-40"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.78)),url(${frombg})`
      }}
      >
        {/* Heading */}
        <h2 className="text-[40px] font-semibold text-center leading-snug mb-16">
          <span className="block">List of Educational Institutions</span>
          <span className="block">in</span>
          <span className="block">Memorandum of Understanding (MOU)</span>
          <span className="block">with</span>
          <span className="block">
            Masterclass in Orthodontics (ECO Academy)
          </span>
        </h2>

        {/* Main Image */}
        <div className="flex justify-center mb-24">
          <img
            src={mainImage}
            alt="MOU Main"
            className="w-[35vw] object-contain"
          />
        </div>

        {/* Institutions Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {institutions.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-full aspect-[3/4] flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="mt-4 text-xl text-[#BD9D62] leading-relaxed italic font-normal"
              style={{ fontFamily: "'Pinyon Script', cursive" }}
              >
                {item.name} <br />
                {item.city}, {item.state} <br />
                {item.additionalInfo}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Insticollabsection;
