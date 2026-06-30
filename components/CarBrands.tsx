const cars = [
  "Chevrolet Onix",
  "Chevrolet Joy",
  "Chevrolet Sail",
  "Renault Logan",
  "Renault Sandero",
  "Renault Stepway",
  "Mazda 2",
  "Mazda 3",
  "Nissan March",
  "Nissan Versa",
  "Kia Picanto",
  "Kia Rio",
  "Suzuki Swift",
  "Toyota Yaris",
  "Toyota Corolla",
  "Hyundai i10",
  "Hyundai i25",
  "Hyundai Accent"
];

export function CarBrands() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Carros que compramos
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink sm:text-4xl">
              Buscamos carros particulares de alta rotación.
            </h2>
            <p className="mt-4 leading-8 text-graphite">
              Evaluamos modelos comerciales, fáciles de revisar y con demanda
              activa en Bogotá y alrededores.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {cars.map((car) => (
              <span
                key={car}
                className="rounded-md border border-line bg-soft px-4 py-3 text-sm font-semibold text-graphite"
              >
                {car}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
