import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

export default function Refundpolicysection(){
    return(
    <>
    <Helmet>
      <title>REFUND POLICY - Masterclass in Orthodontics</title>
    </Helmet>
    <Navbar/>
    <section className="max-w-5xl mx-auto px-4 py-[10%]">
  {/* Title */}
  <div className="text-center mb-10">
    <h1 className="text-3xl font-bold text-[#3B1D82]">
      Refund &amp; Cancellation
    </h1>

    {/* Underlines */}
    <div className="flex flex-col items-center mt-2 gap-1">
      <span className="w-80 h-[1px] bg-[#3B1D82]"></span>
      <span className="w-80 h-1.5 bg-[#3B1D82]"></span>
    </div>
  </div>

  {/* Content */}
  <div className="text-left space-y-5 text-gray-800 leading-relaxed">
    <h2 className="text-3xl font-black">Refund Policy</h2>

    <p className="text-lg text-gray-500">
      <b>Introduction</b>
    </p>

    <p>
      This Cancellation and Refund Policy applies to all participants of the
      Masterclass in Orthodontics, an initiative by ECO ACADEMY. By enrolling in
      our courses, you agree to the terms outlined in this policy.
    </p>

    <p>
      <b>Cancellation by Participant</b>
    </p>

    <div className="mx-10">  
    <p>
      <b>1. Cancellation Requests:</b><br />
      <span className="text-[0.5rem]">○</span> All cancellation requests must be submitted in writing to{" "}
      <a
        href="mailto:reg.masterclass@gmail.com"
        className="text-blue-600 underline"
      >
        reg.masterclass@gmail.com
      </a>{" "}
      and will be subject to the terms below.
    </p>
    
    <p>
      <b>2. Refunds:</b><br />
      <b>
        <span className="text-[0.5rem]">○</span> Please note that all payments are final &amp; non-refundable. We kindly
        ask you to review your order carefully before completing your
        transaction.
      </b>
    </p>
    </div>

    <p>
      <b>Cancellation by ECO ACADEMY</b>
    </p>

    <div className="mx-10">
    <p>
      <b><span>1.</span> Course Cancellation:</b><br />
      <span className="text-[0.5rem]">○</span> ECO ACADEMY reserves the right to cancel any course due to unforeseen
      circumstances, including but not limited to insufficient enrollment,
      faculty availability, or other factors beyond our control.
    </p>

    <p>
      <b><span>2.</span> Refunds for Cancellations by ECO ACADEMY:</b><br />
      <span className="text-[0.5rem]">○</span> In the event of a course cancellation by ECO ACADEMY, participants will
      receive a full refund of the course fee. ECO ACADEMY is not responsible for
      any additional costs incurred by participants, such as travel or
      accommodation expenses.
    </p>
    </div>

    <p>
      <b>Transfer of Enrollment</b>
    </p>

    <div className="mx-10">
    <p>
      <b>1. Participant Transfers:</b><br />
      <span className="text-[0.5rem]">○</span> Participants who are unable to attend the course may transfer their
      enrollment to another eligible orthodontist. The transfer request must be
      submitted in writing to{" "}
      <a
        href="mailto:reg.masterclass@gmail.com"
        className="text-blue-600 underline"
      >
        reg.masterclass@gmail.com
      </a>{" "}
      at least 7 days before the course start date.
    </p>

    <p>
      <span className="text-[0.5rem]">○</span> All transfers are subject to approval by ECO ACADEMY and the transferee
      must meet the course eligibility criteria.
    </p>
    </div>


    <p>
      <b>Non-Refundable Fees</b>
    </p>

    <div className="mx-10">

    <p>
      <b>1. Administrative Fees:</b><br />
      <span className="text-[0.5rem]">○</span> All administrative fees associated with cancellations are non-refundable.
    </p>

    <p>
      <b>2. No-Show Policy:</b><br />
      <span className="text-[0.5rem]">○</span> Participants who do not attend the course and have not provided prior
      notice of cancellation will not be eligible for a refund.
    </p>

    </div>

    <p>
      <b>Modification of Policy</b>
    </p>

    <p>
      ECO ACADEMY reserves the right to modify this Cancellation and Refund
      Policy at any time. Participants will be notified of any changes prior to
      the commencement of the course.
    </p>

    <p>
      <b>Contact Information</b>
    </p>

    <p>
      For any questions or concerns regarding this Cancellation and Refund
      Policy, please contact us:
    </p>

    <p>
      <b>Email:</b>{" "}
      <a
        href="mailto:reg.masterclass@gmail.com"
        className="text-blue-600 underline"
      >
        reg.masterclass@gmail.com
      </a>
    </p>

    <p>
      <b>Phone:</b>{" "}
      <a
        href="tel:9330153855"
        className="text-blue-600 underline"
      >
        9330153855
      </a>
    </p>

    <p>
      <b>Website:</b>{" "}
      <a
        href="https://masterclassinorthodontics.com/contact/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        https://masterclassinorthodontics.com/contact/
      </a>
    </p>
  </div>
</section>
<Footer/>
</>
    );;
}