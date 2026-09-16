import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation, personal } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const current = [...navigation].reverse().find(([, id]) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= 140;
      });
      if (current) setActive(current[1]);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all ${scrolled ? "border-border bg-background/95 shadow-lg backdrop-blur-xl" : "border-transparent bg-background/55 backdrop-blur-md"}`}>
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <button onClick={() => goTo("home")} className="min-w-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Go to home">
          <span className="block truncate font-display text-lg font-semibold text-foreground">Hasini Nethmini<span className="text-primary">.</span></span>
        </button>
        <div className="hidden items-center gap-1 xl:flex">
          <nav aria-label="Main navigation" className="flex items-center gap-1">
            {navigation.map(([label, id]) => (
              <button key={id} onClick={() => goTo(id)} className={`relative px-2.5 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${active === id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} aria-current={active === id ? "location" : undefined}>
                {label}
                {active === id ? <span className="absolute inset-x-2.5 -bottom-1 h-px bg-primary" /> : null}
              </button>
            ))}
          </nav>
          <Button asChild className="ml-3">
            <a href={personal.cvPath} download="Hasini-Nethmini-CV.pdf"><Download />Download CV</a>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="min-h-11 min-w-11 xl:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open ? (
        <div className="border-t border-border bg-background px-4 py-5 shadow-xl xl:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-1">
            {navigation.map(([label, id]) => (
              <button key={id} onClick={() => goTo(id)} className={`min-h-11 rounded-md px-3 text-left text-sm font-medium ${active === id ? "bg-accent text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>{label}</button>
            ))}
            <Button asChild className="mt-3 w-full"><a href={personal.cvPath} download="Hasini-Nethmini-CV.pdf"><Download />Download CV</a></Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}