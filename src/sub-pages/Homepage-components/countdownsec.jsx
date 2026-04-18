import React, { useEffect, useState } from "react";
import bothbg from "../../assets/images/both-side-gradient.png"
import { useNavigate } from "react-router-dom";
import RegisterBtn from "../../assets/images/reg-bttn.png";
import TimerBg from "../../assets/images/timer-btn.png";


const CountdownSection = () => {
  const navigate = useNavigate();

  const targetDate = new Date("2026-06-27T00:00:00").getTime();
  const [expired, setExpired] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
      setExpired(true);
      return null;
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const t = getTimeLeft();
      if (!t) clearInterval(timer);
      else setTimeLeft(t);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full flex flex-col items-center gap-12 py-10"
    style={{
      backgroundImage:`url(${bothbg})`,
      backgroundPosition:"top",
      backgroundSize:"100vw 350px",
      backgroundRepeat:"no-repeat"
    }}
    >

      {/* REGISTER BUTTON */}
      <img
        src={RegisterBtn}
        alt="Register Now"
        // onClick={() => navigate("/register")}
        className="cursor-pointer w-[75%] md:w-[65%] lg:w-[55%] animate-fadeIn"
        loading="lazy"
      />

      {/* TIMER IMAGE */}
      {/* <div className="relative w-[95%] md:w-[92%] lg:w-[95%]"> */}
        {/* <img src={TimerBg} alt="Timer BG" className="w-full object-contain" /> */}

        {/* TIMER OVERLAY */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          {expired ? (
            <div className="text-black text-sm sm:text-xl md:text-3xl font-bold bg-white px-4 py-3 sm:px-6 sm:py-4 border-2 sm:border-4 border-black">
              Event Started
            </div>
          ) : (
            <div className="flex gap-1 sm:gap-3 md:gap-6
              border-2 sm:border-4 border-black
              bg-white/20 backdrop-blur-md
              px-2 sm:px-6 py-2 sm:py-4
              animate-fadeIn"
            >
              <TimeBox label="Days" value={timeLeft.days} />
              <TimeBox label="Hours" value={timeLeft.hours} />
              <TimeBox label="Min" value={timeLeft.minutes} />
              <TimeBox label="Sec" value={timeLeft.seconds} />
            </div>
          )}
        </div> */}
      {/* </div>  */}
    </section>
  );
};

const TimeBox = ({ label, value }) => (
  <div className="flex flex-col items-center min-w-[35px] sm:min-w-[60px]">
    <div className="
      font-bold
      text-[clamp(1.2rem,4vw,2.5rem)]
      leading-none
      flip"
    >
      {String(value).padStart(2, "0")}
    </div>
    <span className="text-[10px] sm:text-xs uppercase tracking-wide">
      {label}
    </span>
  </div>
);

export default CountdownSection;

