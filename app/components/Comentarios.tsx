"use client";
import { playfair, inter, raleway } from "../fonts";
import FadeInSection from "./FadeInSection"; // 👈 Importamos el wrapper

export default function Comentarios() {
  const testimonios = [
    {
      nombre: "Juan Pérez",
      comentario:
        "El equipo de SC Abogadas me acompañó en todo el proceso legal con profesionalismo y empatía.",
      cargo: "Cliente en Derecho Civil",
    },
    {
      nombre: "María González",
      comentario:
        "Gracias a su asesoramiento pude resolver un conflicto laboral de manera rápida y justa.",
      cargo: "Cliente en Derecho Laboral",
    },
    {
      nombre: "Carlos Fernández",
      comentario:
        "Su defensa en mi caso penal fue impecable. Siempre atentos y claros en la comunicación.",
      cargo: "Cliente en Derecho Penal",
    },
    {
      nombre: "Lucía Romero",
      comentario:
        "Me ayudaron a estructurar mi empresa con contratos comerciales sólidos y seguros.",
      cargo: "Cliente en Derecho Comercial",
    },
    {
      nombre: "Martín López",
      comentario:
        "La atención personalizada y la claridad en cada paso me dieron mucha tranquilidad.",
      cargo: "Cliente en Derecho Civil",
    },
    {
      nombre: "Sofía Martínez",
      comentario:
        "Un equipo humano y profesional que realmente se preocupa por sus clientes.",
      cargo: "Cliente en Derecho Laboral",
    },
  ];

  return (
    <section
      id="comentarios" // 👈 agregado para scroll interno desde el Navbar
      className="bg-white text-[#1e355e] py-12 sm:py-16 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12">
        <h2 className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl font-bold mb-4`}>
          Comentarios de nuestros clientes
        </h2>
        <p className={`${inter.className} text-sm sm:text-base md:text-lg`}>
          La confianza de quienes nos eligen es nuestro mayor respaldo.
        </p>
      </div>

      {/* Carrusel infinito */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee gap-4 sm:gap-6">
          {testimonios.concat(testimonios).map((testimonio, index) => (
            <FadeInSection key={index}>
              <div
                style={{ animationDelay: `${index * 0.15}s` }}
                className="bg-[#1e355e] text-white rounded-lg shadow-md p-4 sm:p-6 w-48 sm:w-64 flex-shrink-0 text-center"
              >
                <p className={`${inter.className} text-xs sm:text-sm italic mb-3`}>
                  &quot;{testimonio.comentario}&quot;
                </p>
                <h3 className={`${raleway.className} text-sm sm:text-md font-bold`}>
                  {testimonio.nombre}
                </h3>
                <p className={`${inter.className} text-xs text-gray-200`}>
                  {testimonio.cargo}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      {/* Animación CSS */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 60s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
