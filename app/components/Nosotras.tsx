"use client";

import Image from "next/image";
import { playfair, inter } from "../fonts";
import { FaLinkedinIn, FaGraduationCap } from "react-icons/fa";

export default function Nosotras() {
  return (
    <section
      id="nosotras"
      className="bg-white text-slate-950 py-16 sm:py-28 md:py-36 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-32 md:space-y-44">
        {/* BLOQUE 1: TÍTULO MASIVO Y CONCEPTO */}
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold block mb-3 sm:mb-4">
            Sobre el Estudio — 01
          </span>
          <h2
            className={`${playfair.className} text-5xl sm:text-7xl md:text-9xl font-normal tracking-tight uppercase text-slate-950 leading-none mb-8 sm:mb-12`}
          >
            Nosotras.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-4 sm:space-y-6">
              <p
                className={`${inter.className} text-xl sm:text-3xl md:text-4xl font-light leading-snug text-slate-900 tracking-tight`}
              >
                Entendemos el ejercicio del derecho desde la prevención
                estratégica, el rigor técnico y la cercanía constante.
              </p>
              <p
                className={`${inter.className} text-base sm:text-lg font-light leading-relaxed text-slate-600 max-w-2xl`}
              >
                Formadas en la Universidad de Buenos Aires (UBA), brindamos
                asesoramiento integral tanto a personas como a empresas,
                transformando la complejidad normativa en respuestas claras y
                ejecutables.
              </p>
            </div>

            <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8 space-y-6">
              <div>
                <span
                  className={`${playfair.className} text-3xl sm:text-4xl font-normal text-slate-950 block mb-1`}
                >
                  UBA
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
                  Formación de Excelencia
                </span>
              </div>
              <div>
                <span
                  className={`${playfair.className} text-3xl sm:text-4xl font-normal text-slate-950 block mb-1`}
                >
                  100%
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
                  Atención Personalizada
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BLOQUE 2: CARLA CASSESE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-3 py-1 rounded-full">
              <FaGraduationCap className="text-slate-700 text-xs" />
              <span className="text-[10px] uppercase tracking-widest text-slate-600 font-semibold">
                Abogada UBA
              </span>
            </div>

            <h3
              className={`${playfair.className} text-3xl sm:text-5xl md:text-6xl font-normal text-slate-950`}
            >
              Carla Cassese
            </h3>

            <p className="text-amber-800 text-xs uppercase tracking-widest font-bold">
              Socia Fundadora — Derecho Laboral &amp; Corporativo
            </p>

            <p
              className={`${inter.className} text-slate-600 text-base sm:text-lg font-light leading-relaxed`}
            >
              Especializada en el análisis preventivo de contingencias laborales
              y el asesoramiento jurídico integral para empresas y trabajadores.
              Su enfoque combina solidez técnica con una visión clara orientada
              a la resolución de conflictos complejos.
            </p>

            <div className="pt-2 sm:pt-4">
              <a
                href="https://www.linkedin.com/in/carla-cassese-309504216/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-slate-950 hover:text-amber-700 transition-colors"
              >
                <span className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center bg-slate-50">
                  <FaLinkedinIn className="text-xs" />
                </span>
                <span>Perfil de LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative w-full h-[350px] sm:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="/carla.jpg"
                alt="Carla Cassese"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* BLOQUE INTERMEDIO: CITA EDITORIAL Y COLUMNAS UBA */}
        <div className="my-12 sm:my-20 bg-slate-950 text-white rounded-3xl p-6 sm:p-12 md:p-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-white/10">
          <div className="md:col-span-7 space-y-3 sm:space-y-4">
            <span
              className={`${playfair.className} text-4xl sm:text-5xl text-amber-200/50 block`}
            >
              “
            </span>
            <blockquote
              className={`${playfair.className} text-xl sm:text-3xl md:text-4xl font-light italic leading-snug text-slate-100 -mt-4 sm:-mt-6 mb-4 sm:mb-6`}
            >
              Nuestra prioridad es transformar la incertidumbre legal en
              tranquilidad y claridad estratégica para cada cliente.
            </blockquote>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-amber-200/80 font-semibold block">
              Sello UBA — Cassese &amp; Saravia
            </span>
          </div>

          <div className="md:col-span-5 relative h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden border border-white/15 group">
            <Image
              src="/FacuDerecho.jpg"
              alt="Facultad de Derecho UBA - Columnas"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* BLOQUE 3: MARTINA SARAVIA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="relative w-full h-[350px] sm:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="/martina.jpg"
                alt="Martina Lourdes Saravia"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-3 py-1 rounded-full">
              <FaGraduationCap className="text-slate-700 text-xs" />
              <span className="text-[10px] uppercase tracking-widest text-slate-600 font-semibold">
                Abogada UBA
              </span>
            </div>

            <h3
              className={`${playfair.className} text-3xl sm:text-5xl md:text-6xl font-normal text-slate-950`}
            >
              Martina L. Saravia
            </h3>

            <p className="text-amber-800 text-xs uppercase tracking-widest font-bold">
              Socia Fundadora — Civil, Familia &amp; Seguros
            </p>

            <p
              className={`${inter.className} text-slate-600 text-base sm:text-lg font-light leading-relaxed`}
            >
              Enfocada en brindar soluciones efectivas en negociaciones de daños
              y perjuicios, procesos de familia y litigios civiles. Se destaca
              por un acompañamiento humano, cercano y riguroso en cada etapa del
              proceso.
            </p>

            <div className="pt-2 sm:pt-4">
              <a
                href="https://www.linkedin.com/in/martina-lourdes-saravia-2aa17a246/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-slate-950 hover:text-amber-700 transition-colors"
              >
                <span className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center bg-slate-50">
                  <FaLinkedinIn className="text-xs" />
                </span>
                <span>Perfil de LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}