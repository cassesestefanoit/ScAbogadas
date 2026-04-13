"use client";
import Image from "next/image";
import { playfair, inter, raleway } from "../fonts";
import { FaLinkedin } from "react-icons/fa";
import FadeInSection from "./FadeInSection"; // 👈 Importamos el wrapper

export default function Nosotras() {
  const abogadas = [
    {
      nombre: "Dra. Carla",
      cargo: "Especialista en Derecho Civil",
      descripcion:
        "Con experiencia en contratos, sucesiones y responsabilidad civil.",
      foto: "/carla.jpg",
      linkedin: "https://linkedin.com/in/carla",
    },
    {
      nombre: "Dra. Martina",
      cargo: "Especialista en Derecho Penal",
      descripcion:
        "Defensa integral en procesos penales, garantizando el respeto de las garantías constitucionales.",
      foto: "/martina.jpg",
      linkedin: "https://linkedin.com/in/martina",
    },
  ];

  return (
    <section
      id="nosotras" // 👈 agregado para scroll interno desde el Navbar
      className="bg-[#1e355e] text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12">
        <h2 className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl font-bold mb-4`}>
          Nosotras
        </h2>
        <p className={`${inter.className} text-sm sm:text-base md:text-lg`}>
          Conocé al equipo de profesionales que lidera SC Abogadas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
        {abogadas.map((abogada, index) => (
          <FadeInSection key={index}>
            <div
              style={{ animationDelay: `${index * 0.3}s` }}
              className="bg-white text-[#1e355e] rounded-lg shadow-lg p-6 sm:p-8 flex flex-col items-center text-center"
            >
              <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] mb-6">
                <Image
                  src={abogada.foto}
                  alt={abogada.nombre}
                  width={220}
                  height={220}
                  className="rounded-full object-cover border-4 border-[#1e355e] w-full h-full"
                />
              </div>
              <h3 className={`${raleway.className} text-lg sm:text-xl md:text-2xl font-bold`}>
                {abogada.nombre}
              </h3>
              <p className={`${inter.className} text-sm sm:text-base md:text-lg italic mb-4`}>
                {abogada.cargo}
              </p>
              <p className={`${inter.className} text-xs sm:text-sm md:text-base mb-6`}>
                {abogada.descripcion}
              </p>

              <div className="flex gap-6 text-[#1e355e]">
                <a
                  href={abogada.linkedin}
                  target="_blank"
                  className="hover:text-blue-700"
                >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </a>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
