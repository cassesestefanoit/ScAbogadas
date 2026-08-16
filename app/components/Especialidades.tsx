"use client";

import Image from "next/image";
import { playfair, inter } from "../fonts";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

interface Especialidad {
  id: string;
  num: string;
  titulo: string;
  subtitulo: string;
  detalle: string;
  puntosClave: string[];
  imagen: string;
}

export default function Especialidades() {
  const especialidades: Especialidad[] = [
    {
      id: "civil",
      num: "01",
      titulo: "Derecho Civil",
      subtitulo: "Patrimonio, Contratos & Sucesiones",
      detalle:
        "Brindamos asesoramiento integral en la protección del patrimonio personal y familiar, garantizando solidez jurídica en cada contrato, litigio o proceso sucesorio.",
      puntosClave: [
        "Sucesiones & Declaratorias de Herederos",
        "Redacción y Revisión de Contratos",
        "Responsabilidad Civil & Indemnizaciones",
      ],
      imagen:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "laboral",
      num: "02",
      titulo: "Derecho Laboral",
      subtitulo: "Prevención Corporativa & Conflictos Laborales",
      detalle:
        "Especializadas en la gestión preventiva de contingencias laborales para empresas y en la defensa técnica de los derechos de los trabajadores.",
      puntosClave: [
        "Asesoramiento Preventivo para PYMES",
        "Despidos, Sanciones & Liquidaciones",
        "Reclamos ante ART & Accidentes",
      ],
      imagen:
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "comercial",
      num: "03",
      titulo: "Derecho Comercial",
      subtitulo: "Estructuración de Negocios & Acuerdos",
      detalle:
        "Diseñamos estrategias legales para optimizar la operativa mercantil, proteger inversiones y resolver litigios comerciales complejos.",
      puntosClave: [
        "Contratación Mercantil & Acuerdos",
        "Societario & Gobierno Corporativo",
        "Gestión de Deuda & Negociaciones",
      ],
      imagen:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "familia",
      num: "04",
      titulo: "Familia & Seguros",
      subtitulo: "Acompañamiento Humano & Reclamos de Cobertura",
      detalle:
        "Atención personalizada y cercana en procesos delicados de familia y máxima firmeza en negociaciones contra compañías aseguradoras.",
      puntosClave: [
        "Divorcios & Acuerdos Reguladores",
        "Alimentos & Régimen de Comunicación",
        "Negociación de Siniestros & Coberturas",
      ],
      imagen:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  return (
    <section
      id="especialidades"
      className="bg-slate-950 text-white py-20 sm:py-32 px-4 sm:px-12 border-t border-white/10 relative z-10"
    >
      {/* RETÍCULA DE FONDO */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none hidden xl:grid grid-cols-12 px-6 sm:px-12">
        <div className="col-span-2 border-r border-white/5 h-full" />
        <div className="col-span-8 border-r border-white/5 h-full" />
        <div className="col-span-2 h-full" />
      </div>

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* ENCABEZADO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-amber-200/80 font-semibold block mb-3">
              Áreas de Práctica — 02
            </span>
            <h2
              className={`${playfair.className} text-4xl sm:text-7xl font-normal uppercase tracking-tight text-slate-100`}
            >
              Especialidades.
            </h2>
          </div>
          <p
            className={`${inter.className} text-slate-400 text-sm sm:text-base font-light max-w-md leading-relaxed`}
          >
            Soluciones jurídicas integrales adaptadas a la complejidad de cada
            caso.
          </p>
        </div>

        {/* ESTRUCTURA PRINCIPAL */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start relative">
          {/* LATERAL IZQUIERDO */}
          <div className="hidden xl:flex xl:col-span-2 sticky top-36 flex-col items-start space-y-8 pt-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-200/60 font-semibold block">
              ESTUDIO JURÍDICO
            </span>
            <div className="w-[1px] h-36 bg-gradient-to-b from-amber-200/40 via-white/10 to-transparent my-2" />
            <div className="flex items-center gap-3 rotate-[-90deg] origin-left translate-y-12">
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-medium whitespace-nowrap">
                Scroll para explorar
              </span>
              <div className="w-8 h-[1px] bg-slate-500" />
            </div>
          </div>

          {/* CENTRO: TARJETAS APILADAS */}
          <div className="xl:col-span-8 relative">
            {especialidades.map((esp, index) => (
              <div
                key={esp.id}
                className="sticky w-full bg-white text-slate-950 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 border border-slate-200 mb-8 sm:mb-12 last:mb-0"
                style={{
                  top: `calc(7rem + ${index * 1.5}rem)`,
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0 lg:min-h-[440px]">
                  {/* COLUMNA TEXTO */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-3">
                        <span
                          className={`${playfair.className} text-2xl sm:text-4xl text-amber-800 font-semibold`}
                        >
                          {esp.num}
                        </span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold">
                          {esp.subtitulo}
                        </span>
                      </div>

                      <h3
                        className={`${playfair.className} text-2xl sm:text-3xl font-normal tracking-tight text-slate-950 mb-3`}
                      >
                        {esp.titulo}
                      </h3>

                      <p
                        className={`${inter.className} text-slate-600 text-xs sm:text-sm font-light leading-relaxed`}
                      >
                        {esp.detalle}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-slate-200">
                        {esp.puntosClave.map((punto, pIdx) => (
                          <li
                            key={pIdx}
                            className={`${inter.className} text-xs text-slate-800 flex items-center gap-2 font-medium`}
                          >
                            <FaCheck className="text-amber-800 text-[10px] shrink-0" />
                            <span>{punto}</span>
                          </li>
                        ))}
                      </ul>

                      <div>
                        <a
                          href="#contacto"
                          className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-slate-950 text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-full hover:bg-amber-800 transition-colors duration-300"
                        >
                          <span>Consultar por esta área</span>
                          <FaArrowRight className="text-xs" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* COLUMNA IMAGEN */}
                  <div className="lg:col-span-5 relative h-48 sm:h-64 lg:h-auto border-t lg:border-t-0 lg:border-l border-slate-200 bg-slate-100">
                    <Image
                      src={esp.imagen}
                      alt={esp.titulo}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent lg:hidden" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LATERAL DERECHO */}
          <div className="hidden xl:flex xl:col-span-2 sticky top-36 flex-col justify-between h-[400px] pt-2 pl-6 select-none pointer-events-none">
            <div className="relative">
              <span
                className={`${playfair.className} text-8xl font-bold tracking-tighter text-white/10 block leading-none`}
              >
                C&amp;S
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-200/40 font-semibold block mt-3 pl-1">
                ABOGADAS
              </span>
              <div className="w-12 h-[1px] bg-amber-200/20 mt-4" />
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold block">
                  BUENOS AIRES
                </span>
                <span className="text-[9px] tracking-widest text-slate-500 font-mono block mt-0.5">
                  34.6037° S, 58.3816° W
                </span>
              </div>
              <p
                className={`${inter.className} text-[11px] text-slate-500 font-light leading-tight`}
              >
                Atención presencial &amp; consultoría digital integral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}