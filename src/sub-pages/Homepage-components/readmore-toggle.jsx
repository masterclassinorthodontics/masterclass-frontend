import { useState } from "react";
import visionbtn from "../../assets/images/our-vision-button.png"
import bothbg from "../../assets/images/both-side-gradient.png"

export default function MasterclassSection() {
  const [expanded, setExpanded] = useState(false);
//   const [playVideo, setPlayVideo] = useState(false);

  const shortText = `
Masterclass in Orthodontics, an initiative by ECO ACADEMY is aimed at teaching and sharing the latest and best in contemporary orthodontics by a team of world class accomplished clinicians. We aim to promote Excellence in Clinical Orthodontics through comprehensive 2 or 3 day in person courses, restricted only to orthodontists.

In these courses there is a showcase of clinical case reports, procedural videos along with a hands-on component on very realistic hand-held models and demonstrations on digital 3D resources.
`;

  const fullText = `
Masterclass in Orthodontics, an initiative by ECO ACADEMY is aimed at teaching and sharing the latest and best in contemporary orthodontics by a team of world class accomplished clinicians. We aim to promote Excellence in Clinical Orthodontics through comprehensive 2 or 3 day in person courses, restricted only to orthodontists.

In these courses there is a showcase of clinical case reports, procedural videos along with a hands-on component on very realistic hand-held models and demonstrations on digital 3D resources.

The resource faculty is a team of enthusiastic, energetic and experienced clinicians who are ready to share their clinical experiences, and more importantly their journey of learning, trouble shooting and improvisation so as to consistently achieve excellent clinical results for the patient. Our aim is to share a canvas of varied clinical scenarios, starting from simple clinical cases and progressing on to more advanced and complex situations. Each clinical case scenario is discussed threadbare with a presentation of top-class records, the logic and thought process behind the diagnosis and treatment planning based on sound fundamental principles and contemporary scientific evidence, the treatment steps and finally a critical appraisal of the finished results. Efforts are towards developing critical thinking skills rather than a mere bland pedagogy, with the participants constantly encouraged to question, analyze, understand and assimilate.

We have been hugely successful in this endeavor with our Masterclass series on Temporary Anchorage Devices (TADs), that happened in Bangalore and New Delhi, India in February and July 2023, where the delegates left back with huge amounts of clinical take back, inspiration, know how and most importantly confidence in incorporating TADs in their routine clinical practices. Our participant feedbacks have been a testimony to this fact.

Come, join us and be a part of this journey of raising the bar of Excellence in Clinical Orthodontics. We promise you that this is the best continuing education program that you can give yourself. You owe it to your patients!
`;

  return (
    <section
  className="px-6 md:px-16 py-20 bg-no-repeat bg-center"
  style={{
    backgroundImage:
      `url(${bothbg})`,
    backgroundPosition: "center 80px",
    backgroundSize:"cover",
  }}
>
      {/* Top Center Image */}
      <div className="flex justify-center mb-16">
        <img
          src={visionbtn}
          alt="Masterclass"
          className="w-[75%] sm:w-[65%] lg:w-[55%]"
          loading="lazy"
        />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Column - Text */}
        {/* Left Column - Text */}
<div className="text-gray-700 leading-relaxed">
  <div
    className={`overflow-hidden transition-all duration-400 ease-in-out ${
      expanded ? "max-h-[2000px] opacity-100" : "max-h-[260px] opacity-100"
    }`}
  >
    <div className="whitespace-pre-line">
      {expanded ? fullText : shortText}
    </div>
  </div>

  <button
    onClick={() => setExpanded(!expanded)}
    className="mt-6 px-6 py-2 border border-black rounded-lg text-black bg-transparent hover:bg-black hover:text-white transition"
  >
    {expanded ? "Read Less" : "Read More"}
  </button>
</div>


        {/* Right Column - YouTube */}
        {/* Right Column - YouTube */}
<div className="relative w-full aspect-video rounded-lg overflow-hidden">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/-gb2gar7Z-w?rel=0"
    title="YouTube video"
    allow="autoplay; encrypted-media"
    allowFullScreen
  />
</div>

      </div>
    </section>
  );
}
