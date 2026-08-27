import { useReveal } from "@/hooks/useReveal";
import { ArrowRight } from "lucide-react";
import { useBooking } from "@/components/site/BookingProvider";
import harmonizacaoImg from "@/assets/harmonizacao-facial.webp";

const items = [
  {
    title: "Botox",
    desc: "Suavização de linhas de expressão preservando a naturalidade dos movimentos.",
  },
  {
    title: "Preenchimento facial",
    desc: "Volume e contorno em pontos específicos, valorizando suas características.",
  },
];

export function Harmonizacao() {
  const reveal = useReveal();
  const { openBooking } = useBooking();
  return (
    <section id="harmonizacao" className="py-16 md:py-24 bg-cream scroll-mt-24">
      <div
        ref={reveal}
        className="reveal max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.85fr_1fr] gap-10 lg:gap-16 items-center"
      >
        <div className="relative max-w-sm w-full mx-auto lg:mx-0">
          <div className="relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-luxe bg-background">
            <img
              src={harmonizacaoImg}
              alt="Resultado de harmonização facial realizada na YL Odontologia"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">
            Estética facial
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl leading-[1.08]">
            Harmonização <span className="italic text-gradient-gold">Facial</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Procedimentos com foco em equilíbrio, naturalidade e valorização das suas
            características individuais — nunca em padronizar rostos.
          </p>

          <dl className="mt-7 divide-y divide-border border-y border-border">
            {items.map((i) => (
              <div key={i.title} className="py-4">
                <dt className="font-display text-lg">{i.title}</dt>
                <dd className="mt-1 text-sm text-muted-foreground leading-relaxed">{i.desc}</dd>
              </div>
            ))}
          </dl>

          <button
            type="button"
            onClick={() =>
              openBooking(
                "harmonizacao_cta",
                "Olá! Vim pelo site da YL Odontologia e gostaria de saber mais sobre harmonização facial.",
              )
            }
            className="mt-8 group inline-flex items-center gap-3 bg-foreground text-background px-7 py-3.5 rounded-full font-medium tracking-wide hover:shadow-luxe transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            Quero saber mais
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
