import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { MessageCircle, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CLINIC, unitMapUrl } from "@/lib/clinic-data";
import { DEFAULT_MESSAGE, unitWaLink, onWhatsAppClick } from "@/lib/whatsapp";

type BookingCtx = {
  /** Abre o seletor de unidades. `origin` é usado para instrumentação. */
  openBooking: (origin: string, message?: string) => void;
};

const Ctx = createContext<BookingCtx>({ openBooking: () => {} });

export function useBooking() {
  return useContext(Ctx);
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState("desconhecido");
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  const openBooking = useCallback((o: string, m?: string) => {
    setOrigin(o);
    setMessage(m || DEFAULT_MESSAGE);
    setOpen(true);
    onWhatsAppClick("abrir_seletor", { origin: o });
  }, []);

  const value = useMemo(() => ({ openBooking }), [openBooking]);

  return (
    <Ctx.Provider value={value}>
      {children}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg rounded-3xl">
          <DialogHeader className="pr-8 text-left">
            <DialogTitle className="font-display text-2xl">
              Em qual unidade você deseja ser atendido?
            </DialogTitle>
            <DialogDescription>
              Escolha a unidade mais conveniente e fale direto com a equipe pelo WhatsApp.
            </DialogDescription>
          </DialogHeader>

          <ul className="mt-2 space-y-3">
            {CLINIC.units.map((u) => (
              <li
                key={u.id}
                className="rounded-2xl border border-border p-4 hover:border-gold/50 transition-colors"
              >
                <div className="font-display text-lg">{u.name}</div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{u.address}</p>
                <div className="mt-3 flex flex-col sm:flex-row gap-2">
                  <a
                    href={unitWaLink(u, message)}
                    onClick={() => {
                      onWhatsAppClick("seletor_unidade", { unit: u.id, origin });
                      setOpen(false);
                    }}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-gold text-ink text-sm font-medium shadow-gold hover:shadow-luxe transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  >
                    <MessageCircle size={15} aria-hidden />
                    Agendar nesta unidade
                  </a>
                  <a
                    href={unitMapUrl(u)}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-foreground/20 text-sm font-medium hover:bg-foreground hover:text-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <MapPin size={15} aria-hidden />
                    Ver no mapa
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </Ctx.Provider>
  );
}
