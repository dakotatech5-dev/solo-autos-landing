import { ClipboardCheck, FileSignature, Gauge, LockKeyhole } from "lucide-react";

const benefits = [
  {
    title: "Pago seguro",
    description: "Cierre con soporte claro y condiciones verificables.",
    icon: LockKeyhole
  },
  {
    title: "Revisión seria",
    description: "Analizamos estado, precio de mercado y documentación.",
    icon: ClipboardCheck
  },
  {
    title: "Traspaso formal",
    description: "Acompañamos el proceso para que quede correctamente cerrado.",
    icon: FileSignature
  },
  {
    title: "Proceso rápido y claro",
    description: "Te decimos qué sigue, qué falta y cuándo podemos avanzar.",
    icon: Gauge
  }
];

export function Benefits() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Beneficios
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink sm:text-4xl">
            Una venta privada con estructura profesional.
          </h2>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="rounded-lg border border-line bg-white p-5 shadow-soft"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-ink">{benefit.title}</h3>
                <p className="mt-2 leading-7 text-graphite">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
