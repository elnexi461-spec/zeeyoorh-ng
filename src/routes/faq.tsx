import { createFileRoute } from "@tanstack/react-router";

import { InfoPage } from "@/components/info-page";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  ["How do I order?", "Tap the picture you like and send us a WhatsApp message. We will confirm the price, size, availability and delivery with you."],
  ["Do you deliver across Nigeria?", "Yes. We deliver across Nigeria. We will tell you the delivery time and cost before you pay."],
  ["Can you help me choose my size?", "Yes. Send your measurements or the size you normally wear. We will help you choose the best fit."],
  ["Is everything in stock?", "Some items are limited and may sell out. If your choice is not available, we will show you a good alternative."],
  ["Can I ask for something not in the gallery?", "Yes. Send us a picture or explain what you want. We will tell you if we can find it for you."],
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
    <InfoPage eyebrow="Questions" title="Quick answers before you order." intro="We have answered the common questions below. If you need more help, send us a WhatsApp message.">
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