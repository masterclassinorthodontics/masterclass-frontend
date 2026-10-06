import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import mainimg from "../assets/images/SESSION-1-Oct-2026.png"
import signbtnimg from "../assets/images/SI-01.png"
import pagebg from "../assets/images/Zoombg.jpg"
import Footer from "../components/Footer";

export default function ZoomSection() {
  const [showPassword, setShowPassword] = useState({
    institutional: false,
    individual: false,
  });

  const [errors, setErrors] = useState({
    institutional: false,
    individual: false,
  });

  const [institutional, setInstitutional] = useState({
    userId: "",
    password: "",
  });

  const [individual, setIndividual] = useState({
    userId: "",
    password: "",
  });

  /* ================= USERS ================= */

  const institutionalUsers = {
    RUPAM: {
      password: "RUPAM",
      link: "https://us06web.zoom.us/j/83092026577",
    },
    "ortho@mrids.edu.in": {
      password: "MUPINS57",
      link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "orthodontics@svdentalcollege.com": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
    
    "drbejoy@macity.edu.in": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
    
    "orthohod@mrdcw.edu.in": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
    
    "orthodonticssbbdc@gmail.com": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
    
    "ortho@sbdch.ac.in": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
    
    "manishbajracharya@gmail.com": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
    
    "amitabhkallury@gmail.com": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
    
    "mardcortho@gmail.com": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
    
    "abraham2022.r@gmail.com": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
    
    "drprasad@albadardentalcollege.org": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
    
    "ternaorthodontics@gmail.com": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
    
    "maniar09@gmail.com": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
    
    "teamorthosmilesculptors.ndch@gmail.com": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
    
    "orthodonticsrddcrc@gmail.com": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
    
    "muraliksdh@yahoo.com": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
    
    "orthvasu@gmail.com": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
    
      "orthosuryakantadas@gmail.com": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" }, 
      
      "laxmikanthsm2@gmail.com": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
      
      "atportho@gmail.com": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
      
      "sbdcprincipal@gmail.com": { password: "MUPINS57", link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1" },
      
      "hod.orthod.ktr.dental@srmist.edu.in":{ password: "MUPINS57", link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"
      },

      "drpani99@gmail.com":{ password: "MUPINS57", link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"},

      "pritammohanty@soa.ac.in":{ password: "MUPINS57", link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"},

      "hod.orthodontics@djdentalcollege.com":{password: "MUPINS57", link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"},

      "drnagmode77@gmail.com":{password: "MUPINS57", link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"},

      "drbinuortho@gmail.com":{password: "MUPINS57", link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"},

      "drgurkeeratsingh@gmail.com":{password: "MUPINS57", link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"},

      "drpradeepraghav@gmail.com":{password: "MUPINS57", link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"},

      "drprabhakar84@gmail.com":{password: "MUPINS57", link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"},

      "neetunambi@gmail.com":{password: "MUPINS57", link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"},

      "drumeshparajuli@gmail.com":{password: "MUPINS57", link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"},

      "21.hegde@gmail.com":{password: "MUPINS57", link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"},

      "orthodontics@svdcpondy.ac.in":{password: "MUPINS57", link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"},
    
    "INST019": { password: "MUPINS19", link: "https://us05web.zoom.us/j/19191919191" },
    "INST020": { password: "MUPINS19", link: "https://us05web.zoom.us/j/20202020202" }
  };

  const individualUsers = {
    "dr.parameswaran.tm@gmail.com": {
      password: "MUPIND57",
      link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "sanjaylabh@gmail.com": {
      password: "MUPIND57",
      link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "drshanortho@rediffmail.com": {
      password: "MUPIND57",
      link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "sajithmathew@hotmail.com":{
      password:"MUPIND12",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "aplic17cilpa23@gmail.com":{
      password:"MUPIND12",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "bracesuppujain@gmail.com":{
      password:"MUPIND12",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "dr.harshvardhans@gmail.com":{
      password:"MUPIND12",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "renushinde21@gmail.com":{
      password:"MUPIND12",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "drkats.mukherjee@gmail.com":{
      password:"MUPIND12",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "ranjidr@gmail.com":{
      password:"MUPIND12",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "prathameshjalindre@gmail.com":{
      password:"MUPIND12",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"
    },
    "drshettyortho@gmail.com":{
      password:"MUPIND12",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "drarunnayak@yahoo.com":{
      password:"MUPIND12",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"
    },
    "asmarajan62@gmail.com":{
      password:"MUPIND12",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"
    },
    "krutikagaitonde31@gmail.com":{
      password:"MUPIND12",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "nikhilmalviya@gmail.com":{
      password:"MUPIND12",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "dr.sharatrajan@gmail.com":{
      password:"MUPIND12",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "dr.utkarshgandhi@gmail.com":{
      password:"MUPIND12",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "ajma.aishaali@gmail.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "drgeethamds@gmail.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "tanud3@gmail.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "almas0280@gmail.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "doctorpartha@gmail.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "aivinkc4@gmail.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "orthodontistshahid@gmail.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "doclohiya@gmail.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "dr.jaineel@gmail.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "divya.raniwala@gmail.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "kpkr823@gmail.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "drsharonabraham@gmail.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "binutgeorge1974@gmail.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "drhafeez.orthodontist.05@gmail.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "dr.rishikeshsukumaran@gmail.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "bankeralka@yahoo.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "veeresh7515@gmail.com":{
      password:"MUPIND1",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "sija.a.j@gmail.com":{
      password:"MUPIND3",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "devanshiyadav@gmail.com":{
      password:"MUPIND3",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "daakshudas@gmail.com":{
      password:"MUPIND3",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    RUPAM: {
      password: "RUPAM",
      link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "orthonik@gmail.com":{
      password: "MUPINDLM",
      link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1",
    },
    "dr.abhisek24@gmail.com":{
      password: "MUPINDLM",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"
    },
    "drarunimachakraborty@gmail.com":{
      password:"MUPINDLM",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"
    },
    "dr.diegolopez10@gmail.com":{
      password:"MUPINDLM",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"
    },
    "andradadrspanu@gmail.com":{
      password:"MUPINDLM",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"
    },
    "drsumanthranga@gmail.com":{
      password:"MUPINDLM",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"
    },
    "avgorthodontics@gmail.com":{
      password:"MUPINDLM",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"
    },
    "patildk1983@gmail.com":{
      password:"MUPINDLM",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"
    },
    "yudhi79@gmail.com":{
      password:"MUPINDLM",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"
    },
    "drgauriv@gmail.com":{
      password:"MUPINDLM",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"
    },
    "digantorthodontist@gmail.com":{
      password:"MUPINDLM",
      link:"https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"
    },
    "sbbdc.principal@gmail.com":{
      password: "MUPINDLM",
      link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"
    },
    "hrushiaphale@gmail.com":{
      password: "MUPINDLM",
      link: "https://us06web.zoom.us/j/85731661836?pwd=ntT6iDa9uBRLeMUJXbGRdRab1F21Nw.1"
    },
  };

  /* ================= LOGIN HANDLERS ================= */

  const handleInstitutionalLogin = () => {
    const user = institutionalUsers[institutional.userId];
    if (user && user.password === institutional.password) {
      window.location.href = user.link;
    } else {
      setErrors({ ...errors, institutional: true });
      setTimeout(
        () => setErrors((e) => ({ ...e, institutional: false })),
        3000
      );
    }
  };

  const handleIndividualLogin = () => {
    const user = individualUsers[individual.userId];
    if (user && user.password === individual.password) {
      window.location.href = user.link;
    } else {
      setErrors({ ...errors, individual: true });
      setTimeout(
        () => setErrors((e) => ({ ...e, individual: false })),
        3000
      );
    }
  };

  return (
    <>
    <Helmet>
      <title>ACCESS TO LIVE WEBINAR - Masterclass in Orthodontics</title>
    </Helmet>
    <Navbar/>
    <section className="w-full min-h-screen pt-48 pb-10 bg-no-repeat bg-cover bg-center"
    style={{
        backgroundImage:`linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.78)),url(${pagebg})`,
    }}
    >
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch px-[18vw]">

  {/* ================= LEFT IMAGE ================= */}
  <div className="flex justify-center">
    <img
      src={mainimg}
      alt="Login Visual"
      className="max-w-xl w-full rounded-xl shadow-lg object-contain"
      loading="lazy"
    />
  </div>

  {/* ================= RIGHT FORMS ================= */}
  <div className="flex flex-col justify-between items-end max-w-[380px] ml-auto h-full gap-16 min-[1000px]:gap-0 min-[1000px]:scale-y-[0.92] min-[1000px]:origin-center">

    {/* ========== INSTITUTIONAL LOGIN ========== */}
    <div className="bg-white p-10 rounded-[35px] shadow-md w-[110%] text-center transition hover:-translate-y-1 hover:shadow-xl">

      <h3 className="text-sm font-semibold mb-4">
        Institutional Login
      </h3>

      <input
        type="text"
        placeholder="Enter User ID"
        className="w-full px-4 py-2 mb-4 border rounded-full text-center focus:outline-none focus:border-black"
        onChange={(e) =>
          setInstitutional({
            ...institutional,
            userId: e.target.value,
          })
        }
      />

      <div className="relative mb-4">
        <input
          type={showPassword.institutional ? "text" : "password"}
          placeholder="Enter Password"
          className="w-full px-4 py-2 border rounded-full text-center focus:outline-none focus:border-black"
          onChange={(e) =>
            setInstitutional({
              ...institutional,
              password: e.target.value,
            })
          }
        />

        <span
          className="absolute right-4 top-2 cursor-pointer"
          onClick={() =>
            setShowPassword((s) => ({
              ...s,
              institutional: !s.institutional,
            }))
          }
        >
          {showPassword.institutional ? "🙈" : "👁️"}
        </span>
      </div>

      <img
        src={signbtnimg}
        alt="Login"
        className="w-full h-[65px] rounded-full cursor-pointer hover:scale-105 transition"
        onClick={handleInstitutionalLogin}
        loading="lazy"
      />

      {errors.institutional && (
        <p className="text-red-500 text-xs mt-2">
          Incorrect User ID or Password
        </p>
      )}
    </div>


    {/* ========== INDIVIDUAL LOGIN ========== */}
    <div className="bg-white p-10 rounded-[35px] shadow-md w-[110%] text-center transition hover:-translate-y-1 hover:shadow-xl">

      <h3 className="text-sm font-semibold mb-4">
        Individual Login
      </h3>

      <input
        type="text"
        placeholder="Enter User ID"
        className="w-full px-4 py-2 mb-4 border rounded-full text-center focus:outline-none focus:border-black"
        onChange={(e) =>
          setIndividual({
            ...individual,
            userId: e.target.value,
          })
        }
      />

      <div className="relative mb-4">
        <input
          type={showPassword.individual ? "text" : "password"}
          placeholder="Enter Password"
          className="w-full px-4 py-2 border rounded-full text-center focus:outline-none focus:border-black"
          onChange={(e) =>
            setIndividual({
              ...individual,
              password: e.target.value,
            })
          }
        />

        <span
          className="absolute right-4 top-2 cursor-pointer"
          onClick={() =>
            setShowPassword((s) => ({
              ...s,
              individual: !s.individual,
            }))
          }
        >
          {showPassword.individual ? "🙈" : "👁️"}
        </span>
      </div>

      <img
        src={signbtnimg}
        alt="Login"
        className="w-full h-[65px] rounded-full cursor-pointer hover:scale-105 transition"
        onClick={handleIndividualLogin}
        loading="lazy"
      />

      {errors.individual && (
        <p className="text-red-500 text-xs mt-2">
          Incorrect User ID or Password
        </p>
      )}
    </div>

  </div>
</div>
    </section>
    <Footer/>
    </>
  );
}
