import { BadgeAlert } from "lucide-react";

export function Transparency() {
  return (
    <section className="bg-ink px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-lg border border-white/12 bg-white/[0.06] p-6 sm:flex-row sm:items-center sm:p-8">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent text-white">
          <BadgeAlert className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="text-2xl font-semibold leading-9">
          No prometemos pagar más que todos. Prometemos un proceso serio, rápido
          y transparente.
        </p>
      </div>
    </section>
  );
}
