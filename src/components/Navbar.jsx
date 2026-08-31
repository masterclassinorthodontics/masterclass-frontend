import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/only-logo.png";
import nav1 from "../assets/images/home-bttn.png";
import nav2 from "../assets/images/university-bttn.png";
import nav3 from "../assets/images/masterclass-gallery-bttn.png";
import nav4 from "../assets/images/prac-part-bttn.png";
import nav6 from "../assets/images/contact-bttn.png";

const navItems = [
  { img: nav1, path: "/" },
  { img: nav2, path: "/masterclass-university-program" },
  { img: nav3, path: "/gallery" },
  { img: nav4, path: "/spark-participation-form" },
  { img: nav6, path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-[14vh] px-2 flex items-center bg-[#1A1831] z-50 isolation-isolate">

      {/* Logo (30%) */}
      <div className="w-[50%] md:w-[20%] h-full flex items-center justify-start">
        <Link to="/" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Logo"
            className="h-[75%] cursor-pointer mix-blend-screen"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
<div className="w-[80%] hidden md:flex justify-end items-center ml-6 gap-1">
  {navItems.map((item, i) => (
    <Link
      key={i}
      to={item.path}
      className="h-[60px] flex items-center justify-center"
    >
      <img
        src={item.img}
        alt={`nav-${i}`}
        className="h-[60px] w-auto object-contain cursor-pointer mix-blend-screen hover:scale-101 transition-transform duration-300"
        loading="lazy"
      />
    </Link>
  ))}
</div>

      {/* Hamburger */}
      <div
        className="md:hidden ml-auto flex flex-col gap-1 cursor-pointer z-50"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`h-[3px] w-7 bg-white transition-all duration-300 ${
            open ? "rotate-45 translate-y-[6px]" : ""
          }`}
        />
        <span
          className={`h-[3px] w-7 bg-white transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-[3px] w-7 bg-white transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        />
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`fixed top-[12vh] left-0 w-full bg-[#1A1831] flex flex-col items-center gap-6 py-8 z-40
        transition-all duration-500 ease-in-out
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}
      >
        {navItems.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            onClick={() => setOpen(false)}
          >
            <img
              src={item.img}
              alt={`mobile-nav-${i}`}
              className="h-12 mix-blend-screen transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
