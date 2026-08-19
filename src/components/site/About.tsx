import { useReveal } from "@/hooks/useReveal";
import { Check } from "lucide-react";
import dra from "@/assets/dra-yasmin.jpg";
import { CLINIC } from "@/lib/clinic-data";
import { useBooking } from "@/components/site/BookingProvider";

const highlights = [
  "Formada pela Universidade de Fortaleza (UNIFOR)",
  "Atuação na odontologia desde 2018",
  "Especial atenção à estética do sorriso e harmonização facial",
  "Atendimento personalizado em três unidades de Fortaleza",
];

export function About() {
  const reveal = useReveal();
  const { openBooking } = useBooking();
  return (
    <section id="sobre" className="py-24 md:py-32 bg-cream scroll-mt-24">
      <div
        ref={reveal}
        className="reveal max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
      >
        <div className="relative order-1">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-luxe">
            <img
              src={dra}
              alt={`Retrato profissional de ${CLINIC.professional.fullName}`}
              loading="lazy"
              className="w-full h-full object-cover"
              width={800}
              height={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>
          <div className="absolute -top-4 -left-4 w-32 h-32 border border-gold/40 rounded-full -z-10" />
          <div className="absolute -bottom-12 -left-8 w-48 h-48 bg-gradient-gold opacity-20 blur-3xl rounded-full -z-10" />
        </div>

        <div className="order-2">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">
            A Profissional
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            Conheça a profissional por trás das{" "}
            <span className="italic text-gradient-gold">transformações</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            <strong className="text-foreground">{CLINIC.professional.fullName}</strong>{" "}
            é cirurgiã-dentista formada pela Universidade de Fortaleza (UNIFOR)
            e atua na odontologia desde 2018. À frente da YL Odontologia,
            dedica-se à transformação de sorrisos e da autoestima por meio de
            tratamentos personalizados, com destaque para facetas em resina e
            harmonização facial.
          </p>

          <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="rounded-2xl border border-border bg-background p-4">
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                Registro profissional
              </dt>
              <dd className="mt-1 font-medium text-foreground">
                {CLINIC.professional.cro}
              </dd>
            </div>
            <div className="rounded-2xl border border-border bg-background p-4">
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                Atuação
              </dt>
              <dd className="mt-1 font-medium text-foreground">
                Desde {CLINIC.professional.since}
              </dd>
            </div>
          </dl>

          <ul className="mt-8 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-ink" strokeWidth={3} />
                </span>
                <span className="text-foreground/90">{h}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() =>
              openBooking(
                "about",
                "Olá! Vim pelo site da YL Odontologia e gostaria de agendar uma avaliação com a Dra. Yasmin.",
              )
            }
            className="mt-10 inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-medium tracking-wide hover:shadow-luxe transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            Falar com a Dra. Yasmin
          </button>
        </div>
      </div>
    </section>
  );
}
