import { Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/components/SiteConfig";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-2xl font-semibold">{siteConfig.brand}</p>
          <p className="mt-3 max-w-md leading-7 text-white/68">
            La información enviada será utilizada únicamente para evaluar la
            posible compra del vehículo.
          </p>
        </div>
        <div className="grid gap-4 text-white/76 sm:grid-cols-3">
          <div className="flex gap-3">
            <MapPin className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
            <span>{siteConfig.city}</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex gap-3 transition hover:text-white"
          >
            <MessageCircle className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex gap-3 transition hover:text-white"
          >
            <Mail className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
            <span>{siteConfig.email}</span>
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/12 pt-5 text-sm text-white/58">
        <p>Aviso de tratamiento de datos personales</p>
      </div>
    </footer>
  );
}
