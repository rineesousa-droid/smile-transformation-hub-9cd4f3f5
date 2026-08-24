import { useReveal } from "@/hooks/useReveal";
import { MapPin, MessageCircle } from "lucide-react";
import { CLINIC, unitMapUrl, unitMapEmbedUrl } from "@/lib/clinic-data";
import { unitWaLink, onWhatsAppClick } from "@/lib/whatsapp";

const shortAddress: Record<string, string> = {
  aldeota: "Av. Santos Dumont, 2122 — Ed. Manhattan Center",
  "sao-cristovao": "Av. Castelo de Castro, 428 — Jangurussu",
  bezerra: "Av. Bezerra de Menezes, 1250 — Ed. Momentum Office",
};

export function Units() {
  const reveal = useReveal();
  return (
    <section id="unidades" className="py-16 md:py-24 bg-background scroll-mt-24">
      <div ref={reveal} className="reveal max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">
            Unidades
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">
            Três endereços em <span className="italic text-gradient-gold">Fortaleza</span>
          </h2>
          <p className="mt-4 text-xs tracking-wide text-muted-foreground">
            Segunda a sexta: 09:00 às 18:00 · Sábado: 09:00 às 13:00
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CLINIC.units.map((u) => (
            <div
              key={u.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-5 hover:border-gold/50 transition-colors"
            >
              <h3 className="font-display text-xl">{u.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {shortAddress[u.id] ?? u.address}
              </p>

              <div className="mt-5 flex gap-2">
                <a
                  href={unitMapUrl(u)}
                  target="_blank"
                  rel="noopener"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-foreground/20 text-xs font-medium hover:bg-foreground hover:text-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <MapPin size={14} aria-hidden />
                  Como chegar
                </a>
                <a
                  href={unitWaLink(u)}
                  onClick={() => onWhatsAppClick("unit_card", { unit: u.id })}
                  target="_blank"
                  rel="noopener"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-gold text-ink text-xs font-medium shadow-gold hover:shadow-luxe transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  <MessageCircle size={14} aria-hidden />
                  Agendar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
