import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/dra-yasmin.jpg";
import { CLINIC } from "@/lib/clinic-data";
import { useBooking } from "@/components/site/BookingProvider";

export function Hero() {
  const { openBooking } = useBooking();
  return (
    <section
      id="top"
      className="relative min-h-[74dvh] md:min-h-[80dvh] flex items-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Retrato da Dra. Yasmin Lopes, cirurgiã-dentista em Fortaleza"
          className="w-full h-full object-cover object-[60%_20%] md:object-[60%_25%]"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-2xl text-white animate-fade-up">
          <h1 className="font-display text-[2.4rem] leading-[1.06] md:text-6xl lg:text-7xl font-medium">
            Transformando sorrisos,
            <br />
            <span className="text-gradient-gold italic">valorizando você.</span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-white/80 max-w-xl leading-relaxed font-light">
            Facetas em resina e harmonização facial com naturalidade e planejamento personalizado.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => openBooking("hero_primary")}
              className="group inline-flex items-center gap-3 bg-gradient-gold text-ink px-8 py-4 rounded-full font-medium tracking-wide shadow-gold hover:shadow-luxe transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Agendar avaliação
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="mt-7 text-xs tracking-[0.2em] uppercase text-white/60">
            {CLINIC.professional.fullName} • {CLINIC.professional.cro}
          </p>
        </div>
      </div>
    </section>
  );
}
