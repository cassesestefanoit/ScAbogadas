"use client";

import Link from "next/link";
import { useState } from "react";
import { playfair, raleway } from "../fonts";
import { FaBars, FaTimes } from "react-icons/fa";
import ModalTurnos from "./ModalTurnos"; // Importación del modal

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/40 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-6 sm:px-12 py-3.5 flex items-center justify-between">
          
          {/* LOGO / IDENTIDAD */}
          <Link href="#inicio" className="flex flex-col group">
            <span
              className={`${playfair.className} text-xl sm:text-2xl font-normal tracking-wide text-white transition-opacity group-hover:opacity-90`}
            >
              Cassese &amp; Saravia
            </span>
            <span
              className={`${raleway.className} text-[9px] sm:text-[10px] tracking-[0.25em] text-white/60 uppercase font-light`}
            >
              Abogadas | UBA
            </span>
          </Link>

          {/* PÍLDORA FLOTANTE - LINKS PRINCIPALES */}
          <div
            className={`${raleway.className} hidden md:flex items-center gap-6 lg:gap-8 bg-black/40 backdrop-blur-lg border border-white/15 px-6 py-2 rounded-full text-white text-[11px] tracking-widest uppercase font-light shadow-xl`}
          >
            <Link href="#inicio" className="hover:text-amber-200 transition-colors">
              Inicio
            </Link>
            <Link href="#nosotras" className="hover:text-amber-200 transition-colors">
              Nosotras
            </Link>
            <Link href="#especialidades" className="hover:text-amber-200 transition-colors">
              Especialidades
            </Link>
            <Link href="#contacto" className="hover:text-amber-200 transition-colors">
              Contacto
            </Link>
          </div>

          {/* BOTÓN CTA REUNIÓN */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className={`${raleway.className} bg-white text-slate-950 hover:bg-amber-100 hover:text-slate-900 px-5 py-2 rounded-full text-[11px] uppercase tracking-wider font-semibold transition-all duration-300 shadow-lg inline-block whitespace-nowrap cursor-pointer`}
            >
              Reservar Reunión
            </button>
          </div>

          {/* MENÚ HAMBURGUESA MOBILE */}
          <button
            className="md:hidden text-xl text-white focus:outline-none p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </nav>

        {/* MENÚ DESPLEGABLE MOBILE */}
        {isOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 flex flex-col items-center gap-5 py-8 shadow-2xl animate-fadeIn">
            <Link
              href="#inicio"
              className={`${raleway.className} text-xs tracking-widest uppercase text-slate-200 hover:text-amber-200`}
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#nosotras"
              className={`${raleway.className} text-xs tracking-widest uppercase text-slate-200 hover:text-amber-200`}
              onClick={() => setIsOpen(false)}
            >
              Nosotras
            </Link>
            <Link
              href="#especialidades"
              className={`${raleway.className} text-xs tracking-widest uppercase text-slate-200 hover:text-amber-200`}
              onClick={() => setIsOpen(false)}
            >
              Especialidades
            </Link>
            <Link
              href="#contacto"
              className={`${raleway.className} text-xs tracking-widest uppercase text-slate-200 hover:text-amber-200`}
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <button
              type="button"
              className={`${raleway.className} text-xs tracking-widest uppercase bg-white text-slate-950 px-6 py-2.5 rounded-full font-semibold mt-2 cursor-pointer`}
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
            >
              Reservar Reunión
            </button>
          </div>
        )}
      </header>

      {/* RENDERIZADO DEL MODAL */}
      <ModalTurnos isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}