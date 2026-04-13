"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { playfair, raleway } from "../fonts";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 sm:px-8 py-4 flex items-center justify-between relative">
      {/* Logo + Nombre */}
      <div className="flex items-center gap-4">
        <Image
          src="/logo.png"
          alt="Logo SC Abogadas"
          width={60}
          height={60}
          className="object-contain"
        />
        <div className="flex flex-col">
          <span className={`${playfair.className} text-2xl sm:text-3xl font-bold text-black`}>
            Cassese & Saravia
          </span>
          <span className={`${raleway.className} text-sm sm:text-base text-black`}>
            ABOGADAS | UBA
          </span>
        </div>
      </div>

      {/* Botón hamburguesa en móvil */}
      <button
        className="sm:hidden text-2xl text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Links de navegación (desktop) */}
      <div
        className={`${raleway.className} hidden sm:flex gap-6 text-black sm:text-lg`}
      >
        <Link href="#nosotras" className="hover:text-blue-900 transition-colors">
          Nosotras
        </Link>
        <Link href="#especialidades" className="hover:text-blue-900 transition-colors">
          Especialidades
        </Link>
        <Link href="#comentarios" className="hover:text-blue-900 transition-colors">
          Comentarios
        </Link>
        <Link href="#contacto" className="hover:text-blue-900 transition-colors">
          Contactanos
        </Link>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 sm:hidden">
          <Link href="#inicio" className="text-lg text-black hover:text-blue-900 transition-colors" onClick={() => setIsOpen(false)}>
            Inicio
          </Link>
          <Link href="#nosotras" className="text-lg text-black hover:text-blue-900 transition-colors" onClick={() => setIsOpen(false)}>
            Nosotras
          </Link>
          <Link href="#especialidades" className="text-lg text-black hover:text-blue-900 transition-colors" onClick={() => setIsOpen(false)}>
            Especialidades
          </Link>
          <Link href="#comentarios" className="text-lg text-black hover:text-blue-900 transition-colors" onClick={() => setIsOpen(false)}>
            Comentarios
          </Link>
          <Link href="#contacto" className="text-lg text-black hover:text-blue-900 transition-colors" onClick={() => setIsOpen(false)}>
            Contactanos
          </Link>
        </div>
      )}
    </nav>
  );
}
