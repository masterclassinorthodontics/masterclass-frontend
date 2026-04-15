import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



export default function ShippingDeliverysection(){
    return(

        <>
        <Helmet>
          <title>SHIPPING & DELIVERY - Masterclass in Orthodontics</title>
        </Helmet>
        <Navbar/>   
        <section className="max-w-5xl mx-auto px-4 py-[10%]">
  {/* Heading */}
  <div className="text-center mb-10">
    <h1 className="text-4xl font-bold text-[#3B1D82]">Shipping & Delivery</h1>

    {/* Underlines */}
    <div className="flex flex-col items-center mt-3 gap-1">
      <span className="w-88 h-[1px] bg-[#3B1D82]"></span> {/* thin underline */}
      <span className="w-88 h-2 bg-[#3B1D82]"></span>     {/* thick underline */}
    </div>
  </div>

  {/* Content */}
  <div className="text-left space-y-2 text-gray-800 leading-relaxed">
    {/* Subheading with underline */}
    <h2 className="text-base font-semibold inline-block">
      <u>Shipping and Delivery Policy</u>
    </h2>

    {/* Intro */}
    <p>
      At <b>Eco Academy,</b> we ensure timely delivery of workshop materials and certificates.
    </p>

    {/* Details list */}
    <p><b>Details:</b></p>
    <ul className="list-none space-y-2 ml-4">
      <li className="flex items-start gap-2"><span className="text-[0.5rem] mt-1">-</span> Workshop materials provided on-site</li>
      <li className="flex items-start gap-2"><span className="text-[0.5rem] mt-1">-</span> Certificates dispatched within 7-10 working days</li>
      <li className="flex items-start gap-2"><span className="text-[0.5rem] mt-1">-</span> Digital certificates/recordings emailed within 3-5 working days</li>
    </ul>

    {/* Contact */}
    <p><b>Contact:</b></p>
    <p>
      For inquiries, please reach out to:{" "}<br/>
      <a
        href="mailto:masterclassinorthodontics@gmail.com"
        className="text-blue-600 underline"
      >
        masterclassinorthodontics@gmail.com
      </a>
    </p>

    <p>Thank you for choosing <b> ECO ACADEMY</b></p>
  </div>
</section>
<Footer/>
</>
    )
}

