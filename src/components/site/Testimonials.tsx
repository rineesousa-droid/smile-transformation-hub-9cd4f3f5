import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const reviews = [
  {
    name: "Andressa Rocha",
    text: "Atendimento excelente desde o primeiro momento, desde as meninas na recepção a Dr Yasmin Lopes que fez o meu sorriso dos sonhos pro meu grande dia, meu casamento.",
  },
  {
    name: "Dyana Lima",
    text: "Atendimento excelente e atenção desde o primeiro contato, Dra. Yasmim uma grande profissional no qual me deixou a vontade e me explicou todo o procedimento, sem contar em um ambiente agradável e com excelentes profissionais. Super recomendo 😀",
  },
  {
    name: "Gabriel Lima",
    text: "Atendimento maravilhoso, equipe muito simpática. O Trabalho da Dra Yasmin é impecável, recomendo muito",
  },
  {
    name: "Brenda Monteiro",
    text: "Faço procedimentos na clínica desde sempre, amo o atendimento de lá, minhas experiências foram sempre ótimas! Recomendo demais",
  },
  {
    name: "Sarah Gabriele",
    text: "Fiz uma extração recentemente e foi ótimo, não doeu e foi super tranquilo, indico super, profissionais de qualidade e com um atendimento de conforto.",
  },
  {
    name: "Ozana Moreira",
    text: "Melhor clínica odontológica de fortaleza, equipe super profissional, atenciosos e receptores. Todos os procedimentos que realizei tiveram resultados satisfatórios",
  },
  {
    name: "Samara Pimentel",
    text: "Clínica com profissionais qualificados, atendimento e serviço dentro da expectativa. Recomendo !!!",
  },
  {
    name: "Gabii Ferreira",
    text: "Amei demais, todas as meninas super simpáticas, não troco por nada a YL💗",
  },
  {
    name: "Clariê Doces",
    text: "Ambiente muito agradável, é ótimo atendimento",
  },
  {
    name: "Gleuson",
    text: "Essa atendimento e super bom muito mais.. muito top elas recebem muito bem e gosto muito sempre com vocês YL",
  },
];

export function Testimonials() {
  const reveal = useReveal();
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <section id="avaliacoes" className="py-16 md:py-24 bg-background scroll-mt-24">
      <div ref={reveal} className="reveal max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-9">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">
            Avaliações no Google
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">
            O que nossos <span className="italic text-gradient-gold">pacientes dizem</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Experiências reais de quem confia no nosso trabalho.
          </p>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((r) => (
              <article
                key={r.name}
                className="snap-start shrink-0 w-[85%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] rounded-2xl border border-border bg-cream/60 p-6 flex flex-col shadow-soft"
              >
                <div className="flex items-center gap-1 text-gold-dark" aria-label="5 estrelas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} className="fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80 flex-1">“{r.text}”</p>
                <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between gap-3">
                  <span className="font-display text-base">{r.name}</span>
                  <span className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                    Google
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-2 flex justify-center gap-3 sm:justify-end">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Ver avaliações anteriores"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Ver próximas avaliações"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
