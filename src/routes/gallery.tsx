import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { categories, categoryKeys, type CatalogImage, type CategoryKey } from "@/lib/catalog";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Collection Gallery — Zeyoorh.ng" },
      { name: "description", content: "Browse Zeyoorh.ng clothing, shoes, watches, native caps and Shadda." },
      { property: "og:title", content: "Collection Gallery — Zeyoorh.ng" },
      { property: "og:description", content: "Explore selected Northern menswear and accessories from Zeyoorh.ng." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("Clothing");
  const [selectedImage, setSelectedImage] = useState<CatalogImage | null>(null);
  const category = categories[activeCategory];
  const whatsappHref = `https://wa.me/2349168747325?text=${encodeURIComponent(`Hello Zeyoorh.ng, I am interested in ${selectedImage?.alt ?? activeCategory}.`)}`;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-5 pb-12 pt-12 lg:px-10 lg:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">The collection</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-none md:text-7xl">Choose your signature piece.</h1>
        <p className="mt-5 max-w-xl leading-7 text-muted-foreground">Select a category, explore the available styles, and message us about the piece that catches your eye.</p>

        <div role="tablist" aria-label="Product categories" className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
          {categoryKeys.map((name) => (
            <Button
              key={name}
              role="tab"
              aria-selected={activeCategory === name}
              onClick={() => setActiveCategory(name)}
              variant={activeCategory === name ? "default" : "outline"}
              className="h-12 w-full rounded-full border-border px-3 text-base shadow-none sm:w-auto sm:px-6"
            >
              {name}
            </Button>
          ))}
        </div>
      </section>

      <section key={activeCategory} className="category-enter mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <div className="mb-8 border-t border-border pt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{category.eyebrow}</p>
          <p className="mt-3 max-w-2xl font-display text-2xl leading-snug md:text-4xl">{category.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {category.images.map((image, index) => (
            <Button
              key={image.src}
              variant="ghost"
              onClick={() => setSelectedImage(image)}
              className={`group relative h-auto overflow-hidden rounded-none p-0 shadow-none ${index === 0 ? "col-span-2 aspect-[16/11] md:col-span-2" : "aspect-[4/5]"}`}
              aria-label={`View ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-background/75 px-4 py-3 text-left text-xs text-foreground backdrop-blur-md">{image.alt}</span>
            </Button>
          ))}
        </div>
      </section>

      {selectedImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label={selectedImage.alt}>
          <div className="relative flex h-full w-full max-w-5xl flex-col justify-center">
            <Button variant="outline" size="icon" onClick={() => setSelectedImage(null)} className="absolute right-0 top-0 z-10 rounded-full bg-background/70" aria-label="Close photo">
              <X />
            </Button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[75vh] w-full object-contain" />
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <p className="font-display text-2xl">{selectedImage.alt}</p>
              <Button asChild className="rounded-full px-6">
                <a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle />Ask about this piece</a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}