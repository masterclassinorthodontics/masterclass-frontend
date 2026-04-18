import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import bothbg from "../../assets/images/both-side-gradient.png"
import faqbtn from "../../assets/images/faq.png";

const FAQData = [
  {
    question: "WHAT DOES THIS ADVANCED ORTHODONTIC COURSE FOCUS ON?",
    answer:
      "This advanced orthodontic course basically focuses on the role of skeletal anchorage systems in Orthodontics. It gives the participants an in-depth overview on – temporary anchorage devices, orthodontic bone screws and bone plates. It is crafted to upgrade the clinical skills of orthodontists, post graduate students in orthodontics and orthodontic practitioners to treat complex orthodontic problems, non surgically. It also focuses on the role of mini-implants in association with dental braces and aligners to treat challenging orthodontic cases."
  },
  {
    question: "WHO ARE THE IDEAL CANDIDATES FOR THIS COURSE?",
    answer:
      "Dental practitioners holding post graduate degree in Orthodontics / post graduate students in Orthodontics are ideal candidates for this course. General dentist (international delegates) who are not registered under the Dental Council of India – and have special interest in the field of Orthodontics can also avail this course to upgrade their clinical skills. This comprehensive course on skeletal anchorage systems is unique in its own way – as it is a combination of lecture module and hands-on exercise on 3D printed life like models with a dedicated videographic session on various minor surgical procedures associated with TADs. Therefore, clinicians can use this forum to gather advanced clinical inputs in the non-surgical treatment of complex orthodontic problems like – gummy smiles, vertical maxillary excessive, transverse skeletal deficiency, clockwise rotated mandible leading to deficient chin, Class II and Class III skeletal problems and so on."
  },
  {
    question: "CAN INTERNATIONAL DELEGATES BE A PART OF THIS COURSE?",
    answer:
      "Yes, international delegates can attend this course. In case of international delegates with practicing registration number from any other country other than India – both orthodontist and general dentist with special interest in Orthodontics are allowed to be a part of this extensive clinical session.The 3-day clinical extravaganza on temporary anchorage devices is specially crafted to meet the needs of clinicians who wish to upgrade their skills in the treatment of severe orthodontic problems and orthodontic re-treatment."
  },
  {
    question: "WHO ARE THE COURSE CO-ORDINATORS / FACULTY MEMBERS?",
    answer:
      "The faculty is an esteemed group of astute clinicians with more than a decade of experience with temporary anchorage devices. They have themselves treated thousands of cases with this modality. This course is the brainchild of – Dr.Abhisek Ghosh (Visiting Professor, Department of Orthodontics, Sri Ramachandra Dental College and Hospital, Chennai, India) and Dr.Adith Venugopal (Senior Lecturer, Department of Orthodontics, University of Otago, Dunedin, New Zealand).They are aptly supported by other experienced clinicians like – Dr.Rajaganesh Gautam (Chair, Department of Orthodontics, DY Patil Dental College and Hospital, Pune, India), Dr.Ajit Kalia (Chair, Department of Orthodontics, MA Rangoonwala Dental College and Hospital, Pune, India) and Dr.Arun Nayak (Private Practitioner, Clear Aligner Expert, Mumbai, India). All the course coordinators are actively involved and are physically available to guide the delegates during the lecture and the hands-on session."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleReadAll = () => {
    window.location.href = '/faq';
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center py-10 px-2 bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${bothbg})`,
        backgroundPosition: "top 20px",
      }}
    >
      {/* Top Header Image */}
      <div className="w-[75%] md:w-[65%] lg:w-[55%] mb-8">
        <img src={faqbtn} alt="FAQ" className="w-full" loading="lazy" />
      </div>

      {/* Main Container */}
      <div
        className="
          w-full
          max-w-[85vw]
          bg-transparent
          backdrop-blur-sm
          p-6
          md:p-8
          rounded-sm
          shadow-[0_10px_30px_rgba(0,0,0,0.25)]
        "
      >
        {/* Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {FAQData.map((faq, index) => (
            <div key={index} className="flex flex-col w-full">

              {/* Toggle Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="
                  w-full
                  h-[60px]
                  flex
                  justify-between
                  items-center
                  bg-transparent
                  px-5
                  shadow-[0_6px_18px_rgba(0,0,0,0.25)]
                  transition-all
                  duration-300
                  hover:bg-white/20
                "
              >
                <span
                  className="
                    font-bold
                    text-sm
                    md:text-base
                    text-gray-800
                    uppercase
                    whitespace-normal
                    pr-6
                    break-words
                  "
                >
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-500 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              {/* Answer Panel */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-[1000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div
                  className="
                    p-6
                    mt-2
                    text-gray-800
                    text-[15px]
                    md:text-base
                    leading-relaxed
                    bg-transparent
                    shadow-[0_10px_25px_rgba(0,0,0,0.3)]
                  "
                >
                  {faq.answer.split('\n').map((para, i) => (
                    <p key={i} className={i !== 0 ? "mt-4" : ""}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Read All Button */}
      <button
        onClick={handleReadAll}
        className="
          mt-12
          px-14
          py-4
          border-[4px]
          border-black
          rounded-[10px]
          bg-transparent
          text-black
          font-bold
          uppercase
          tracking-widest
          transition-all
          duration-300
          hover:shadow-md
        "
      >
        Read All
      </button>
    </div>
  );
};

export default FAQSection;
