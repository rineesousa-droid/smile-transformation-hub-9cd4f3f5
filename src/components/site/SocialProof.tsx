import { CLINIC } from "@/lib/clinic-data";
import { useReveal } from "@/hooks/useReveal";

const items = ["Desde 2018", "UNIFOR", CLINIC.professional.cro, "3 unidades em Fortaleza"];

export function SocialProof() {
  const reveal = useReveal();
  return (
    <section
      id="autoridade"
      aria-label="Autoridade profissional"
      className="bg-cream border-y border-border scroll-mt-24"
    >
      <div ref={reveal} className="reveal max-w-6xl mx-auto px-6 py-6 md:py-7">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-14 text-center">
          {items.map((i) => (
            <li
              key={i}
              className="text-[11px] md:text-xs tracking-[0.22em] uppercase text-muted-foreground font-medium"
            >
              {i}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
