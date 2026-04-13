"use client";
import { playfair, inter, raleway } from "../fonts";

export default function Hero() {
  return (
 
      <section
        id="inicio" // 👈 agregado para scroll interno desde el Navbar
        className="relative flex items-center justify-center bg-[#1e355e] py-8"
      >
        {/* Contenedor de la imagen */}
        <div
          className="relative w-[95%] sm:w-[90%] h-[70vh] sm:h-[80vh] mx-auto bg-cover bg-center rounded-xl overflow-hidden flex items-center justify-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
          {/* Overlay azul */}
          <div className="absolute inset-0 bg-[#1e355e] opacity-60"></div>

          {/* Contenido centrado */}
          <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-2xl sm:max-w-3xl mx-auto py-12">
            <h1
              className={`${playfair.className} text-3xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg`}
            >
              Defensa y asesoramiento legal de confianza
            </h1>
            <p
              className={`${inter.className} text-base sm:text-lg md:text-2xl mb-8 drop-shadow-md`}
            >
              En SC Abogadas brindamos soluciones claras y efectivas para proteger tus derechos.
            </p>
            <button
              className={`${raleway.className} bg-[#1e355e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg md:text-xl font-bold transition-colors duration-300 hover:bg-white hover:text-[#1e355e]`}
            >
              Solicitar consulta
            </button>
          </div>
        </div>
      </section>
  );
}
