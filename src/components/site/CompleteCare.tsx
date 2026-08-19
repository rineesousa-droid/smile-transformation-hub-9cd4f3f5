import { useReveal } from "@/hooks/useReveal";
import { useBooking } from "@/components/site/BookingProvider";

export function CompleteCare() {
  const reveal = useReveal();
  const { openBooking } = useBooking();
  return (
    <section id="odontologia-completa" className="py-12 md:py-16 bg-cream scroll-mt-24">
      <div ref={reveal} className="reveal max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-2xl md:text-4xl">
          Muito além da <span className="italic text-gradient-gold">estética</span>
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          A YL Odontologia conta com profissionais de diferentes especialidades para oferecer
          atendimento odontológico completo.
        </p>
        <button
          type="button"
          onClick={() =>
            openBooking(
              "odontologia_completa",
              "Olá! Vim pelo site da YL Odontologia e gostaria de conhecer os tratamentos disponíveis.",
            )
          }
          className="mt-7 inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-foreground/20 text-sm font-medium hover:bg-foreground hover:text-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          Conheça nossos tratamentos
        </button>
      </div>
    </section>
  );
}
