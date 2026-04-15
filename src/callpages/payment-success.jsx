import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PaymentSuccess = () => {
  // const { id } = useParams(); // invoice id (optional use)

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Thank You!
        </h1>

        <p className="text-lg text-gray-700">
          Payment done successfully 🎉
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PaymentSuccess;
