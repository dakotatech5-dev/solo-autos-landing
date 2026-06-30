"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const requiredTextFields = [
  { id: "name", label: "Nombre completo", type: "text" },
  { id: "whatsapp", label: "Número de WhatsApp", type: "tel" },
  { id: "city", label: "Ciudad", type: "text" },
  { id: "brand", label: "Marca", type: "text" },
  { id: "line", label: "Línea", type: "text" },
  { id: "model", label: "Modelo", type: "number" },
  { id: "mileage", label: "Kilometraje", type: "number" },
  { id: "plate", label: "Placa", type: "text" },
  {
    id: "minimumPrice",
    label: "Precio mínimo por el que cerrarías esta semana",
    type: "text"
  }
];

const yesNoFields = [
  { id: "owner", label: "¿Eres el propietario del vehículo?" },
  { id: "debt", label: "¿Tiene deuda?" },
  { id: "pledge", label: "¿Tiene prenda?" },
  { id: "tickets", label: "¿Tiene comparendos?" },
  { id: "taxes", label: "¿Está al día en impuestos?" },
  { id: "soat", label: "¿Tiene SOAT vigente?" },
  { id: "inspection", label: "¿Tiene tecnomecánica vigente?" }
];

function Field({
  id,
  label,
  type = "text"
}: {
  id: string;
  label: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2" htmlFor={id}>
      <span className="text-sm font-semibold text-ink">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        required
        className="min-h-12 rounded-md border border-line bg-white px-4 text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
      />
    </label>
  );
}

function SelectField({
  id,
  label,
  options
}: {
  id: string;
  label: string;
  options: string[];
}) {
  return (
    <label className="grid gap-2" htmlFor={id}>
      <span className="text-sm font-semibold text-ink">{label}</span>
      <select
        id={id}
        name={id}
        required
        defaultValue=""
        className="min-h-12 rounded-md border border-line bg-white px-4 text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
      >
        <option value="" disabled>
          Selecciona una opción
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    // Futura integración: enviar `payload` a Google Sheets, Airtable, Supabase o un backend propio.
    console.info("Solo Autos lead", payload);
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="formulario" className="bg-soft px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Oferta de compra
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
            Recibe una oferta real por tu carro
          </h2>
          <p className="mt-4 leading-8 text-graphite">
            Déjanos los datos de tu vehículo y revisamos si podemos hacerte una
            oferta de compra.
          </p>
          {submitted ? (
            <div
              className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-900"
              role="status"
              aria-live="polite"
            >
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                <p>
                  Gracias. Recibimos la información de tu vehículo. Revisaremos
                  los datos y te contactaremos por WhatsApp.
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-line bg-white p-5 shadow-soft sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {requiredTextFields.map((field) => (
              <Field key={field.id} {...field} />
            ))}
            <SelectField
              id="gearbox"
              label="Tipo de caja"
              options={["Mecánica", "Automática"]}
            />
            <SelectField
              id="fuel"
              label="Combustible"
              options={["Gasolina", "Diésel", "Gas", "Híbrido", "Eléctrico"]}
            />
            <SelectField
              id="condition"
              label="Estado general del vehículo"
              options={[
                "Excelente",
                "Bueno",
                "Aceptable",
                "Requiere arreglos",
                "No estoy seguro"
              ]}
            />
            {yesNoFields.map((field) => (
              <SelectField
                key={field.id}
                id={field.id}
                label={field.label}
                options={["Sí", "No", "No estoy seguro"]}
              />
            ))}
            <label className="grid gap-2 sm:col-span-2" htmlFor="photos">
              <span className="text-sm font-semibold text-ink">
                Fotos o enlaces de fotos
              </span>
              <textarea
                id="photos"
                name="photos"
                required
                rows={3}
                placeholder="Pega enlaces de fotos o indica que puedes enviarlas por WhatsApp."
                className="rounded-md border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
              />
            </label>
            <label className="grid gap-2 sm:col-span-2" htmlFor="comments">
              <span className="text-sm font-semibold text-ink">
                Comentarios adicionales
              </span>
              <textarea
                id="comments"
                name="comments"
                rows={4}
                className="rounded-md border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-white transition hover:bg-[#D83F22] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:w-auto"
          >
            Enviar información
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}
