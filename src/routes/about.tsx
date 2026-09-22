import { createFileRoute } from "@tanstack/react-router";
import { Gem, MessageCircle, ShieldCheck } from "lucide-react";

import { InfoPage } from "@/components/info-page";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us — Zeyoorh.ng" },
    { name: "description", content: "Meet Zeyoorh.ng and learn how we help Northern Nigerian men find the right style." },
    { property: "og:title", content: "About Us — Zeyoorh.ng" },
    { property: "og:description", content: "Quality Northern style with friendly, personal service." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: About,
});

function About() {
  const principles = [
    { icon: Gem, title: "Good quality", text: "We choose pieces that look good, feel comfortable and last." },
    { icon: ShieldCheck, title: "People you can trust", text: "We work with reliable makers and sellers." },
    { icon: MessageCircle, title: "Help made for you", text: "We listen to what you want and help you choose from start to finish." },
  ];

  return (
    <InfoPage eyebrow="About us" title="Northern style that fits who you are." intro="Zeyoorh.ng helps men look confident for every important moment.">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="space-y-7 font-display text-2xl leading-relaxed sm:text-3xl">
          <p>We bring Northern tradition and modern style together. From clothing and caps to shoes and watches, we choose pieces that make you look sharp.</p>
          <p>You do not have to choose alone. Tell us your event, style and budget. We will help you find something you will wear with confidence.</p>
        </div>
        <div className="divide-y divide-border border-t border-border">
          {principles.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-5 py-7">
              <Icon className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1.5} />
              <div><h2 className="font-display text-2xl">{title}</h2><p className="mt-2 leading-7 text-muted-foreground">{text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </InfoPage>
  );
}