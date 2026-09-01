import gridBg from "../assets/images/from-bg.png";
import Navbar from "../components/Navbar";
import banner1 from "../assets/images/WEBSITE ACKNOWLEGMENT.png";

export default function SparkSuccess() {
  return (
    <>
      <Navbar />

      <div
        className="min-h-screen flex items-start justify-center px-6 pt-[40%] md:pt-[30%] lg:pt-[22%] xl:pt-[12%]"
        style={{
          backgroundImage: `linear-gradient(
            rgba(255,255,255,0.78),
            rgba(255,255,255,0.78)
          ), url(${gridBg})`,
          backgroundSize: "contain",
        }}
      >
        <img
          src={banner1}
          alt="Website Acknowledgement"
          className="w-full max-w-5xl h-auto"
        />
      </div>
    </>
  );
}