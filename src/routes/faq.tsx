import { createFileRoute } from "@tanstack/react-router";

import { InfoPage } from "@/components/info-page";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  ["How do I place an order?", "Send us a message on WhatsApp or Instagram with the item you are interested in. We will confirm availability, sizing, and delivery details personally."],
  ["Do you deliver across Nigeria?", "Yes. We arrange delivery across Nigeria, with timing and cost confirmed before your order is completed."],
  ["Can you help me choose the right size?", "Absolutely. Share your measurements or usual size and we will guide you toward the best fit for the selected piece."],
  ["Are all items always available?", "Our collection is intentionally limited. Availability changes, but we can suggest the closest alternative or source a suitable piece."],
  ["Can I request something not shown here?", "Yes. Tell us what you are looking for and we will let you know whether a personal sourcing request is possible."],
];

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [
    { title: "Frequently Asked Questions — Zeyoorh.ng" },
    { name: "description", content: "Answers about Zeyoorh.ng orders, sizing, availability, sourcing, and delivery." },
    { property: "og:title", content: "Frequently Asked Questions — Zeyoorh.ng" },
    { property: "og:description", content: "Everything you need to know before choosing your next Zeyoorh.ng piece." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Faq,
});

function Faq() {
  return (
    <InfoPage eyebrow="Questions" title="Everything you need to know." intro="Clear answers before you make your selection. For anything more specific, message us directly.">
      <Accordion type="single" collapsible className="mx-auto max-w-4xl border-t border-border">
        {faqs.map(([question, answer], index) => (
          <AccordionItem value={`item-${index}`} key={question} className="border-border">
            <AccordionTrigger className="py-6 font-display text-xl hover:no-underline sm:text-3xl">{question}</AccordionTrigger>
            <AccordionContent className="max-w-2xl pb-7 text-base leading-7 text-muted-foreground">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </InfoPage>
  );
}