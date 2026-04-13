import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { raleway } from "../fonts";

export default function Topbar() {
  return (
    <div
      className={`${raleway.className} text-white text-sm sm:text-base md:text-lg flex flex-col sm:flex-row justify-center sm:justify-end gap-2 sm:gap-6 px-4 sm:px-8 py-2`}
      style={{ backgroundColor: "#1e355e" }}
    >
      <span className="flex items-center gap-2 hover:text-gray-200 transition-colors justify-center sm:justify-start">
        <FaEnvelope /> info@scabogadas.com
      </span>
      <span className="flex items-center gap-2 hover:text-gray-200 transition-colors justify-center sm:justify-start">
        <FaPhoneAlt /> +54 11 1234-5678
      </span>
    </div>
  );
}
