import { useReveal } from "@/hooks/useReveal";
import { ArrowRight } from "lucide-react";
import { useBooking } from "@/components/site/BookingProvider";
import afterFacetas from "@/assets/facetas-depois.webp";

export function Facetas() {
  const reveal = useReveal();
  const { openBooking } = useBooking();
  return (
    <section id="facetas" className="py-16 md:py-24 bg-background scroll-mt-24">
      <div
        ref={reveal}
        className="reveal max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <div className="order-2 lg:order-1">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">
            Tratamento principal
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl leading-[1.08]">
            Facetas em <span className="italic text-gradient-gold">Resina</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A transformação do sorriso com naturalidade. Cada faceta é planejada de forma
            personalizada, respeitando proporções, características e expectativas de cada paciente.
          </p>

          <button
            type="button"
            onClick={() =>
              openBooking(
                "facetas_cta",
                "Olá! Vim pelo site da YL Odontologia e gostaria de agendar uma avaliação para facetas em resina.",
              )
            }
            className="mt-8 group inline-flex items-center gap-3 bg-gradient-gold text-ink px-7 py-3.5 rounded-full font-medium tracking-wide shadow-gold hover:shadow-luxe transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            Quero transformar meu sorriso
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-luxe bg-cream">
            <img
              src={afterFacetas}
              alt="Resultado de facetas em resina realizado na YL Odontologia"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
