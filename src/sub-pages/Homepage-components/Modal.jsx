export default function Modal({ image, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl"
      >
        ×
      </button>

      {/* Image */}
      <img
        src={image}
        alt="Speaker"
        className="max-w-[90%] max-h-[85%] rounded-lg"
        loading="lazy"
      />
    </div>
  );
}
