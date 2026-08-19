import { MessageCircle } from "lucide-react";
import { useBooking } from "@/components/site/BookingProvider";

export function WhatsAppFloat() {
  const { openBooking } = useBooking();
  return (
    <button
      type="button"
      onClick={() => openBooking("floating")}
      aria-label="Agendar pelo WhatsApp — escolher unidade"
      className="fixed right-6 z-40 group focus-visible:outline-none"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.5rem)" }}
    >
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"
        aria-hidden
      />
      <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-110 transition-transform group-focus-visible:ring-2 group-focus-visible:ring-white group-focus-visible:ring-offset-2">
        <MessageCircle size={28} className="fill-white" aria-hidden />
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-background text-xs px-3 py-2 rounded-full opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity pointer-events-none">
        Agendar pelo WhatsApp
      </span>
    </button>
  );
}
