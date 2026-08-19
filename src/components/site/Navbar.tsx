import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useBooking } from "@/components/site/BookingProvider";

const links = [
  { href: "#facetas", label: "Facetas" },
  { href: "#resultados", label: "Resultados" },
  { href: "#harmonizacao", label: "Harmonização" },
  { href: "#sobre", label: "Dra. Yasmin" },
  { href: "#unidades", label: "Unidades" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 glass-light shadow-soft" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
          aria-label="YL Odontologia — voltar ao topo"
        >
          <span className="font-display text-2xl tracking-tight">
            YL <span className="text-gradient-gold">Odontologia</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group focus-visible:outline-none focus-visible:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-gold transition-all duration-500 group-hover:w-full group-focus-visible:w-full" />
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => openBooking("navbar")}
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all hover:shadow-luxe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          Agendar avaliação
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-3 -mr-2 text-foreground min-w-11 min-h-11 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-light border-t border-border mt-3 animate-fade-up">
          <nav aria-label="Mobile" className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/90 py-2"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                openBooking("navbar_mobile");
                setOpen(false);
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-medium"
            >
              Agendar avaliação
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
