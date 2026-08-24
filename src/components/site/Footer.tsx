import { Instagram, MessageCircle, MapPin, Clock } from "lucide-react";
import { INSTAGRAM_URL, onWhatsAppClick } from "@/lib/whatsapp";
import { CLINIC, unitMapUrl, unitMapEmbedUrl } from "@/lib/clinic-data";
import { unitWaLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <div className="font-display text-3xl">
              YL <span className="text-gradient-gold">Odontologia</span>
            </div>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Facetas em resina, harmonização facial e atendimento odontológico completo em
              Fortaleza-CE. Técnica, cuidado e planejamento individual em cada atendimento.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Clock size={16} className="text-gold-dark mt-0.5 flex-shrink-0" aria-hidden />
                <span>
                  {CLINIC.hours.map((h, i) => (
                    <span key={i} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Instagram size={16} className="text-gold-dark mt-0.5 flex-shrink-0" aria-hidden />
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-foreground transition-colors"
                >
                  {CLINIC.contact.instagramHandle}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener"
                aria-label="Instagram da YL Odontologia"
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-gradient-gold hover:border-transparent transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h4 className="font-display text-lg mb-5">Nossas unidades em Fortaleza</h4>
            <div className="grid md:grid-cols-3 gap-5">
              {CLINIC.units.map((u) => (
                <div
                  key={u.id}
                  className="group rounded-2xl border border-border overflow-hidden hover:border-gold/50 transition-all bg-card"
                >
                  <div className="p-4">
                    <div className="flex items-start gap-2">
                      <MapPin size={14} className="text-gold-dark mt-1 flex-shrink-0" aria-hidden />
                      <div className="min-w-0">
                        <div className="font-medium text-foreground text-sm">{u.name}</div>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {u.address}
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-3">
                          <a
                            href={unitMapUrl(u)}
                            target="_blank"
                            rel="noopener"
                            className="text-xs font-medium text-muted-foreground hover:underline"
                          >
                            Como chegar
                          </a>
                          <a
                            href={unitWaLink(u)}
                            onClick={() => onWhatsAppClick("footer_unit", { unit: u.id })}
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center gap-1 text-xs font-medium text-gold-dark hover:underline"
                          >
                            <MessageCircle size={12} aria-hidden />
                            Agendar
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row md:flex-wrap justify-between gap-3 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {CLINIC.brand} — {CLINIC.professional.fullName}. Todos os
            direitos reservados.
          </span>
          <span>
            Responsável técnica: {CLINIC.professional.fullName} · {CLINIC.professional.cro}
          </span>
        </div>
        <p className="mt-4 text-[11px] text-muted-foreground/80 max-w-3xl leading-relaxed">
          Os resultados apresentados são de casos reais, divulgados com autorização, e podem variar
          conforme as condições individuais de cada paciente. As indicações e planos de tratamento
          são definidos após avaliação profissional presencial.
        </p>
      </div>
    </footer>
  );
}
