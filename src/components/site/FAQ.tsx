import { useReveal } from "@/hooks/useReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "As facetas em resina têm aparência natural?",
    a: "Sim. O planejamento respeita as proporções faciais e as características de cada paciente, buscando o máximo de naturalidade.",
  },
  {
    q: "Quanto tempo dura o tratamento de facetas?",
    a: "A duração é definida no planejamento após a avaliação, conforme a quantidade de dentes e as particularidades do caso.",
  },
  {
    q: "Como é feita a avaliação inicial?",
    a: "A consulta inclui análise clínica e conversa sobre suas expectativas. Ao final, você recebe um plano de tratamento claro e o orçamento personalizado.",
  },
  {
    q: "Onde ficam as unidades?",
    a: "Atendemos em três unidades em Fortaleza — Aldeota, São Cristóvão e Bezerra de Menezes.",
  },
];

export function FAQ() {
  const reveal = useReveal();
  return (
    <section id="faq" className="py-16 md:py-24 bg-cream scroll-mt-24">
      <div ref={reveal} className="reveal max-w-3xl mx-auto px-6">
        <div className="text-center mb-9">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-dark font-medium">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">
            Tire suas <span className="italic text-gradient-gold">dúvidas</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2.5">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-2xl px-5 bg-background data-[state=open]:shadow-soft"
            >
              <AccordionTrigger className="text-left font-display text-base md:text-lg hover:no-underline py-4">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
