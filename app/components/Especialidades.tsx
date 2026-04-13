"use client";
import { useState, ReactNode } from "react";
import { playfair, inter, raleway } from "../fonts";
import { FaHome, FaBriefcase, FaGavel, FaHandshake } from "react-icons/fa";

interface Especialidad {
  titulo: string;
  breve: string;
  detalle: string;
  icon: ReactNode;
}

export default function Especialidades() {
  const especialidades: Especialidad[] = [
    {
      titulo: "Derecho Civil",
      breve: "Contratos, sucesiones y responsabilidad civil.",
      detalle:
        "Asesoramos en la redacción y revisión de contratos, gestión de sucesiones y representación en casos de responsabilidad civil.",
      icon: <FaHome className="text-xl sm:text-2xl ml-2" />,
    },
    {
      titulo: "Derecho Penal",
      breve: "Defensa en procesos penales.",
      detalle:
        "Brindamos defensa integral en procesos penales, garantizando el respeto de las garantías constitucionales y el debido proceso.",
      icon: <FaGavel className="text-xl sm:text-2xl ml-2" />,
    },
    {
      titulo: "Derecho Laboral",
      breve: "Conflictos laborales y asesoramiento empresarial.",
      detalle:
        "Representamos tanto a trabajadores como a empresas en conflictos laborales, despidos, indemnizaciones y negociaciones colectivas.",
      icon: <FaBriefcase className="text-xl sm:text-2xl ml-2" />,
    },
    {
      titulo: "Derecho Comercial",
      breve: "Contratos mercantiles y asesoramiento empresarial.",
      detalle:
        "Asesoramos en operaciones comerciales, contratos mercantiles y estrategias legales para empresas.",
      icon: <FaHandshake className="text-xl sm:text-2xl ml-2" />,
    },
  ];

  const [selectedCard, setSelectedCard] = useState<Especialidad | null>(null);

  return (
    <section
      id="especialidades"
      className="bg-white text-[#1e355e] py-12 sm:py-16 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12">
        <h2 className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl font-bold mb-4`}>
          Nuestras Especialidades
        </h2>
        <p className={`${inter.className} text-sm sm:text-base md:text-lg`}>
          Áreas en las que brindamos soluciones claras y efectivas.
        </p>
      </div>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {especialidades.map((esp, index) => (
          <div
            key={index}
            className="bg-[#1e355e] text-white rounded-lg shadow-lg p-6 sm:p-8 flex flex-col items-center transition-transform hover:scale-105"
          >
            <div className="flex items-center justify-between w-full mb-2">
              <h3 className={`${raleway.className} text-lg sm:text-xl font-bold`}>
                {esp.titulo}
              </h3>
              {esp.icon}
            </div>
            <p className={`${inter.className} text-xs sm:text-sm text-center mb-4`}>
              {esp.breve}
            </p>
            <button
              onClick={() => setSelectedCard(esp)}
              className={`${raleway.className} bg-white text-[#1e355e] px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors duration-300 hover:bg-[#1e355e] hover:text-white`}
            >
              Solicitar información
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-gray-300 bg-opacity-70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white text-[#1e355e] rounded-lg shadow-2xl p-6 sm:p-10 w-full sm:w-4/5 md:w-3/5 max-h-[80vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className={`${playfair.className} text-xl sm:text-2xl md:text-3xl font-bold`}>
                {selectedCard.titulo}
              </h3>
              {selectedCard.icon}
            </div>
            <p className={`${inter.className} text-sm sm:text-base md:text-lg mb-6`}>
              {selectedCard.detalle}
            </p>

            {/* Botón único */}
            <button
              className={`${raleway.className} bg-[#1e355e] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-lg font-bold transition-colors duration-300 hover:bg-white hover:text-[#1e355e]`}
            >
              Contactanos
            </button>

            {/* Botón cerrar */}
            <button
              className="absolute top-3 right-3 text-[#1e355e] font-bold text-lg"
              onClick={() => setSelectedCard(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
