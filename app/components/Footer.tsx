"use client";

import { playfair, inter } from "../fonts";
import { FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-950 py-6 px-6 sm:px-12 border-t border-slate-200/80 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        
        {/* FIRMA DE AUTOR Y COPYRIGHT */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1">
          <span className={`${inter.className} text-slate-400 font-light`}>
            © {currentYear}
          </span>
          <span className={`${playfair.className} font-medium tracking-wide text-slate-900`}>
            Cassese Digital Studio
          </span>
          <span className={`${inter.className} flex justify-center text-slate-400 font-light`}>
            • Todos los derechos reservados.
          </span>
        </div>

        {/* ENLACE DE CONTACTO */}
        <a
          href="mailto:cassese.stefano.it@gmail.com"
          className={`${inter.className} flex items-center gap-2 text-slate-500 hover:text-amber-800 transition-colors font-light tracking-wide group`}
        >
          <FaEnvelope className="text-[10px] text-amber-800/80 group-hover:scale-110 transition-transform" />
          <span className="border-b border-transparent group-hover:border-amber-800/40 pb-0.5 transition-all">
            cassese.stefano.it@gmail.com
          </span>
        </a>

      </div>
    </footer>
  );
}