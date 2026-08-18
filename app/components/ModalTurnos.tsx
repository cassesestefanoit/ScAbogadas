"use client";

import { useState } from "react";
import { playfair, inter } from "../fonts";
import {
  FaXmark,
  FaCalendarDays,
  FaClock,
  FaCheck,
  FaVideo,
  FaShieldHalved,
} from "react-icons/fa6";

interface ModalTurnosProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalTurnos({ isOpen, onClose }: ModalTurnosProps) {
  const [fechaSeleccionada, setFechaSeleccionada] = useState("");
  const [horaSeleccionada, setHoraSeleccionada] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    motivo: "Derecho Civil y Comercial",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reservaConfirmada, setReservaConfirmada] = useState(false);

  const horariosDisponibles = ["09:00", "11:00", "14:30", "16:00", "17:30"];

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setReservaConfirmada(true);
    }, 1200);
  };

  const handleReset = () => {
    setReservaConfirmada(false);
    setFechaSeleccionada("");
    setHoraSeleccionada("");
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      motivo: "Derecho Civil y Comercial",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      
      {/* CONTENEDOR PRINCIPAL */}
      <div className="bg-white text-slate-900 w-full max-w-3xl sm:rounded-2xl rounded-t-2xl shadow-2xl border border-slate-200/80 overflow-hidden relative flex flex-col md:flex-row max-h-[92vh] sm:max-h-[85vh] my-0 sm:my-auto">
        
        {/* BOTÓN CERRAR - Fijado arriba a la derecha */}
        <button
          onClick={handleReset}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-40 text-slate-400 hover:text-slate-900 bg-slate-100/80 hover:bg-slate-200 rounded-full p-2 transition-all cursor-pointer backdrop-blur-sm"
          aria-label="Cerrar modal"
        >
          <FaXmark className="text-base" />
        </button>

        {/* COLUMNA IZQUIERDA: PANEL EDITORIAL (Compacto en mobile) */}
        <div className="w-full md:w-5/12 bg-slate-950 text-white p-5 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 shrink-0">
          <div className="space-y-3 sm:space-y-4">
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-amber-200/90 font-medium block mb-1">
                Consulta Online
              </span>
              <h3 className={`${playfair.className} text-xl sm:text-2xl md:text-3xl font-normal text-white leading-tight`}>
                Cassese &amp; Saravia
              </h3>
            </div>

            <p className={`${inter.className} text-xs text-slate-300 font-light leading-relaxed hidden sm:block`}>
              Coordinemos una videollamada individual de 45 minutos para analizar la situación jurídica de su caso.
            </p>

            {/* Badges / Datos rápidos */}
            <div className="flex flex-col gap-2 pt-2 sm:pt-4 border-t border-slate-800/80 text-[11px] sm:text-xs text-slate-300 font-light">
              <div className="flex items-center gap-2.5">
                <FaVideo className="text-amber-200/90 text-xs shrink-0" />
                <span>Videollamada por <strong>Google Meet</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaShieldHalved className="text-amber-200/90 text-xs shrink-0" />
                <span>Secreto profesional y confidencialidad</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800/80 mt-4 hidden md:block">
            <span className={`${playfair.className} text-xs italic text-amber-100/80 leading-relaxed block`}>
              &quot;Un espacio de escucha atenta y análisis minucioso para encontrar la mejor estrategia para su caso.&quot;
            </span>
          </div>
        </div>

        {/* COLUMNA DERECHA: FORMULARIO (Con scroll independiente interno) */}
        <div className="w-full md:w-7/12 p-5 sm:p-8 bg-white overflow-y-auto flex-1">
          {!reservaConfirmada ? (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <h4 className={`${playfair.className} text-lg sm:text-2xl font-normal text-slate-950`}>
                  Reservar Turno
                </h4>
                <p className={`${inter.className} text-[11px] sm:text-xs text-slate-500 font-light mt-0.5`}>
                  Seleccione fecha, horario y complete sus datos.
                </p>
              </div>

              {/* SELECCIÓN DE FECHA Y HORARIO */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div>
                  <label className={`${inter.className} text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1 flex items-center gap-1.5`}>
                    <FaCalendarDays className="text-amber-800" />
                    Fecha
                  </label>
                  <input
                    type="date"
                    required
                    value={fechaSeleccionada}
                    onChange={(e) => setFechaSeleccionada(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-950 transition-colors"
                  />
                </div>

                <div>
                  <label className={`${inter.className} text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1 flex items-center gap-1.5`}>
                    <FaClock className="text-amber-800" />
                    Horario
                  </label>
                  <select
                    disabled={!fechaSeleccionada}
                    value={horaSeleccionada}
                    onChange={(e) => setHoraSeleccionada(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-950 disabled:opacity-40 transition-colors"
                  >
                    <option value="">
                      {fechaSeleccionada ? "Seleccionar hora" : "Elija el día primero"}
                    </option>
                    {horariosDisponibles.map((hora) => (
                      <option key={hora} value={hora}>
                        {hora} hs
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* DATOS PERSONALES */}
              <div className="space-y-2.5">
                <div>
                  <label className={`${inter.className} text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1 block`}>
                    Nombre y Apellido
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. María González"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-950 transition-colors placeholder:text-slate-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className={`${inter.className} text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1 block`}>
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ejemplo@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-950 transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className={`${inter.className} text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1 block`}>
                      WhatsApp / Teléfono
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+54 9 11 ..."
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-950 transition-colors placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className={`${inter.className} text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1 block`}>
                    Materia de Consulta
                  </label>
                  <select
                    value={formData.motivo}
                    onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-950 transition-colors"
                  >
                    <option value="Derecho Civil y Comercial">Derecho Civil y Comercial</option>
                    <option value="Derecho Laboral">Derecho Laboral</option>
                    <option value="Familia y Sucesiones">Familia y Sucesiones</option>
                    <option value="Consulta General">Otra Consulta</option>
                  </select>
                </div>
              </div>

              {/* BOTÓN CONFIRMAR */}
              <button
                type="submit"
                disabled={!fechaSeleccionada || !horaSeleccionada || isSubmitting}
                className="w-full bg-slate-950 text-white text-[11px] sm:text-xs uppercase tracking-widest font-semibold py-3 sm:py-3.5 rounded-full hover:bg-amber-900 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed mt-3 cursor-pointer shadow-md"
              >
                {isSubmitting ? "Agendando..." : "Confirmar Reserva por Google Meet"}
              </button>
            </form>
          ) : (
            /* COMPROBANTE DE ÉXITO */
            <div className="py-3 space-y-4 my-auto text-center sm:text-left">
              <div className="flex items-center gap-2.5 justify-center sm:justify-start">
                <div className="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs shrink-0">
                  <FaCheck />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-800">
                  Reserva Registrada
                </span>
              </div>

              <div>
                <h4 className={`${playfair.className} text-xl sm:text-2xl font-normal text-slate-950`}>
                  ¡Nos vemos en Google Meet!
                </h4>
                <p className={`${inter.className} text-xs text-slate-500 font-light mt-1`}>
                  Enviamos la invitación a <span className="font-medium text-slate-800">{formData.email}</span>.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-xs space-y-2 text-left">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-slate-500">Cliente:</span>
                  <span className="font-medium text-slate-900 truncate">{formData.nombre}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-slate-500">Fecha y hora:</span>
                  <span className="font-medium text-slate-900">
                    {fechaSeleccionada} — {horaSeleccionada} hs
                  </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-slate-500">Modalidad:</span>
                  <span className="font-medium text-slate-900">Google Meet (Online)</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-slate-500">Materia:</span>
                  <span className="font-medium text-slate-900 truncate">{formData.motivo}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto bg-slate-950 text-white text-xs font-medium px-8 py-2.5 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Finalizar
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}