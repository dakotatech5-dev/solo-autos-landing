import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { whatsappUrl } from "@/components/SiteConfig";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(233,75,44,0.25),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
      <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="max-w-3xl pt-12 sm:pt-16 lg:pt-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/86">
            <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
            Compra directa de carros usados particulares
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
            Vendemos confianza. Compramos tu carro rápido.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            En Solo Autos revisamos tu vehículo, verificamos documentos y te
            hacemos una oferta seria para compra inmediata.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#formulario"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-white transition hover:bg-[#D83F22] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink"
            >
              Quiero vender mi carro
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/22 px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        <div className="pb-10 lg:pb-0">
          <div className="rounded-lg border border-white/12 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
            <div className="aspect-[4/3] rounded-md bg-[linear-gradient(150deg,#F4F1EC_0%,#CFC8BE_42%,#292929_43%,#111111_100%)] p-4">
              <div className="flex h-full flex-col justify-between rounded-md border border-white/16 bg-ink/55 p-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-white/58">
                    Evaluación inicial
                  </p>
                  <p className="mt-3 text-3xl font-semibold">Oferta seria</p>
                </div>
                <div className="grid gap-3 text-sm text-white/78">
                  <div className="flex items-center justify-between border-b border-white/12 pb-3">
                    <span>Documentos</span>
                    <span className="font-semibold text-white">Verificados</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/12 pb-3">
                    <span>Inspección</span>
                    <span className="font-semibold text-white">Agendada</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Cierre</span>
                    <span className="font-semibold text-white">Formal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
