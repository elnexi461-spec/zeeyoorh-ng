import { createFileRoute } from "@tanstack/react-router";

import { InfoPage } from "@/components/info-page";

const rules = [
  ["Availability", "Our items are limited. We will check that your choice is available before you pay."],
  ["Size and choice", "Please send the correct measurements or your normal size. We will guide you, but you will make the final choice."],
  ["Payment", "Only pay with the account details sent by our official WhatsApp or Instagram page. Your order is confirmed after we receive your payment."],
  ["Delivery", "Delivery time and cost depend on your location. We will agree on both before you pay. Please send your correct address and phone number."],
  ["Exchange", "Tell us quickly if there is a problem after delivery. An item can only be considered for exchange if it has not been worn or used."],
  ["Respect and privacy", "We keep your order details private. We also expect every conversation to be honest and respectful."],
];

export const Route = createFileRoute("/rules")({
  head: () => ({ meta: [
    { title: "How to Order — Zeyoorh.ng" },
    { name: "description", content: "Zeyoorh.ng ordering guidance, delivery expectations, exchanges, privacy, and community rules." },
    { property: "og:title", content: "How to Order — Zeyoorh.ng" },
    { property: "og:description", content: "Simple guidance for a secure, respectful, and personal Zeyoorh.ng experience." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Rules,
});

function Rules() {
  return (
    <InfoPage eyebrow="How to order" title="Simple steps for a safe order." intro="Please read this before you pay. It helps us serve you well and keeps your order safe.">
      <div className="grid gap-x-14 sm:grid-cols-2 lg:grid-cols-3">
        {rules.map(([title, text], index) => (
          <section key={title} className="border-t border-border py-7">
            <p className="text-xs tracking-[0.18em] text-primary">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-5 font-display text-3xl">{title}</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
          </section>
        ))}
      </div>
    </InfoPage>
  );
}