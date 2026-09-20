import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  Check,
  Gem,
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
import manAsset from "@/assets/IMG_2515.jpg.asset.json";
import blackFabricAsset from "@/assets/IMG-20260223-WA0155.JPG.asset.json";
import whiteFabricAsset from "@/assets/IMG-20260223-WA0160.JPG.asset.json";
import taupeFabricAsset from "@/assets/IMG-20260223-WA0153.JPG.asset.json";
import shoeBlackAsset from "@/assets/IMG_0513.PNG.asset.json";
import shoeBlueAsset from "@/assets/IMG_0514.PNG.asset.json";
import shoeGreyAsset from "@/assets/IMG_0515.PNG.asset.json";
import capBlueAsset from "@/assets/18C79ADB-985B-4D54-A78E-0218233F5BB8.JPG.asset.json";
import capWhiteAsset from "@/assets/8DFE5BE1-E1CB-45A0-8346-6433990605BB.JPG.asset.json";
import capSizeAsset from "@/assets/D7598292-141C-40CF-9134-E4E9969509E8.JPG.asset.json";

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

type CategoryKey = "Clothing" | "Shoes" | "Watches" | "Native Caps" | "Shadda";

const categories: Record<
  CategoryKey,
  { eyebrow: string; description: string; images: { src: string; alt: string }[]; pending?: boolean }
> = {
  Clothing: {
    eyebrow: "Precision tailoring",
    description:
      "Refined kaftans and premium fabrics selected for presence, comfort and an impeccable finish.",
    images: [
      { src: manAsset.url, alt: "Man wearing a white traditional outfit and patterned native cap" },
      { src: whiteFabricAsset.url, alt: "Premium white fabric arranged in soft folds" },
      { src: taupeFabricAsset.url, alt: "Premium taupe fabric arranged in soft folds" },
      { src: blackFabricAsset.url, alt: "Premium black fabric arranged in soft folds" },
    ],
  },
  Shoes: {
    eyebrow: "Everyday distinction",
    description:
      "Statement slides chosen for effortless comfort, strong silhouettes and a confident finish.",
    images: [
      { src: shoeBlueAsset.url, alt: "Blue luxury slide displayed by hand" },
      { src: shoeGreyAsset.url, alt: "Grey luxury slide displayed by hand" },
      { src: shoeBlackAsset.url, alt: "Selection of black premium slides" },
    ],
  },
  Watches: {
    eyebrow: "Coming to the collection",
    description:
      "A considered edit of timepieces is being prepared. Original collection photography will be added soon.",
    images: [],
    pending: true,
  },
  "Native Caps": {
    eyebrow: "The finishing signature",
    description:
      "Crisp, structured caps in classic and expressive colours, measured for a composed fit.",
    images: [
      { src: capWhiteAsset.url, alt: "White native caps displayed on gold head forms" },
      { src: capBlueAsset.url, alt: "Blue native caps displayed on gold head forms" },
      { src: capSizeAsset.url, alt: "Native cap inserts showing size 22" },
    ],
  },
  Shadda: {
    eyebrow: "Exceptional cloth",
    description:
      "Richly patterned Shadda selected for its hand, lustre and unmistakable ceremonial presence.",
    images: [],
    pending: true,
  },
};

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

function Index() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("Clothing");
  const category = categories[activeCategory];

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.13 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const whatsappHref = "https://wa.me/";
  const instagramHref = "https://instagram.com/";

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#top" className="font-display text-2xl font-semibold text-foreground">Zeyoorh<span className="text-primary">.ng</span></a>
          <div className="hidden items-center gap-9 text-sm text-muted-foreground md:flex">
            <a className="nav-link" href="#categories">Categories</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#faq">FAQ</a>
          </div>
          <Button asChild variant="outline" className="h-10 rounded-full border-border bg-transparent px-5 text-xs uppercase tracking-widest shadow-none hover:scale-[1.03] hover:bg-foreground hover:text-background">
            <a href={whatsappHref} target="_blank" rel="noreferrer">Enquire</a>
          </Button>
        </div>
      </nav>

      <section id="top" className="hero-pattern relative flex min-h-[100svh] items-end overflow-hidden pt-24">
        <img src={manAsset.url} alt="Zeyoorh client in refined white traditional clothing" className="absolute inset-0 h-full w-full object-cover object-[57%_20%] opacity-60 md:left-auto md:w-[58%] md:object-[50%_24%] md:opacity-90" />
        <div className="hero-fade absolute inset-0" />
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
            </div>
          </div>
        </div>
        <a href="#how" aria-label="Scroll to how it works" className="absolute bottom-7 right-6 z-20 hidden items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground md:flex">Discover <ArrowDownRight className="size-4" /></a>
      </section>

      <section id="how" className="section-space mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal><SectionHeading label="The process" title="Personal from first word to final detail." /></Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {[
            ["01", "Share your taste", "Tell us the occasion, your preferences and what you want your wardrobe to say."],
            ["02", "Receive a private edit", "We narrow the collection to considered pieces selected specifically for you."],
            ["03", "Confirm with confidence", "Choose your favourites, confirm fit and delivery, then leave the details to us."],
          ].map(([number, title, text], index) => (
            <Reveal key={number} delay={index * 140} className="border-t border-border pt-6">
              <span className="text-xs tracking-[0.2em] text-primary">{number}</span>
              <h3 className="mt-10 font-display text-3xl font-semibold">{title}</h3>
              <p className="mt-4 max-w-sm leading-7 text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="categories" className="section-space mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal><SectionHeading label="The collection" title="The essentials, considered." description="Explore a focused collection shaped by craft, character and enduring style." /></Reveal>
        <div role="tablist" aria-label="Product categories" className="mt-12 flex gap-2 overflow-x-auto pb-3 scrollbar-none">
          {(Object.keys(categories) as CategoryKey[]).map((name) => (
            <Button key={name} role="tab" aria-selected={activeCategory === name} onClick={() => setActiveCategory(name)} variant={activeCategory === name ? "default" : "outline"} className="shrink-0 rounded-full border-border px-5 shadow-none transition-transform hover:scale-[1.03]">
              {name}
            </Button>
          ))}
        </div>
        <div key={activeCategory} className="category-enter mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{category.eyebrow}</p>
          <p className="mt-4 max-w-2xl font-display text-3xl leading-tight text-foreground md:text-4xl">{category.description}</p>
          {category.pending ? (
            <div className="mt-16 flex min-h-72 items-center justify-center border-y border-border text-center">
              <div><Sparkles className="mx-auto size-5 text-primary" /><p className="mt-5 font-display text-3xl">Collection photography arriving soon.</p><p className="mt-3 text-sm text-muted-foreground">The selection is being prepared with care.</p></div>
            </div>
          ) : (
            <div className={`mt-12 grid gap-3 ${category.images.length === 4 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2 md:grid-cols-3"}`}>
              {category.images.map((image, index) => (
                <figure key={image.src} className={`${index === 0 && category.images.length === 3 ? "col-span-2 md:col-span-1" : ""} overflow-hidden`}>
                  <img src={image.src} alt={image.alt} className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]" loading="lazy" />
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-space mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal><SectionHeading label="The Zeyoorh standard" title="What you can expect." /></Reveal>
        <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={(index % 3) * 100} className="flex gap-5">
              <Icon className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1.5} />
              <div><h3 className="font-display text-2xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space mx-auto max-w-7xl px-5 lg:px-10">
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

      <section id="about" className="section-space mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <Reveal><SectionHeading label="About us" title="Style with a point of view." /></Reveal>
        <Reveal className="space-y-7 text-lg leading-8 text-muted-foreground lg:pt-9">
          <p>Zeyoorh.ng was created for men who see clothing as more than appearance. We bring together Northern tradition and a modern eye, selecting pieces that feel grounded, refined and distinctly personal.</p>
          <p>Our collection stays focused so our service can stay attentive. Every recommendation begins with your taste and ends with something you will wear with confidence.</p>
        </Reveal>
      </section>

      <section id="faq" className="section-space mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
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

      <section className="section-space mx-auto max-w-5xl px-5 text-center lg:px-10">
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

      <footer className="border-t border-border px-5 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div><a href="#top" className="font-display text-2xl font-semibold">Zeyoorh<span className="text-primary">.ng</span></a><p className="mt-2 text-xs text-muted-foreground">© 2026 Zeyoorh.ng. All rights reserved.</p></div>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground"><a className="nav-link" href="#categories">Categories</a><a className="nav-link" href="#about">About</a><a className="nav-link" href="#faq">FAQ</a><a className="nav-link" href={instagramHref} target="_blank" rel="noreferrer">Instagram</a><a className="nav-link" href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a></div>
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