import { useState } from "react";
import { Helmet } from "react-helmet";
import boxbg from "../assets/images/background-solid.png"
import bothbg from "../assets/images/both-side-gradient.png"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const dataLeft = [
  { q: "WHAT DOES THIS ADVANCED ORTHODONTIC COURSE FOCUS ON?", a: "This advanced orthodontic course basically focuses on the role of skeletal anchorage systems in Orthodontics. It gives the participants an in-depth overview on – temporary anchorage devices, orthodontic bone screws and bone plates. It is crafted to upgrade the clinical skills of orthodontists, post graduate students in orthodontics and orthodontic practitioners to treat complex orthodontic problems, non-surgically. It also focuses on the role of mini-implants in association with dental braces and aligners to treat challenging orthodontic cases." },
  { q: "WHO ARE THE IDEAL CANDIDATES FOR THIS COURSE?", a: "Dental practitioners holding post graduate degree in Orthodontics / post graduate students in Orthodontics are ideal candidates for this course. General dentist (international delegates) who are not registered under the Dental Council of India – and have special interest in the field of Orthodontics can also avail this course to upgrade their clinical skills. This comprehensive course on skeletal anchorage systems is unique in its own way – as it is a combination of lecture module and hands-on exercise on 3D printed life like models with a dedicated videographic session on various minor surgical procedures associated with TADs. Therefore, clinicians can use this forum to gather advanced clinical inputs in the non-surgical treatment of complex orthodontic problems like – gummy smiles, vertical maxillary excessive, transverse skeletal deficiency, clockwise rotated mandible leading to deficient chin, Class II and Class III skeletal problems and so on" },
  { q: "CAN INTERNATIONAL DELEGATES BE A PART OF THIS COURSE?", a: "Yes, international delegates can attend this course. In case of international delegates with practicing registration number from any other country other than India – both orthodontist and general dentist with special interest in Orthodontics are allowed to be a part of this extensive clinical session. The 3-day clinical extravaganza on temporary anchorage devices is specially crafted to meet the needs of clinicians who wish to upgrade their skills in the treatment of severe orthodontic problems and orthodontic re-treatment." },
  { q: "WHO ARE THE COURSE CO-ORDINATORS / FACULTY MEMBERS?", a: "The faculty is an esteemed group of astute clinicians with more than a decade of experience with temporary anchorage devices. They have themselves treated thousands of cases with this modality. This course is the brainchild of – Dr.Abhisek Ghosh (Visiting Professor, Department of Orthodontics, Sri Ramachandra Dental College and Hospital, Chennai, India) and Dr.Adith Venugopal (Senior Lecturer, Department of Orthodontics, University of Otago, Dunedin, New Zealand). They are aptly supported by other experienced clinicians like – Dr.Rajaganesh Gautam (Chair, Department of Orthodontics, DY Patil Dental College and Hospital, Pune, India), Dr.Ajit Kalia (Chair, Department of Orthodontics, MA Rangoonwala Dental College and Hospital, Pune, India) and Dr.Arun Nayak (Private Practitioner, Clear Aligner Expert, Mumbai, India). All the course coordinators are actively involved and are physically available to guide the delegates during the lecture and the hands-on session." },
  { q: "WHAT IS THE DETAILED CONTENT OF THIS COURSE?", a: "The extensive lecture session on day 1 involves – short introduction to TADs, material and design perspectives of TADs, selection criteria of TADs, anatomical landmarks and considerations for TADs placement and economic perspectives of which system to buy. It involves the understanding of TAD biomechanics for de-crowding and retraction, treatment of vertical problems like gummy smiles, increased lower anterior facial height, clockwise rotated mandible and occlusal cants. The course also involves non-surgical management of Class II and Class III skeletal problems and correction of transverse skeletal problems in adults using MARPE / MSE. The lectures on the 2nd day are focused on – correction of impaction and transpositions with the aid of TADs, non-surgical camouflage of Class II and Class III malocclusions with infra zygomatic crest bone screws (IZC) and buccal shelf bone screws (BSS), orthodontic re-treatment, digitized appliances with TADs and role of TADs in clear aligner therapy. The lecture curriculum also focuses on – clinical innovations with TADs, evidence-based treatment protocol with TADs and failures of TADs – critical appraisal and management. The 3rd day of the course has an extensive hands-on session. The participants are allowed to work on 3D printed models – where they can place TADs (Temporary Anchorage Devices) using different armamentarium in various inter-dental and extra-alveolar sites. It also has an extensive videographic session where TADs related minor surgical processes are discussed. All in all, masterclass is comprehensive course which trains clinicians on A-Z of treatment of challenging orthodontic cases with skeletal anchorage systems." },
  { q: "WHAT IS THE DURATION OF THIS COURSE?", a: "The full course extends for a period of 3-days. It is divided into Course A and Course A+B. Participants can take up only Course A – which is clinical lecture based and extend for 2 days. The sessions for each day are of 8 hours. They can also take up Course A+B – which comprises clinical lecture for the first 2 days and hands- on and videographic session on the last day (Total – 3 days). The sessions for each day extend for 8 hours." },
  { q: "IS THERE A HANDS-ON SECTION TO THIS COURSE?", a: "Yes, the 3rd day of the course (Course B) has an extensive hands-on session. The participants are allowed to work on 3D printed models – where they can place TADs (Temporary Anchorage Devices) using different armamentarium in various inter-dental and extra-alveolar sites. During the session, personalized attention and guidance is provided to every participant by the course coordinators on a one-to-one basis. The hands-on section also involves a videographic section where different clinical minor surgical videos related to skeletal anchorage systems are showcased. It also involves a problem-solving section where the participants are taught how to overcome different complication arising during the treatment of complex orthodontic problems with TADs." },
];

const dataRight = [
  { q: "ARE THE CANDIDATES ALLOWED TO WORK ON PATIENTS AS PART OF THE COURSE MODULE?", a: "No, there is no option for the participants to work on patients – as a part of the course curriculum. However, on the 3rd day of the course (Course B) – The hands-on section involves an extensive videographic part where different clinical minor surgical videos related to skeletal anchorage systems are shown. This will give enough experience and confidence to the participants to work similarly in their personalized clinical environment." },
  { q: "IS THE LECTURE SECTION OF THE COURSE AVAILABLE ONLINE?", a: "We at present do not have an online version of this course. Although we do have future plans to bring the COURSE A (2-days lecture session) online, but due to the extensive clinical content and patient records present in the lectures – we are skeptical in bringing it online considering patient privacy concerns." },
  { q: "CAN I REACH OUT TO THE COURSE CO-ORDINATORS FOR CLEARING MY DOUBTS AFTER THE COURSE IS OVER?", a: "This facility is only available for participants who have already attended the course. The course faculty on the basis of goodwill provide expert advice to participating delegates in the future, regarding any clinical doubts through email or other closed social media groups. All participants are given access to our personalized data protected social media platforms where they can share and discus their clinical doubts in the future. This unique initiative aids in holistic learning experience." },
  { q: "WHAT IS THE COURSE FEES?", a: "Kindly refer to the home page of the website to know more about the updated course fees and registration details for the upcoming course." },
  { q: "WHERE WAS THIS COURSE BEING HELD BEFORE?", a: "Previously the courses were held in Bangalore, India (2023) and Delhi, India (2023). The previous two editions of the course were immensely successful with excellent participation from all around the globe. Over 150 orthodontists from – India, UAE, Saudi Arabia, Qatar, Bahrain, Sri Lanka and the United Kingdom actively participated in previous editions of the course." },
  { q: "WHEN AND WHERE WILL THIS COURSE BE HELD NEXT?", a: "Kindly refer to the home page of the website to know more about the location and dates of the upcoming course and its registration details." },
  { q: "DOES THE ORGANIZATION OFFER ANY OTHER ADVANCED COURSES OTHER THAN THIS TOPIC?", a: "Yes, this organization provides multiple courses covering various field of orthodontics – like basics and advanced course in straight wire mechanics (MBT), biomechanics and treatment protocols of clear aligner systems, digital marketing for orthodontic professionals etc. The updates of which are regularly uploaded in the home page of the website in frequent intervals." },
];



export default function FAQmainSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (key) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <>
    <Helmet>
      <title>FAQs - Masterclass in Orthodontics</title>
    </Helmet>
      <Navbar />

      <section className="w-full py-40"
      style={{
        backgroundImage:`url(${bothbg})`,
        backgroundPosition:"center",
      }}
      >
        <h2 className="text-center text-3xl font-semibold text-black mb-12">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="max-w-6xl mx-auto p-10 shadow-xl"
        style={{backgroundImage:`url(${boxbg})`}}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* LEFT COLUMN */}
            <div>
              {dataLeft.map((item, i) => {
                const key = `L-${i}`;
                const isOpen = openIndex === key;

                return (
                  <div
                    key={key}
                    className="shadow-xl rounded-md mb-4"
                  >
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex justify-between items-start px-6 py-4 text-left font-semibold text-black"
                    >
                      <span className="pr-6">{item.q}</span>

                      <span
                        className={`pt-1 transform transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "max-h-[2000px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-6 pb-6 text-gray-600">
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN */}
            <div>
              {dataRight.map((item, i) => {
                const key = `R-${i}`;
                const isOpen = openIndex === key;

                return (
                  <div
                    key={key}
                    className="shadow-xl rounded-md mb-4"
                  >
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex justify-between items-start px-6 py-4 text-left font-semibold text-black"
                    >
                      <span className="pr-6">{item.q}</span>

                      <span
                        className={`pt-1 transform transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "max-h-[2000px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-6 pb-6 text-gray-600">
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

