import buttonImg from "../../assets/images/event-bttn.png";
import bothbg from "../../assets/images/both-side-gradient.png"

const VideoGridSection = () => {
  return (
    <section className="w-full py-16 flex flex-col items-center gap-12"
    style={{
      backgroundImage:`url(${bothbg})`,
      backgroundPosition:"center 200px",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
    }}
    >

      {/* Top Button */}
      <img
        src={buttonImg}
        alt="Gallery Button"
        className="
          w-[75%]
          sm:w-[75%]
          md:w-[65%]
          lg:w-[55%]
          mx-auto
        "
        loading="lazy"
      />

      {/* Video Grid */}
      <div className="w-full max-w-8xl px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Video 1 */}
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/7if3N-t-7UE?si=_CiYUjubNwjJThhL"
              title="YouTube video 1"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video 2 */}
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/YFpWN8O4hOc?si=fMceeSye8ooCx1NG"
              title="YouTube video 2"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video 3 */}
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/YEE90QgM_wI?si=Mota8B5RrM7nF1ID"
              title="YouTube video 3"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video 4 */}
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/pbICWBd3oLI?si=sVg_xNJP3Gh6C79L4"
              title="YouTube video 4"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default VideoGridSection;
