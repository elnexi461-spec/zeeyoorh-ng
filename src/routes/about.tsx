import { createFileRoute } from "@tanstack/react-router";
import { Gem, MessageCircle, ShieldCheck } from "lucide-react";

import { InfoPage } from "@/components/info-page";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us — Zeyoorh.ng" },
    { name: "description", content: "Discover the story and personal service behind Zeyoorh.ng." },
    { property: "og:title", content: "About Us — Zeyoorh.ng" },
    { property: "og:description", content: "Northern tradition, a modern eye, and attentive personal service." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: About,
});

function About() {
  const principles = [
    { icon: Gem, title: "Curated quality", text: "Every piece is considered for its finish, feel, and lasting appeal." },
    { icon: ShieldCheck, title: "Trusted sourcing", text: "Selections come from dependable makers and established suppliers." },
    { icon: MessageCircle, title: "Personal service", text: "Real assistance guides you from first selection through fulfilment." },
  ];

  return (
    <InfoPage eyebrow="About us" title="Style with a point of view." intro="Zeyoorh.ng was created for men who see clothing as more than appearance.">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="space-y-7 font-display text-2xl leading-relaxed sm:text-3xl">
          <p>We bring together Northern tradition and a modern eye, selecting pieces that feel grounded, refined, and distinctly personal.</p>
          <p>Our collection stays focused so our service can stay attentive. Every recommendation begins with your taste and ends with something you will wear with confidence.</p>
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