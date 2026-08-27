import { useRef, useState, useEffect } from "react";
import { useReveal } from "@/hooks/useReveal";
import beforeFacetas from "@/assets/facetas-antes.webp";
import afterFacetas from "@/assets/facetas-depois.webp";
import beforeLabial from "@/assets/labial-antes.webp";
import afterLabial from "@/assets/labial-depois.webp";
import beforeBotox from "@/assets/botox-antes.webp";
import afterBotox from "@/assets/botox-depois.webp";
import { Move } from "lucide-react";

const cases = [
  {
    id: "facetas",
    label: "Facetas em Resina",
    before: beforeFacetas,
    after: afterFacetas,
    aspect: "aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/3]",
    position: "50% 55%",
    fit: "object-cover",
    w: 854,
    h: 1280,
  },
  {
    id: "labial",
    label: "Preenchimento Labial",
    before: beforeLabial,
    after: afterLabial,
    aspect: "aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/10]",
    position: "50% 50%",
    fit: "object-cover",
    w: 1024,
    h: 632,
  },
  {
    id: "botox",
    label: "Botox",
    before: beforeBotox,
    after: afterBotox,
    aspect: "aspect-[9/16] sm:aspect-[3/4] md:aspect-[4/5]",
    position: "50% 30%",
    fit: "object-contain",
    w: 578,
    h: 1172,
  },
];

export function BeforeAfter() {
  const reveal = useReveal();
  const [active, setActive] = useState(cases[0]);
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const move = (clientX: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const p = ((clientX - rect.left) / rect.width) * 100;
      setPos(Math.max(0, Math.min(100, p)));
    };
    const onMove = (e: MouseEvent) => dragging.current && move(e.clientX);
    const onTouch = (e: TouchEvent) => {
      if (dragging.current && e.touches[0]) {
        move(e.touches[0].clientX);
      }
    };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
    if (e.key === "Home") setPos(0);
    if (e.key === "End") setPos(100);
  };

  return (
    <section id="resultados" className="py-16 md:py-24 bg-cream scroll-mt-24">
      <div ref={reveal} className="reveal max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">
            Antes & Depois
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">
            Resultados que <span className="italic text-gradient-gold">encantam</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Arraste o controle (ou use as setas do teclado) para ver a transformação de casos reais.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center mb-7">
          {cases.map((c) => {
            const isActive = active.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setActive(c);
                  setPos(50);
                }}
                aria-pressed={isActive}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-[13px] sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  isActive
                    ? "bg-foreground text-background shadow-soft font-semibold"
                    : "bg-secondary text-foreground/70 hover:bg-secondary/70 font-medium"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <div
          ref={containerRef}
          role="slider"
          aria-label={`Comparação antes e depois — ${active.label}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          tabIndex={0}
          onKeyDown={onKey}
          className={`relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-luxe select-none cursor-ew-resize group touch-pan-y focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold bg-black/90 ${active.aspect}`}
          onMouseDown={() => (dragging.current = true)}
          onTouchStart={() => (dragging.current = true)}
        >
          <img
            key={`after-${active.id}`}
            src={active.after}
            alt={`Depois — ${active.label}`}
            width={active.w}
            height={active.h}
            style={{ objectPosition: active.position }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            draggable={false}
          />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img
              key={`before-${active.id}`}
              src={active.before}
              alt={`Antes — ${active.label}`}
              width={active.w}
              height={active.h}
              style={{ width: `${(100 / Math.max(pos, 0.001)) * 100}%`, objectPosition: active.position }}
              className="absolute inset-0 h-full max-w-none object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>

          <div className="absolute top-3 left-3 sm:top-6 sm:left-6 glass px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-white text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-widest uppercase whitespace-nowrap">
            Antes
          </div>
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 glass px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-white text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-widest uppercase whitespace-nowrap">
            Depois
          </div>

          <div
            className="absolute top-0 bottom-0 w-px bg-white/90 shadow-luxe"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-luxe flex items-center justify-center group-hover:scale-110 transition-transform">
              <Move size={18} className="text-ink rotate-90" />
            </div>
          </div>

          <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between gap-2 sm:gap-4 text-white">
            <div className="glass px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl min-w-0">
              <div className="text-[8px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase opacity-80">
                Procedimento
              </div>
              <div className="text-[11px] sm:text-sm font-medium truncate">{active.label}</div>
            </div>
            <div className="glass px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-right min-w-0">
              <div className="text-[8px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase opacity-80">
                Sessões
              </div>
              <div className="text-[11px] sm:text-sm font-medium truncate">
                Definido em avaliação
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground max-w-2xl mx-auto">
          Imagens de casos reais divulgadas com autorização. Resultados podem variar conforme as
          condições individuais de cada paciente.
        </p>
      </div>
    </section>
  );
}
