import { useState } from "react";
import { ArrowUpRight, Check, CheckCircle2, Github, Layers3, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  return (
    <article onClick={onOpen} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") onOpen(); }} tabIndex={0} role="button" aria-label={`View details for ${project.title}`} className={`group relative cursor-pointer overflow-hidden rounded-lg border border-border bg-card p-6 shadow-lg transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${project.featured ? "md:col-span-2 lg:grid lg:grid-cols-[1.15fr_.85fr] lg:gap-10 lg:p-9" : ""}`}>
      <div>
        <div className="mb-7 flex items-center justify-between">
          <span className="font-mono text-xs text-primary">PROJECT / 0{index + 1}</span>
          <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{project.type}</p>
        <h3 className={`mt-2 font-display font-semibold text-foreground ${project.featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>{project.title}</h3>
        <p className="mt-4 leading-7 text-muted-foreground">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => <span key={technology} className="rounded border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">{technology}</span>)}
        </div>
      </div>
      <div className={project.featured ? "mt-8 border-t border-border pt-7 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0" : "mt-7"}>
        <p className="mb-3 text-sm font-semibold text-foreground">Key capabilities</p>
        <ul className="space-y-2">
          {project.features.slice(0, project.featured ? 7 : 4).map((feature) => <li key={feature} className="flex gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{feature}</li>)}
        </ul>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button variant="outline" size="sm" onClick={(event) => { event.stopPropagation(); onOpen(); }}><Layers3 />View details</Button>
          {project.github ? <Button asChild size="sm" variant="outline"><a href={project.github} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}><Github />GitHub</a></Button> : null}
          {project.liveDemo ? <Button asChild size="sm"><a href={project.liveDemo} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}><PlayCircle />Watch Demo</a></Button> : null}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <section id="projects" className="border-y border-border bg-surface/85 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Selected work" title="Featured Projects" intro="Practical applications built around real operational needs, from employee workflows to customer-facing systems." />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} onOpen={() => setSelected(project)} />)}
        </div>
      </div>
      <Dialog open={Boolean(selected)} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        {selected ? (
          <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto border-border bg-popover p-6 sm:p-8">
            <DialogHeader>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-primary">{selected.type}</p>
              <DialogTitle className="font-display text-2xl leading-tight sm:text-3xl">{selected.title}</DialogTitle>
              
              <DialogDescription className="pt-3 text-base leading-relaxed text-muted-foreground">
                {selected.longDescription || selected.description}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-wrap gap-2 py-2">
              {selected.technologies.map((technology) => (
                <span key={technology} className="rounded border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">
                  {technology}
                </span>
              ))}
            </div>

            {/* Detailed System Breakdown / Highlights */}
            {selected.details && selected.details.length > 0 && (
              <div className="mt-2 rounded-lg border border-border bg-card/60 p-4">
                <h4 className="mb-3 font-semibold text-foreground">Project Highlights & Technical Implementation</h4>
                <ul className="space-y-2.5">
                  {selected.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="mb-3 font-semibold text-foreground">Key Capabilities & Modules</h4>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {selected.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="size-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 pt-2">
              {selected.github ? (
                <Button asChild variant="outline">
                  <a href={selected.github} target="_blank" rel="noreferrer">
                    <Github className="mr-2 size-4" />
                    View on GitHub
                  </a>
                </Button>
              ) : null}
              {selected.liveDemo ? (
                <Button asChild>
                  <a href={selected.liveDemo} target="_blank" rel="noreferrer">
                    <PlayCircle className="mr-2 size-4" />
                    Watch Video Demo
                  </a>
                </Button>
              ) : null}
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </section>
  );
}