import { useReveal } from "@/hooks/useReveal";
import dra from "@/assets/dra-yasmin.jpg";
import { CLINIC } from "@/lib/clinic-data";

export function About() {
  const reveal = useReveal();
  return (
    <section id="sobre" className="py-16 md:py-24 bg-background scroll-mt-24">
      <div
        ref={reveal}
        className="reveal max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1fr] gap-10 lg:gap-16 items-center"
      >
        <div className="relative max-w-sm w-full mx-auto lg:mx-0">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-luxe">
            <img
              src={dra}
              alt={`Retrato profissional de ${CLINIC.professional.fullName}`}
              loading="lazy"
              className="w-full h-full object-cover"
              width={800}
              height={1000}
            />
          </div>
          <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold/40 rounded-full -z-10" />
        </div>

        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">
            A profissional
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl leading-[1.08]">
            Dra. Yasmin{" "}
            <span className="italic text-gradient-gold">Lopes</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Cirurgiã-dentista formada pela Universidade de Fortaleza (UNIFOR),
            com atuação voltada à transformação de sorrisos e à estética facial.
            Seu trabalho busca resultados naturais e personalizados, respeitando
            as características de cada paciente.
          </p>
          <p className="mt-6 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
            {CLINIC.professional.cro} • Atuação desde {CLINIC.professional.since}
          </p>
        </div>
      </div>
    </section>
  );
}
