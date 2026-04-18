import { useState } from "react";
import arunpdf from "../../assets/images/DR.ARUN-NAYAK.png"
import sijupdf from "../../assets/images/DR.SIJU-GEORGE.png"
import ajitpdf from "../../assets/images/DR.AJIT-KALIA.png"
import abhisekpdf from "../../assets/images/DR.ABHISEK-GHOSH.png"
import manishpdf from "../../assets/images/DR.MANISH-BAJRACHARYA.png"
import ujjwalpdf from "../../assets/images/DR.UJJWAL-PYAKUREL.png"
import arungimg from "../../assets/images/speakerimg/arunimg.png"
import sijuimg from "../../assets/images/speakerimg/sijuimg.png"
import ajitimg from "../../assets/images/speakerimg/ajitimg.png"
import abhisekimg from "../../assets/images/speakerimg/abhisekimg.png"
import manishimg from "../../assets/images/speakerimg/manishimg.png"
import ujjwalimg from "../../assets/images/speakerimg/ujjwalimg.jpg"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import bothbg from "../../assets/images/both-side-gradient.png"
import Modal from "./Modal";

const speakers = [
  { id: 1,
    name: "Dr. Arun Nayak",
    img: arungimg, imgg:arunpdf,
    social: {
      facebook: "https://www.facebook.com/drarunnayak",
      instagram: "https://www.instagram.com/drarunnayakorthodontist/",
      youtube: "https://www.youtube.com/@masterclassinorthodontics"
  }},
  { id: 2, 
    name: "Dr. Siju George", 
    img: sijuimg, imgg:sijupdf, 
    social: {
      facebook: "https://www.facebook.com/drsijumgeorge/",
      instagram: "https://www.instagram.com/drsijugeorge/",
      youtube: "https://www.youtube.com/@masterclassinorthodontics"
  }},
  { id: 3, 
    name: "Dr. Ajit Kalia", 
    img: ajitimg, 
    imgg: ajitpdf,
     social: {
      facebook: "https://www.facebook.com/ajit.kalia.1",
      instagram: "https://www.instagram.com/ajit.kalia.315/",
      youtube: "https://www.youtube.com/@masterclassinorthodontics"
    } },
  { id: 4, 
    name: "Dr. Abhisek Ghosh", 
    img: abhisekimg, imgg:abhisekpdf,
    social: {
      facebook: "https://www.facebook.com/abhisek.ghosh.336/",
      instagram: "https://www.instagram.com/drabhisekghosh_orthodontist/",
      youtube: "https://www.youtube.com/@masterclassinorthodontics"
    }
   },
  { id: 5, 
    name: "Dr. Manish Bajaracharya", 
    img: manishimg, imgg:manishpdf,
    social: {
      facebook: "https://www.facebook.com/manish.bajracharya.509667",
      instagram: "https://www.instagram.com/manishbajracharya/",
      youtube: "https://www.youtube.com/@masterclassinorthodontics"
    }
},
  { id: 6, 
    name: "Dr. Ujjwal Pyakurel", 
    img: ujjwalimg, imgg:ujjwalpdf,
   social: {
      facebook: "https://www.facebook.com/pyakurelu",
      instagram: "https://www.instagram.com/ujjwal.pyakurel/",
      youtube: "https://www.youtube.com/@masterclassinorthodontics"
    }
},
];

export default function SpeakersSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="px-6 md:px-16 py-16"
    style={{
      backgroundImage:`url(${bothbg})`,
      backgroundPosition:"center",
      backgroundSize:"100vw 1400px",
      backgroundRepeat:"no-repeat"
    }}
    >
      {/* Headings */}
      <h2 className="text-xl text-gray-700">LISTEN TO THE</h2>
      <h2 className="text-3xl md:text-4xl font-bold mt-1">
        Our Speakers
      </h2>

      {/* Description */}
      <p className="max-w-2xl mt-4 text-gray-600">
        Unlock precision in orthodontics at our Masterclass event. Refine
        techniques, exchange insights, and elevate your practice to new heights.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="relative">
            {/* Image */}
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-full h-full object-cover rounded-4xl hover:shadow-2xl"
              loading="lazy"
            />

            {/* Info Box */}
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-10 shadow-md">
              {/* First Line */}
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm">{speaker.name}</h3>
                <span className="text-xs text-gray-500">Speaker</span>
              </div>

              {/* Second Line */}
              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-3 text-gray-600 text-sm">
                  <a
  href={speaker.social.facebook}
  target="_blank"
  rel="noopener noreferrer"
>
  <FaFacebookF className="cursor-pointer hover:text-black" />
</a>

<a
  href={speaker.social.instagram}
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram className="cursor-pointer hover:text-black" />
</a>

<a
  href={speaker.social.youtube}
  target="_blank"
  rel="noopener noreferrer"
>
  <FaYoutube className="cursor-pointer hover:text-black" />
</a>

                </div>

                <button
                  onClick={() => setSelectedImage(speaker.imgg)}
                  className="text-sm font-medium hover:underline"
                >
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}
