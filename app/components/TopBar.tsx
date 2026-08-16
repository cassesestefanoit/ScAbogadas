import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { raleway } from "../fonts";

export default function Topbar() {
  return (
    <div
      className={`${raleway.className} text-white/80 text-xs sm:text-sm border-b border-white/10 px-6 sm:px-12 py-2.5 flex flex-col sm:flex-row justify-between items-center gap-2 bg-transparent`}
    >
      <span className="tracking-widest uppercase text-[10px] text-white/60 font-medium">
        Estudio Jurídico — Buenos Aires
      </span>

      <div className="flex items-center gap-6">
        <a
          href="mailto:info@scabogadas.com"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <FaEnvelope className="text-amber-200/80 text-xs" />
          <span>info@scabogadas.com</span>
        </a>
        <a
          href="tel:+541112345678"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <FaPhoneAlt className="text-amber-200/80 text-xs" />
          <span>+54 11 1234-5678</span>
        </a>
      </div>
    </div>
  );
}