import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Reemplaza estos 3 valores con los de tu cuenta de EmailJS
    // (los mismos que ya usabas en el portafolio anterior).
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => setStatus("sent"),
        () => setStatus("error")
      );
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-28">
      <p className="font-display text-xs tracking-[0.3em] text-[#ffb020] mb-3">04 — CONTACTO</p>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl text-[#edeff2] mb-6">
            ¿Un proyecto en mente?
          </h2>
          <p className="text-[#8a919c] leading-relaxed mb-8 max-w-md">
            Respondo directo, sin intermediarios. Cuéntame qué necesitas y en
            qué plazo, y te digo si encajo.
          </p>
          <a
            href="mailto:aviisleep@gmail.com"
            className="font-display text-sm text-[#29d3c6] hover:text-[#ffb020] transition-colors"
          >
            aviisleep@gmail.com
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Tu nombre"
            className="w-full bg-[#14171c] border border-[#262b33] px-4 py-3 text-sm text-[#edeff2] placeholder:text-[#8a919c] focus:outline-none focus:border-[#29d3c6]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Tu correo"
            className="w-full bg-[#14171c] border border-[#262b33] px-4 py-3 text-sm text-[#edeff2] placeholder:text-[#8a919c] focus:outline-none focus:border-[#29d3c6]"
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Cuéntame de tu proyecto"
            className="w-full bg-[#14171c] border border-[#262b33] px-4 py-3 text-sm text-[#edeff2] placeholder:text-[#8a919c] focus:outline-none focus:border-[#29d3c6]"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="font-display text-xs tracking-wider bg-[#ffb020] text-[#0b0d10] px-5 py-3 hover:bg-[#edeff2] transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "ENVIANDO…" : "ENVIAR MENSAJE"}
          </button>
          {status === "sent" && (
            <p className="text-xs text-[#29d3c6]">Mensaje enviado. Te respondo pronto.</p>
          )}
          {status === "error" && (
            <p className="text-xs text-[#ff6b6b]">
              No se pudo enviar — escríbeme directo al correo de arriba mientras lo reviso.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
