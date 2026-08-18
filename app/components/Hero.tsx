"use client";

import { useState } from "react";
import { playfair, inter } from "../fonts";
import { FaArrowRight } from "react-icons/fa";
import ModalTurnos from "./ModalTurnos";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="inicio"
        className="relative text-white pt-24 pb-16 md:pt-32 md:pb-36 overflow-hidden flex items-center justify-center min-h-[80vh] md:min-h-[70vh]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center w-full flex flex-col items-center justify-center">
          
          {/* Titular Principal Impactante */}
          <h1
            className={`${playfair.className} text-4xl sm:text-7xl md:text-8xl font-normal text-white leading-[1.1] sm:leading-[1.04] tracking-tight mb-6 sm:mb-8 drop-shadow-lg text-center`}
          >
            Una mirada clara sobre <br className="hidden sm:inline" />
            <span className="italic font-light text-amber-100/90">el Derecho.</span>
          </h1>

          {/* Bajada Directa */}
          <p
            className={`${inter.className} text-slate-200 text-sm sm:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 drop-shadow text-center`}
          >
            Asesoramiento jurídico integral con atención personalizada y formación en la Universidad de Buenos Aires.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5 sm:gap-4 w-full max-w-md sm:max-w-none">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className={`${inter.className} group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-950 hover:bg-amber-100 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-2xl hover:scale-105 cursor-pointer`}
            >
              <span>Reservar reunión</span>
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="#nosotras"
              className={`${inter.className} w-full sm:w-auto text-center bg-black/30 backdrop-blur-md border border-white/25 text-white hover:bg-white/15 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:scale-105`}
            >
              Conocer el Estudio
            </a>
          </div>

        </div>
      </section>

      {/* MODAL DE TURNOS */}
      <ModalTurnos
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}