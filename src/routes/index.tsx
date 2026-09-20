import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  Gem,
  Images,
  Instagram,
  MessageCircle,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { allCatalogImages } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zeyoorh.ng — Curated Northern Style" },
      {
        name: "description",
        content:
          "Exclusive Northern Nigerian clothing, slides, watches, native caps and Shadda, carefully sourced for men of distinction.",
      },
      { property: "og:title", content: "Zeyoorh.ng — Curated Northern Style" },
      {
        property: "og:description",
        content: "Distinctive menswear and accessories, personally sourced for a select clientele.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Gem, title: "Curated quality", text: "Every piece is considered for finish, feel and lasting appeal." },
  { icon: Ruler, title: "Personal fit", text: "Guidance that helps every garment and cap sit exactly as intended." },
  { icon: ShieldCheck, title: "Trusted sourcing", text: "Selections from dependable makers and established suppliers." },
  { icon: Sparkles, title: "Limited finds", text: "Distinct pieces in considered quantities, never an endless catalogue." },
  { icon: PackageCheck, title: "Careful delivery", text: "Orders prepared and presented with close attention to detail." },
  { icon: MessageCircle, title: "Direct service", text: "Real, personal assistance from selection through fulfilment." },
];

const testimonials = [
  ["The quality is obvious before you even put it on. Every detail feels considered.", "M. Abdullahi, Abuja"],
  ["Zeyoorh understands understated style. The recommendations are always exactly right.", "S. Bello, Kano"],
  ["From the first message to delivery, the service felt personal and effortless.", "I. Musa, Lagos"],
];

const faqs = [
  ["How do I place an order?", "Send us a message on WhatsApp or Instagram with the item you are interested in. We will confirm availability, sizing and delivery details personally."],
  ["Do you deliver across Nigeria?", "Yes. We arrange delivery across Nigeria, with timing and cost confirmed before your order is completed."],
  ["Can you help me choose the right size?", "Absolutely. Share your measurements or usual size and we will guide you toward the best fit for the selected piece."],
  ["Are all items always available?", "Our collection is intentionally limited. Availability changes, but we can suggest the closest alternative or source a suitable piece."],
  ["Can I request something not shown here?", "Yes. Tell us what you are looking for and we will let you know whether a personal sourcing request is possible."],
];

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
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/55 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#top" className="font-display text-2xl font-semibold text-foreground">Zeyoorh<span className="text-primary">.ng</span></a>
          <div className="hidden items-center gap-9 text-sm text-muted-foreground md:flex">
            <Link className="nav-link" to="/gallery">Gallery</Link>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#faq">FAQ</a>
          </div>
          <Button asChild variant="outline" className="h-10 rounded-full border-border bg-transparent px-5 text-xs uppercase tracking-widest shadow-none hover:scale-[1.03] hover:bg-foreground hover:text-background">
            <a href={whatsappHref} target="_blank" rel="noreferrer">Enquire</a>
          </Button>
        </div>
      </nav>

      <section id="top" className="relative z-10 flex min-h-[100svh] items-end overflow-hidden pt-24">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-10 lg:pb-20">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <span className="size-1.5 rounded-full bg-primary" /> Limited Spots Available
            </div>
            <h1 className="font-display text-6xl font-semibold leading-[0.88] md:text-8xl lg:text-[7rem]">Dress with<br /><span className="italic text-primary">distinction.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">A private edit of exceptional Northern menswear and accessories, personally sourced for men who choose substance over noise.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-13 rounded-full px-7 shadow-none transition-transform hover:scale-[1.03]">
                <a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp us</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-border bg-transparent px-7 shadow-none transition-transform hover:scale-[1.03] hover:bg-foreground hover:text-background">
                <a href={instagramHref} target="_blank" rel="noreferrer"><Instagram />View Instagram</a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="h-13 rounded-full border border-primary/60 px-7 shadow-none transition-transform hover:scale-[1.03]">
                <Link to="/gallery"><Images />View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
        <a href="#how" aria-label="Scroll to how it works" className="absolute bottom-7 right-6 z-20 hidden items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground md:flex">Discover <ArrowDownRight className="size-4" /></a>
      </section>

      <section id="how" className="section-space relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal><SectionHeading label="The process" title="Personal from first word to final detail." /></Reveal>
        <div className="mt-10 grid gap-8 sm:mt-16 md:grid-cols-3 md:gap-10">
          {[
            ["01", "Share your taste", "Tell us the occasion, your preferences and what you want your wardrobe to say."],
            ["02", "Receive a private edit", "We narrow the collection to considered pieces selected specifically for you."],
            ["03", "Confirm with confidence", "Choose your favourites, confirm fit and delivery, then leave the details to us."],
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
          <SectionHeading label="The collection" title="The essentials, considered." description="Explore clothing, shoes, watches, native caps and Shadda, then select the piece you want to ask about." />
          <Button asChild size="lg" className="mt-8 h-14 rounded-full px-8 text-sm uppercase tracking-widest shadow-none transition-transform hover:scale-[1.03]">
            <Link to="/gallery"><Images />Open the Gallery</Link>
          </Button>
        </Reveal>
      </section>

      <section className="section-space relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal><SectionHeading label="The Zeyoorh standard" title="What you can expect." /></Reveal>
        <div className="mt-10 grid gap-x-12 gap-y-10 sm:mt-16 sm:gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={(index % 3) * 100} className="flex gap-5">
              <Icon className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1.5} />
              <div><h3 className="font-display text-2xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal><SectionHeading label="Client notes" title="Quiet confidence, shared." /></Reveal>
        <div className="mt-16">
          {testimonials.map(([quote, name], index) => (
            <Reveal key={name} delay={index * 120} className="grid border-t border-border py-9 md:grid-cols-[1fr_2.2fr] md:gap-12">
              <p className="mb-5 text-sm text-primary md:mb-0">{name}</p>
              <blockquote className="font-display text-2xl leading-snug md:text-4xl">“{quote}”</blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="section-space relative z-10 mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <Reveal><SectionHeading label="About us" title="Style with a point of view." /></Reveal>
        <Reveal className="space-y-7 text-lg leading-8 text-muted-foreground lg:pt-9">
          <p>Zeyoorh.ng was created for men who see clothing as more than appearance. We bring together Northern tradition and a modern eye, selecting pieces that feel grounded, refined and distinctly personal.</p>
          <p>Our collection stays focused so our service can stay attentive. Every recommendation begins with your taste and ends with something you will wear with confidence.</p>
        </Reveal>
      </section>

      <section id="faq" className="section-space relative z-10 mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <Reveal><SectionHeading label="Questions" title="Everything you need to know." /></Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map(([question, answer], index) => (
              <AccordionItem value={`item-${index}`} key={question} className="border-border">
                <AccordionTrigger className="py-6 font-display text-xl hover:no-underline md:text-2xl">{question}</AccordionTrigger>
                <AccordionContent className="max-w-xl pb-7 text-base leading-7 text-muted-foreground">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      <section className="section-space relative z-10 mx-auto max-w-5xl px-5 text-center lg:px-10">
        <Reveal>
          <Star className="mx-auto size-5 text-primary" fill="currentColor" />
          <h2 className="mt-7 font-display text-5xl font-semibold leading-none md:text-7xl">Your next signature piece is waiting.</h2>
          <p className="mx-auto mt-6 max-w-xl leading-7 text-muted-foreground">Join a growing circle of clients choosing a more personal way to dress.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="h-13 rounded-full px-7 shadow-none transition-transform hover:scale-[1.03]"><a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle />Start on WhatsApp</a></Button>
            <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-border bg-transparent px-7 shadow-none transition-transform hover:scale-[1.03] hover:bg-foreground hover:text-background"><a href={instagramHref} target="_blank" rel="noreferrer"><Instagram />Instagram</a></Button>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">Personal service · Limited selections · Nationwide delivery</p>
        </Reveal>
      </section>

      <footer className="relative z-10 border-t border-border px-5 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div><a href="#top" className="font-display text-2xl font-semibold">Zeyoorh<span className="text-primary">.ng</span></a><p className="mt-2 text-xs text-muted-foreground">© 2026 Zeyoorh.ng. All rights reserved.</p></div>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground"><Link className="nav-link" to="/gallery">Gallery</Link><a className="nav-link" href="#about">About</a><a className="nav-link" href="#faq">FAQ</a><a className="nav-link" href={instagramHref} target="_blank" rel="noreferrer">Instagram</a><a className="nav-link" href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a></div>
        </div>
      </footer>
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