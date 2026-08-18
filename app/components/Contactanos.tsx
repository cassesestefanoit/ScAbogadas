"use client";

import { useState } from "react";
import { playfair, inter } from "../fonts";
import { FaWhatsapp, FaInstagram, FaRegEnvelope, FaArrowRight, FaClock } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";
import FadeInSection from "./FadeInSection";
import ModalTurnos from "./ModalTurnos";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    consulta: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      setFormData({ nombre: "", telefono: "", email: "", consulta: "" });
    } else {
      alert("Hubo un error, intentá nuevamente.");
    }
  };

  const handleSolicitarTurno = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="contacto" className="relative z-20 bg-white text-slate-950 py-24 sm:py-36 px-6 sm:px-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* ENCABEZADO EDITORIAL */}
          <FadeInSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
              <div>
                <h2 className={`${playfair.className} text-5xl sm:text-7xl font-normal uppercase tracking-tight text-slate-950`}>
                  Contacto.
                </h2>
              </div>
              <p className={`${inter.className} text-slate-600 text-sm sm:text-base font-light max-w-md leading-relaxed`}>
                Iniciemos una conversación sobre su caso con absoluta confidencialidad y rigor profesional.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* COLUMNA IZQUIERDA: DATOS, REDES & HORARIOS */}
            <div className="lg:col-span-5 space-y-12">
              
              {/* CANALES DIRECTOS DE CONTACTO */}
              <FadeInSection>
                <div className="space-y-6">
                  <span className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold block">
                    Canales de Comunicación
                  </span>
                  
                  <div className="space-y-4">
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/541159731221"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between pb-4 border-b border-slate-200 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center text-white text-lg flex-shrink-0 group-hover:bg-[#25D366] transition-colors duration-300">
                          <FaWhatsapp />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-950 text-sm group-hover:text-[#25D366] transition-colors duration-300">
                            WhatsApp
                          </h5>
                          <p className="text-slate-400 text-xs font-medium">
                            Respuesta rápida
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MdChevronRight className="text-slate-400 group-hover:translate-x-1 group-hover:text-[#25D366] transition-all duration-300" />
                      </div>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between pb-4 border-b border-slate-200 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center text-white text-lg flex-shrink-0 group-hover:bg-gradient-to-tr group-hover:from-[#f9ce34] group-hover:via-[#ee2a7b] group-hover:to-[#6228d7] transition-all duration-300">
                          <FaInstagram />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-950 text-sm group-hover:text-[#ee2a7b] transition-colors duration-300">
                            Instagram
                          </h5>
                          <p className="text-slate-400 text-xs font-medium">
                            Seguinos para ver más
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MdChevronRight className="text-slate-400 group-hover:translate-x-1 group-hover:text-[#ee2a7b] transition-all duration-300" />
                      </div>
                    </a>

                    {/* Correo Electrónico */}
                    <a
                      href="mailto:saravia.cassese.abogadas@gmail.com"
                      className="flex items-center justify-between pb-4 border-b border-slate-200 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center text-white text-lg flex-shrink-0 group-hover:bg-amber-800 transition-colors duration-300">
                          <FaRegEnvelope />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-950 text-sm group-hover:text-amber-800 transition-colors duration-300">
                            Correo electrónico
                          </h5>
                          <p className="text-slate-400 text-xs font-medium">
                            Escribinos tu consulta
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MdChevronRight className="text-slate-400 group-hover:translate-x-1 group-hover:text-amber-800 transition-all duration-300" />
                      </div>
                    </a>
                  </div>
                </div>
              </FadeInSection>

              {/* HORARIOS Y RESERVA DE TURNOS */}
              <FadeInSection>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-6">
                  <div className="flex items-center gap-3 text-amber-800">
                    <FaClock className="text-lg" />
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                      Atención Presencial &amp; Virtual
                    </span>
                  </div>

                  <div>
                    <h4 className={`${playfair.className} text-xl text-slate-950 font-normal mb-2`}>
                      Horarios de Consulta
                    </h4>
                    <p className={`${inter.className} text-slate-600 text-sm font-light leading-relaxed`}>
                      Lunes a Viernes de 09:00 a 18:00 hs.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleSolicitarTurno}
                    className="w-full inline-flex items-center justify-center gap-3 bg-slate-950 text-white text-xs uppercase tracking-widest font-semibold px-6 py-4 rounded-full hover:bg-amber-800 transition-colors duration-300 cursor-pointer"
                  >
                    <span>Solicitar Turno</span>
                    <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </FadeInSection>

            </div>

            {/* COLUMNA DERECHA: FORMULARIO */}
            <div className="lg:col-span-7">
              <FadeInSection>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <h3 className={`${playfair.className} text-3xl font-normal text-slate-950 mb-2`}>
                      Análisis de Caso
                    </h3>
                    <p className={`${inter.className} text-slate-600 text-sm font-light`}>
                      Complete el formulario y evaluaremos su situación jurídica a la brevedad.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold block mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. María González"
                        className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-950 text-sm font-light focus:outline-none focus:border-slate-950 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold block mb-2">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="telefono"
                          required
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="+54 11 ..."
                          className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-950 text-sm font-light focus:outline-none focus:border-slate-950 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold block mb-2">
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="contacto@ejemplo.com"
                          className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-950 text-sm font-light focus:outline-none focus:border-slate-950 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold block mb-2">
                        Detalle de la Consulta *
                      </label>
                      <textarea
                        name="consulta"
                        required
                        rows={4}
                        value={formData.consulta}
                        onChange={handleChange}
                        placeholder="Escriba brevemente sobre el tema a tratar..."
                        className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-950 text-sm font-light focus:outline-none focus:border-slate-950 transition-colors resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 bg-slate-950 text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full hover:bg-amber-800 transition-colors duration-300 w-full sm:w-auto"
                  >
                    <span>Enviar Mensaje</span>
                    <FaArrowRight className="text-xs" />
                  </button>
                </form>
              </FadeInSection>
            </div>

          </div>

        </div>
      </section>

      <ModalTurnos isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}