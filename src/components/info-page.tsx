import type { ReactNode } from "react";

import { SiteHeader } from "@/components/site-header";

export function InfoPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:pt-20 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.94] sm:text-7xl lg:text-8xl">{title}</h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{intro}</p>
        <div className="mt-14 border-t border-border pt-10 sm:mt-20 sm:pt-14">{children}</div>
      </section>
    </main>
  );
}