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
    setFormData({ nombre: "", email: "", telefono: "", motivo: "Derecho Civil y Comercial" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md pt-24 pb-8 overflow-y-auto">
      {/* CONTENEDOR PRINCIPAL: Se fuerza rounded-2xl y overflow-hidden para recortar bordes de los paneles hijos */}
      <div className="bg-white text-slate-900 w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative flex flex-col md:flex-row my-auto max-h-[85vh] md:max-h-none">
        
        {/* BOTÓN CERRAR */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 z-30 text-slate-400 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full p-2.5 transition-all"
          aria-label="Cerrar modal"
        >
          <FaXmark className="text-base" />
        </button>

        {/* COLUMNA IZQUIERDA: PANEL EDITORIAL / INFORMATIVO */}
        <div className="w-full md:w-5/12 bg-slate-950 text-white p-7 sm:p-9 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 shrink-0">
          <div className="space-y-5">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-200/80 font-medium block mb-1.5">
                Consulta Online
              </span>
              <h3 className={`${playfair.className} text-2xl sm:text-3xl font-normal text-white leading-tight`}>
                Cassese &amp; Saravia
              </h3>
            </div>

            <p className={`${inter.className} text-xs text-slate-300 font-light leading-relaxed`}>
              Coordinemos una videollamada individual de 45 minutos para analizar la situación jurídica de su caso.
            </p>

            <div className="space-y-3 pt-5 border-t border-slate-800">
              <div className="flex items-start gap-3 text-xs text-slate-300 font-light">
                <FaVideo className="text-amber-200/80 text-sm mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium text-white block">Reunión por Google Meet</span>
                  <span className="text-[11px] text-slate-400">El enlace de acceso se enviará a su correo.</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-300 font-light pt-1">
                <FaShieldHalved className="text-amber-200/80 text-sm shrink-0" />
                <span>Secreto profesional y confidencialidad.</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 mt-6 hidden md:block">
            <span className={`${playfair.className} text-xs italic text-amber-100/80 leading-relaxed block`}>
              &quot;Un espacio de escucha atenta y análisis minucioso para encontrar la mejor estrategia para su caso.&quot;
            </span>
          </div>
        </div>

        {/* COLUMNA DERECHA: FORMULARIO */}
        <div className="w-full md:w-7/12 p-7 sm:p-9 bg-white flex flex-col justify-center overflow-y-auto">
          {!reservaConfirmada ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h4 className={`${playfair.className} text-2xl font-normal text-slate-950`}>
                  Reservar Turno
                </h4>
                <p className={`${inter.className} text-xs text-slate-500 font-light mt-0.5`}>
                  Seleccione la fecha y complete sus datos de contacto.
                </p>
              </div>

              {/* SELECCIÓN DE FECHA Y HORARIO */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className={`${inter.className} text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1 flex items-center gap-1.5`}>
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
                  <label className={`${inter.className} text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1 flex items-center gap-1.5`}>
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
                      {fechaSeleccionada ? "Seleccionar horario" : "Elija el día primero"}
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
              <div className="space-y-3 pt-1">
                <div>
                  <label className={`${inter.className} text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1 block`}>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className={`${inter.className} text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1 block`}>
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
                    <label className={`${inter.className} text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1 block`}>
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
                  <label className={`${inter.className} text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1 block`}>
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
                className="w-full bg-slate-950 text-white text-xs uppercase tracking-widest font-semibold py-3.5 rounded-full hover:bg-amber-900 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? "Agendando..." : "Confirmar Reserva por Google Meet"}
              </button>
            </form>
          ) : (
            /* COMPROBANTE DE ÉXITO */
            <div className="py-4 space-y-5 my-auto text-center sm:text-left">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs">
                  <FaCheck />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                  Reserva Registrada
                </span>
              </div>

              <div>
                <h4 className={`${playfair.className} text-2xl font-normal text-slate-950`}>
                  ¡Nos vemos en Google Meet!
                </h4>
                <p className={`${inter.className} text-xs text-slate-500 font-light mt-1`}>
                  Enviamos la invitación de la videollamada a <span className="font-medium text-slate-800">{formData.email}</span>.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Cliente:</span>
                  <span className="font-medium text-slate-900">{formData.nombre}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Fecha y hora:</span>
                  <span className="font-medium text-slate-900">
                    {fechaSeleccionada} — {horaSeleccionada} hs
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Modalidad:</span>
                  <span className="font-medium text-slate-900">Google Meet (Online)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Materia:</span>
                  <span className="font-medium text-slate-900">{formData.motivo}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto bg-slate-950 text-white text-xs font-medium px-8 py-2.5 rounded-full hover:bg-slate-800 transition-colors"
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