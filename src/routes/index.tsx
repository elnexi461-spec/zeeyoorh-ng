import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  Images,
  Instagram,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { allCatalogImages } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zeyoorh.ng — Northern Style Made for You" },
      {
        name: "description",
        content:
          "Shop quality Northern Nigerian clothing, shoes, watches, native caps and Shadda with personal help from Zeyoorh.ng.",
      },
      { property: "og:title", content: "Zeyoorh.ng — Northern Style Made for You" },
      {
        property: "og:description",
        content: "Choose the right outfit and accessories with friendly, personal help from Zeyoorh.ng.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function BackgroundSlideshow({ images, index }: { images: { src: string; alt: string }[]; index: number }) {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {images.map((image, imageIndex) => (
        <img
          key={image.src}
          src={image.src}
          alt=""
          loading={imageIndex === 0 ? "eager" : "lazy"}
          className={`page-background-slide ${imageIndex === index ? "is-active" : ""}`}
        />
      ))}
      <div className="page-background-veil absolute inset-0" />
    </div>
  );
}

function Index() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    if (allCatalogImages.length < 2) return;
    const id = window.setInterval(
      () => setBackgroundIndex((current) => {
        const offset = 1 + Math.floor(Math.random() * (allCatalogImages.length - 1));
        return (current + offset) % allCatalogImages.length;
      }),
      3600,
    );
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          el.classList.remove("is-leaving-up", "is-leaving-down");
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            return;
          }
          el.classList.remove("is-visible");
          const above = entry.boundingClientRect.top < 0;
          el.classList.add(above ? "is-leaving-up" : "is-leaving-down");
        }),
      { threshold: 0.12, rootMargin: "-6% 0px -6% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const whatsappHref = "https://wa.me/2349168747325";
  const instagramHref = "https://instagram.com/zeyoorh.ng";

  return (
    <main className="relative min-h-screen overflow-x-hidden text-foreground">
      <BackgroundSlideshow images={allCatalogImages} index={backgroundIndex} />
      <div className="fixed inset-x-0 top-0 z-50"><SiteHeader transparent /></div>

      <section id="top" className="relative z-10 flex min-h-[100svh] items-end overflow-hidden pt-24">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-10 lg:pb-20">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
               <span className="size-1.5 rounded-full bg-primary" /> Private Style Meetings Available
            </div>
             <h1 className="font-display text-6xl font-semibold leading-[0.88] md:text-8xl lg:text-[7rem]">Look your best.<br /><span className="italic text-primary">Own the moment.</span></h1>
             <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">Quality Northern clothing, caps, shoes and watches for men who want to stand out. Tell us what you need and we will help you choose the right look.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-13 rounded-full px-7 shadow-none transition-transform hover:scale-[1.03]">
                 <a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle />Book a Meeting</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-border bg-transparent px-7 shadow-none transition-transform hover:scale-[1.03] hover:bg-foreground hover:text-background">
                 <a href={instagramHref} target="_blank" rel="noreferrer"><Instagram />See Instagram</a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="h-13 rounded-full border border-primary/60 px-7 shadow-none transition-transform hover:scale-[1.03]">
                 <Link to="/gallery"><Images />Shop the Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
         <a href="#how" aria-label="See how it works" className="absolute bottom-7 right-6 z-20 hidden items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground md:flex">How it works <ArrowDownRight className="size-4" /></a>
      </section>

      <section id="how" className="section-space relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
         <Reveal><SectionHeading label="How it works" title="Your perfect look in three easy steps." /></Reveal>
        <div className="mt-10 grid gap-8 sm:mt-16 md:grid-cols-3 md:gap-10">
          {[
             ["01", "Tell us what you need", "Message us about your event, your size and the style you like."],
             ["02", "We help you choose", "We will show you the best pieces for your style and budget."],
             ["03", "Order with confidence", "Choose your favourite, confirm payment and delivery, and we will handle the rest."],
          ].map(([number, title, text], index) => (
            <Reveal key={number} delay={index * 140} className="border-t border-border pt-6">
              <span className="text-xs tracking-[0.2em] text-primary">{number}</span>
              <h3 className="mt-6 font-display text-3xl font-semibold sm:mt-10">{title}</h3>
              <p className="mt-4 max-w-sm leading-7 text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="categories" className="section-space relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
           <SectionHeading label="Shop our collection" title="Find the look made for you." description="See our clothing, shoes, watches, native caps and Shadda. Choose what you like, then message us to order or book a private meeting." />
          <Button asChild size="lg" className="mt-8 h-14 rounded-full px-8 text-sm uppercase tracking-widest shadow-none transition-transform hover:scale-[1.03]">
             <Link to="/gallery"><Images />Shop the Gallery</Link>
          </Button>
        </Reveal>
      </section>
    </main>
  );
}

function SectionHeading({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{label}</p>
      <h2 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.98] md:text-7xl">{title}</h2>
      {description ? <p className="mt-6 max-w-xl leading-7 text-muted-foreground">{description}</p> : null}
    </div>
  );
}