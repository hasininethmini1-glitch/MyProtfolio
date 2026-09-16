export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="mb-10 max-w-2xl md:mb-14">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 leading-7 text-muted-foreground">{intro}</p> : null}
    </header>
  );
}