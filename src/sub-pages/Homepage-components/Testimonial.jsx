import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import bothbg from "../../assets/images/both-side-gradient.png"
import feedbackbtn from "../../assets/images/feedbck-bttn-tst-frmt.png"
import img1 from "../../assets/images/testimonial-imgs/Dr-Sridhar-Kannan.jpg";
import img2 from "../../assets/images/testimonial-imgs/DR-ASHA-RAGHAVENDRA.png";
import img3 from "../../assets/images/testimonial-imgs/DR-URUMESE-MAMPILLY.png";
import img4 from "../../assets/images/testimonial-imgs/DR-KISHOR-BAGALKOT.png";
import img5 from "../../assets/images/testimonial-imgs/DR-AHMED-SHAZ.jpg";
import img6 from "../../assets/images/testimonial-imgs/DR-SIDDARTH-SHETTY.png";
import img7 from "../../assets/images/testimonial-imgs/DR-SRIYAS-KOYA.png";
import img8 from "../../assets/images/testimonial-imgs/DR-ABDUL-RAHIM.png";

export default function TestimonialsSection() {

    const testimonials = [
        {
            id: 1,
            name: "Dr. SRIDHAR KANAN",
            image: img1,
            review:
                "One of the best lectures and clinical discussions I have encountered in the last 2 decades. An excellent team comprising experts who do not hesitate in showing their mistakes, deliberating and finding solutions to them. Very relatable with listeners like me who face similar situations. Problem solving has always been lacking in our speciality and this was exactly what was needed and happened for those 2 days. Thank you for packed scientific sessions. 🙏",
        },
        {
            id: 2,
            name: "Dr. ASHA RAGHAVENDRA",
            image: img2,
            review:
                "Very excellent course and journey towards advanced orthodontic era. Thank you so much for the excellent lectures and practical demo, sirs 🙏. Very great effort and hard work is the only theme for this successful course. Thank you to all the Master Class sirs 🙏🙏",
        },
        {
            id: 3,
            name: "Dr. URUMESE MAMPILLY",
            image: img3,
            review:
                "Thank you Dr. Abishek, Dr. Adit, Dr. Rajaganesh, Dr. Arun Nayak & Dr. Ajit for giving us a wonderful learning experience. It was wonderfully organized, with lots of practical tips and pearls. Kudos to the entire team of Master Class for making this possible 👏👏👌",
        },
        {
            id: 4,
            name: "Dr. KISHORE BAGALKOT",
            image: img4,
            review:
                "A very well organised scientific programme and indeed a wonderful learning experience. Thanks to all the dear Master Class team members for excellent cases, lectures and knowledge sharing. It was great catching up with you all and the fellow participants. Thank you 🙏",
        },
        {
            id: 5,
            name: "Dr. AHEMD SHAZ",
            image: img5,
            review:
                "I would like to express my gratitude to the whole team for the amazing session. Definitely learned lots of tips and tricks which will be helpful in the long run, having imbibed the confidence to perform implant procedures. Hoping for more sessions of this kind.",
        },
        {
            id: 6,
            name: "Dr. SIDDHARTH SHETTY",
            image: img6,
            review:
                "Absolutely, to attend such a high quality course in our backyard with world class faculty is a dream come true. Full paisa vasool! Learnt so much. Heartfelt thanks to all our Master Class faculty for your efforts 🙏🙏",
        },
        {
            id: 7,
            name: "Dr. SRIYAS KOYA",
            image: img7,
            review:
                "Thank you so much for conducting this high value course. Big respects to all the faculty for the open heart to teach, the volume of excellent cases and awesome presentation 😍✌🏻👍",
        },
        {
            id: 8,
            name: "Dr. ABDUL RAHIM",
            image: img8,
            review:
                "Well organized, a lot of new tips and tricks. Thanks a lot to the great teachers for the session and their wholehearted willingness to share and solve our doubts.",
        },
    ];



    return (
        <section
            className="px-6 md:px-16 py-24"
            style={{
                backgroundImage:
                    `url(${bothbg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize:"cover",
            }}
        >
            {/* Top Image */}
            <div className="flex justify-center mb-20">
                <img
                    src={feedbackbtn}
                    alt="Testimonials"
                    className="w-[85%] md:w-[65%]"
                />
            </div>

            {/* Swiper */}
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                speed={700}
                spaceBetween={40}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                }}
                className="pb-4"
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative bg-white mb-8 rounded-2xl shadow-xl px-8 pt-8 pb-24 text-center">
                            {/* Review */}
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                {item.review}
                            </p>

                            {/* Avatar */}
                            <div className="absolute left-1/2 -bottom-14 transform -translate-x-1/2 flex flex-col items-center">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover bg-white"
                                />
                                <p className="mt-3 font-semibold text-gray-800 text-sm uppercase">
                                    {item.name}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}