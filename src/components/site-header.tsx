import { Link, useRouterState } from "@tanstack/react-router";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Home", to: "/" as const, number: "01" },
  { label: "Gallery", to: "/gallery" as const, number: "02" },
  { label: "About Us", to: "/about" as const, number: "03" },
  { label: "FAQ", to: "/faq" as const, number: "04" },
  { label: "Rules", to: "/rules" as const, number: "05" },
];

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`sticky top-0 z-40 border-b border-foreground/10 backdrop-blur-xl ${transparent ? "bg-background/55" : "bg-background/90"}`}>
        <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-10">
          <Link to="/" className="min-w-0 truncate font-display text-2xl font-semibold">
            Zeyoorh<span className="text-primary">.ng</span>
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="size-11 shrink-0 rounded-full border-primary/60 bg-background/25 transition-transform hover:scale-105"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-background transition-[opacity,visibility] duration-500 ${open ? "visible opacity-100" : "invisible opacity-0"}`}
        aria-hidden={!open}
      >
        <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 lg:px-10">
          <div className="grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border">
            <p className="min-w-0 truncate font-display text-2xl font-semibold">Zeyoorh<span className="text-primary">.ng</span></p>
            <Button variant="outline" size="icon" className="size-11 shrink-0 rounded-full bg-transparent" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="size-5" />
            </Button>
          </div>

          <nav className="flex flex-1 flex-col justify-center py-8" aria-label="Main menu">
            {navigation.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={`group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-2 border-b border-border py-3 transition-all duration-300 sm:py-4 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                style={{ transitionDelay: open ? `${100 + index * 55}ms` : "0ms" }}
              >
                <span className="text-xs text-primary">{item.number}</span>
                <span className={`font-display text-4xl font-semibold leading-none transition-colors sm:text-6xl ${pathname === item.to ? "text-primary" : "text-foreground group-hover:text-primary"}`}>{item.label}</span>
                <span className="text-xl text-muted-foreground transition-transform group-hover:translate-x-1">↗</span>
              </Link>
            ))}
          </nav>

          <div className="grid grid-cols-2 gap-3 border-t border-border py-5">
            <Button asChild variant="outline" className="h-12 rounded-full bg-transparent">
              <a href="https://instagram.com/zeyoorh.ng" target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}><Instagram />Instagram</a>
            </Button>
            <Button asChild className="h-12 rounded-full">
              <a href="https://wa.me/2349168747325" target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}><MessageCircle />WhatsApp</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}