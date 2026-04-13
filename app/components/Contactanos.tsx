"use client";
import { useState } from "react";
import { playfair, inter, raleway } from "../fonts";
import { FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";
import FadeInSection from "./FadeInSection"; // 👈 Importamos el wrapper

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    consulta: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("https://script.google.com/macros/s/TU_URL_EXEC/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("Tu consulta fue enviada correctamente.");
      setFormData({ nombre: "", telefono: "", consulta: "" });
    } else {
      alert("Hubo un error, intentá nuevamente.");
    }
  };

  return (
    <section
      id="contacto" // 👈 agregado para scroll interno desde el Navbar
      className="bg-[#1e355e] py-12 sm:py-20 px-4 sm:px-6 flex justify-center items-center"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl max-w-6xl w-full p-6 sm:p-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-start">
          
          {/* Información de contacto */}
          <FadeInSection>
            <div
              style={{ animationDelay: "0.2s" }}
              className="text-white"
            >
              <h2 className={`${playfair.className} text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-12 text-left`}>
                Contactanos
              </h2>
              <div className="space-y-6 sm:space-y-10 text-base sm:text-xl">
                <div className="flex items-center gap-4 sm:gap-6">
                  <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  <p className={`${inter.className}`}>saravia.cassese.abogadas@gmail.com</p>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  <p className={`${inter.className}`}>+54 1159731221</p>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <FaClock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  <p className={`${inter.className}`}>Lunes a Viernes 9:00 – 18:00 hs</p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Formulario */}
          <FadeInSection>
            <form
              onSubmit={handleSubmit}
              style={{ animationDelay: "0.4s" }}
              className="bg-white text-[#1e355e] rounded-lg shadow-lg p-6 sm:p-8 md:p-10 w-full"
            >
              <h3 className={`${playfair.className} text-lg sm:text-xl md:text-2xl font-bold mb-6`}>
                Análisis inicial sin cargo
              </h3>
              <p className={`${inter.className} text-xs sm:text-sm md:text-base mb-6`}>
                Dejanos tus datos y un abogado especialista revisará tu situación y te contactará dentro de las próximas 24 horas.
              </p>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                className="w-full p-2 sm:p-3 mb-4 border rounded"
              />
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                className="w-full p-2 sm:p-3 mb-4 border rounded"
              />
              <textarea
                name="consulta"
                value={formData.consulta}
                onChange={handleChange}
                placeholder="Tu consulta"
                className="w-full p-2 sm:p-3 mb-4 border rounded"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className={`${raleway.className} bg-[#1e355e] text-white px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base md:text-lg font-bold transition-colors duration-300 hover:bg-white hover:text-[#1e355e] w-full`}
              >
                Enviar consulta →
              </button>
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
