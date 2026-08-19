import { useReveal } from "@/hooks/useReveal";
import { Sparkles, Sun, Smile, Anchor, Wand2, Heart, ArrowUpRight } from "lucide-react";
import { useBooking } from "@/components/site/BookingProvider";
import { onWhatsAppClick } from "@/lib/whatsapp";

const procedures = [
  {
    icon: Sparkles,
    title: "Facetas de Resina",
    desc: "Transformação estética do sorriso em poucas sessões, com aparência natural e planejamento individualizado.",
  },
  {
    icon: Wand2,
    title: "Lentes Dentais",
    desc: "Lentes ultrafinas para casos indicados, com foco em harmonia e naturalidade.",
  },
  {
    icon: Sun,
    title: "Clareamento Dental",
    desc: "Protocolos seguros para dentes mais claros, avaliados de acordo com cada caso.",
  },
  {
    icon: Anchor,
    title: "Implantes Dentários",
    desc: "Reabilitação oral com implantes de qualidade e planejamento cuidadoso.",
  },
  {
    icon: Smile,
    title: "Harmonização Facial",
    desc: "Procedimentos avançados para equilíbrio facial, sempre com abordagem conservadora.",
  },
  {
    icon: Heart,
    title: "Preenchimento Labial",
    desc: "Definição e volume aos lábios com resultado delicado e personalizado.",
  },
];

export function Procedures() {
  const reveal = useReveal();
  const { openBooking } = useBooking();
  return (
    <section
      id="procedimentos"
      className="py-24 md:py-32 bg-background scroll-mt-24"
    >
      <div ref={reveal} className="reveal max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">
            Procedimentos
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Tratamentos de <span className="italic text-gradient-gold">alto padrão</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Técnica, sensibilidade artística e planejamento individual para cada paciente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procedures.map((p) => {
            const Icon = p.icon;
            const msg = `Olá! Vim pelo site da YL Odontologia e tenho interesse em saber mais sobre ${p.title}.`;
            return (
              <div
                key={p.title}
                className="group relative bg-card border border-border rounded-3xl p-8 hover-lift overflow-hidden h-full flex flex-col"
              >
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-gold opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700" />
                <div className="relative flex-1 flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cream to-secondary flex items-center justify-center mb-6 group-hover:bg-gradient-gold transition-all duration-500">
                    <Icon size={24} strokeWidth={1.75} className="text-gold-dark group-hover:text-ink transition-colors" />
                  </div>
                  <h3 className="font-display text-2xl mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                  <button
                    type="button"
                    onClick={() => {
                      onWhatsAppClick("procedure_card", { procedure: p.title });
                      openBooking("procedure_card", msg);
                    }}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-gold-dark transition-colors focus-visible:outline-none focus-visible:underline text-left"
                    aria-label={`Saiba mais sobre ${p.title} pelo WhatsApp`}
                  >
                    Saiba mais
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground max-w-2xl mx-auto">
          A indicação e o plano de tratamento são definidos após avaliação
          profissional presencial. Resultados podem variar conforme cada caso.
        </p>
      </div>
    </section>
  );
}
