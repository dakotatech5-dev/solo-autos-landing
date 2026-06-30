const steps = [
  "Nos envías los datos del vehículo.",
  "Revisamos precio de mercado y documentos.",
  "Agendamos una inspección.",
  "Te hacemos una oferta seria.",
  "Cerramos con pago seguro y traspaso formal."
];

export function ProcessSteps() {
  return (
    <section className="bg-soft px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Cómo funciona
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink sm:text-4xl">
            Cinco pasos para saber si podemos comprarte el carro.
          </h2>
        </div>
        <ol className="mt-9 grid gap-4 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step} className="rounded-lg bg-white p-5 shadow-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-sm font-semibold text-white">
                {index + 1}
              </span>
              <p className="mt-5 min-h-16 text-lg font-semibold leading-7 text-ink">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
