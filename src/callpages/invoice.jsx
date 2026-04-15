import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Invoice = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch invoice
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/invoice/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch invoice");
        return res.json();
      })
      .then(setInvoice)
      .catch((err) => console.error("Error fetching invoice:", err));
  }, [id]);

  if (!invoice) {
    return <p className="text-center mt-10">Loading invoice...</p>;
  }

  // Handle Razorpay payment
  const handlePayment = async () => {
    try {
      setLoading(true);

      // 1️⃣ Create order
      const res = await fetch(`${API_BASE_URL}/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: invoice.total_amount, // rupees
          invoiceId: invoice.id,
        }),
      });

      const order = await res.json();

      if (!order.id) {
        console.error("Order response:", order);
        alert("Unable to create order");
        setLoading(false);
        return;
      }

      // 2️⃣ Ensure Razorpay SDK loaded
      if (!window.Razorpay) {
        alert("Razorpay SDK not loaded");
        setLoading(false);
        return;
      }

      // 3️⃣ Razorpay options
      const options = {
        key: "rzp_live_S6xu1hR9EyQN9J", // frontend key
        amount: order.amount,          // paise
        currency: order.currency,
        order_id: order.id,
        name: "Eco Academy",
        description: `Payment for ${invoice.course}`,

        handler: async function (response) {
  try {
    const verifyRes = await fetch(`${API_BASE_URL}/api/verify-payment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
        invoiceId: invoice.id,
      }),
    });

    const result = await verifyRes.json();

    if (!verifyRes.ok || !result.success) {
      alert("Payment completed but verification failed. Please contact support.");
      return;
    }

    // ✅ redirect ONLY after backend confirms DB insert
    window.location.href = `/payment-success/${invoice.id}`;

  } catch (err) {
    console.error("Verification failed:", err);
    alert("Payment done but verification failed. Please contact support.");
  }
},



        prefill: {
          name: invoice.full_name,
          email: invoice.email,
          contact: invoice.mobile,
        },

        notes: {
          invoice_id: invoice.id,
        },

        theme: {
          color: "#F59E0B",
        },

        modal: {
          ondismiss: function () {
            alert("Payment cancelled");
          },
        },
      };

      // 4️⃣ Open checkout
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment error:", err);
      alert("Payment failed. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-3xl mx-auto my-10 p-6 py-40 bg-yellow-100 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Invoice</h1>

      <p className="text-lg font-semibold text-gray-600 mb-4">
        Course: {invoice.course}
      </p>

      <p><b>Name:</b> {invoice.full_name}</p>
      <p><b>Gender:</b> {invoice.gender}</p>
      <p><b>Membership:</b>{invoice.membership_no}</p>
      <p><b>Email:</b> {invoice.email}</p>
      <p><b>Mobile:</b> {invoice.mobile}</p>
      <p><b>Whatsapp:</b> {invoice.whatsapp}</p>
      <p><b>Diet:</b> {invoice.diet}</p>

      <hr className="my-4 border-gray-400" />

      <p>Base Amount: ₹{invoice.base_amount}</p>
      <p>GST (18%): ₹{invoice.gst_amount}</p>
      <p className="font-bold text-lg">
        Total Amount: ₹{invoice.total_amount}
      </p>

      <button
        onClick={handlePayment}
        disabled={loading}
        className="mt-6 w-full py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition disabled:opacity-50"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
    <Footer/>
    </>
  );
};

export default Invoice;
