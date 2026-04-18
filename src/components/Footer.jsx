import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/only-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#1A1831] text-white">
      {/* MAIN FOOTER */}
      <div className="max-w-6xl mx-auto py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* ================= COLUMN 1 ================= */}
        <div>
          <img src={logo} alt="ECO Academy" className="w-60 mb-6" loading="lazy" />

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/masterclassecorthacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A1831] hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/masterclass_orthodontics?igsh=MXhzYzUzZmgycHE3Yw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A1831] hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/@masterclassinorthodontics"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A1831] hover:scale-110 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* ================= COLUMN 2 ================= */}
        <div>
          <h4 className="font-semibold text-lg mb-5">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/blogs" className="hover:underline">Blogs</Link></li>
            <li><Link to="/gallery" className="hover:underline">Masterclass Gallery</Link></li>
            <li>
              <Link
                to="/masterclass-university-program"
                className="hover:underline"
              >
                Masterclass University Program
              </Link>
            </li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* ================= COLUMN 3 ================= */}
        <div>
          <h4 className="font-semibold text-lg mb-5">
            Important Links
          </h4>

          <ul className="space-y-3 text-sm">
            <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
            <li>
              <Link
                to="/refund-policy"
                className="hover:underline"
              >
                Refund &amp; Cancellation
              </Link>
            </li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li>
              <Link
                to="/shipping-delivery"
                className="hover:underline"
              >
                Shipping &amp; Delivery
              </Link>
            </li>
            <li>
              <Link
                to="/terms-conditions"
                className="hover:underline"
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= COLUMN 4 ================= */}
        <div>
          <h4 className="font-semibold text-lg mb-5">
            Contact us at
          </h4>

          <p className="font-semibold mb-1">Address:</p>
          <p className="text-sm mb-4">
            27, Janak Road (Behind Lake Mall),<br />
            Kolkata – 700029,<br />
            West Bengal, India
          </p>

          <p className="font-semibold mb-1">Email ID:</p>
          <p className="text-sm mb-4">
            <a href="mailto:ecorthacademy@gmail.com" className="hover:underline">
              ecorthacademy@gmail.com
            </a><br />
            <a href="mailto:reg.masterclass@gmail.com" className="hover:underline">
              reg.masterclass@gmail.com
            </a>
          </p>

          <p className="font-semibold mb-1">Phone No:</p>
          <p className="text-sm">
            <a href="tel:+919330153855" className="hover:underline">
              +91-9330153855
            </a><br />
            <a href="tel:+918282965779" className="hover:underline">
              +91-8282965779
            </a>
          </p>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-white/40"></div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between text-base text-white">
        <p>© 2025 ECO ACADEMY. All rights reserved</p>
        <p>
          Expertly Designed by{" "}
          <span className="font-semibold"></span>
        </p>
      </div>
    </footer>
  );
}
