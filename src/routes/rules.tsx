import { createFileRoute } from "@tanstack/react-router";

import { InfoPage } from "@/components/info-page";

const rules = [
  ["Availability", "Pieces are offered in limited quantities. An item is only reserved after availability is personally confirmed."],
  ["Sizing & selection", "Please share accurate measurements or your usual size. We will advise carefully, while the final selection remains yours."],
  ["Payment confirmation", "Only use payment details supplied through our official WhatsApp or Instagram account. Your order is confirmed after payment is verified."],
  ["Delivery", "Delivery timing and cost depend on your location and will be agreed before completion. Please provide a reachable number and accurate address."],
  ["Exchanges", "Raise any concern promptly after delivery. Exchange eligibility depends on the item remaining unworn, unused, and in its original condition."],
  ["Respect & privacy", "We protect personal order details and expect respectful communication. Fraud, harassment, impersonation, or misuse of our community will not be accepted."],
];

export const Route = createFileRoute("/rules")({
  head: () => ({ meta: [
    { title: "Rules & Ordering Guidance — Zeyoorh.ng" },
    { name: "description", content: "Zeyoorh.ng ordering guidance, delivery expectations, exchanges, privacy, and community rules." },
    { property: "og:title", content: "Rules & Ordering Guidance — Zeyoorh.ng" },
    { property: "og:description", content: "Simple guidance for a secure, respectful, and personal Zeyoorh.ng experience." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Rules,
});

function Rules() {
  return (
    <InfoPage eyebrow="Guidance" title="Clear terms. Personal service." intro="These simple expectations protect every client and keep the Zeyoorh.ng experience thoughtful, secure, and respectful.">
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