import { ArrowDown, ArrowRight,  Check, Code2, Database, Download, GraduationCap, Github, Languages as LanguagesIcon, Linkedin, Mail, MapPin, MonitorCog, Sparkles, TerminalSquare, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import workspaceImage from "@/assets/developer-workspace.jpg";
import { courses, education, journey, navigation, personal, skillGroups } from "@/data/portfolio";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { SectionHeading } from "./SectionHeading";
import { BriefcaseBusiness, FileText } from "lucide-react";
import { Award, ExternalLink,  } from "lucide-react";

const skillIcons = [Code2, MonitorCog, Database, TerminalSquare, Wrench];

function goTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[760px] items-end overflow-hidden border-b border-border pt-24 sm:min-h-[820px] lg:min-h-[760px]">
      <img src={workspaceImage} alt="Modern software development workspace with a laptop displaying code" width={1600} height={1200} className="absolute inset-0 size-full object-cover object-[64%_center] opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/35" />
      <div className="absolute right-[8%] top-32 hidden w-64 rounded-lg border border-primary/20 bg-background/70 p-4 font-mono text-xs text-muted-foreground shadow-2xl backdrop-blur-md lg:block animate-drift" aria-hidden="true">
        <p><span className="text-primary">const</span> developer = &#123;</p>
        <p className="pl-4">focus: <span className="text-warm">"practical solutions"</span>,</p>
        <p className="pl-4">status: <span className="text-warm">"open to work"</span></p>
        <p>&#125;;</p>
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 font-mono text-xs font-medium text-primary"><span className="size-2 rounded-full bg-primary" />Available for internship opportunities</div>
          <p className="mb-3 font-mono text-sm text-muted-foreground">Hello, world — I'm</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">Hasini Nethmini<span className="text-primary">.</span></h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-lg font-semibold sm:text-xl">
            <span className="text-primary">IT Intern</span><span className="hidden h-5 w-px bg-border sm:block" /><span className="text-foreground">Trainee Software Developer</span>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground">Motivated IT student passionate about building practical software solutions and developing modern applications.</p>
          <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">I enjoy solving real-world problems, building user-friendly applications, working with databases and continuously improving my software development skills.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button size="lg" onClick={() => goTo("projects")}><ArrowRight />View My Projects</Button>
            <Button asChild size="lg" variant="outline"><a href={personal.cvPath} download="Hasini-Nethmini-CV.pdf"><Download />Download CV</a></Button>
            <Button size="lg" variant="ghost" onClick={() => goTo("contact")}><Mail />Contact Me</Button>
          </div>
          <div className="mt-8 flex items-center gap-2">
            <span className="mr-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">Connect</span>
            <Button asChild variant="ghost" size="icon" className="min-h-11 min-w-11"><a href={personal.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github /></a></Button>
            <Button asChild variant="ghost" size="icon" className="min-h-11 min-w-11"><a href={personal.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin /></a></Button>
            <Button asChild variant="ghost" size="icon" className="min-h-11 min-w-11"><a href={personal.socials.email} target="_blank" rel="noreferrer" aria-label="Email Hasini"><Mail /></a></Button>
          </div>
        </div>
        <button onClick={() => goTo("highlights")} className="absolute bottom-10 right-8 hidden items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary lg:flex"><ArrowDown className="size-4" />Explore profile</button>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    ["IT Intern", "Open to opportunities"], ["HNDIT Undergraduate", "Information Technology"],
    ["GPA 3.72 / 4.00", "Up to Semester 03"], ["Software Development", "Frontend, backend & databases"],
  ];
  return <section id="highlights" aria-label="Profile highlights" className="bg-background py-8"><div className="mx-auto grid max-w-7xl divide-y divide-border border-y border-border px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-6 lg:grid-cols-4 lg:px-8">{items.map(([title, description], index) => <div key={title} className="px-4 py-6 sm:px-6"><p className="font-mono text-xs text-primary">0{index + 1}</p><h2 className="mt-2 font-display text-lg font-semibold">{title}</h2><p className="mt-1 text-sm text-muted-foreground">{description}</p></div>)}</div></section>;
}

function About() {
  const info = [["Name", personal.name], ["Role", personal.primaryTitle], ["Focus", "Software Development"], ["Education", "HNDIT"], ["Location", personal.location]];
  return <section id="about" className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-20"><div><SectionHeading eyebrow="Profile" title="About Me" /><div className="space-y-5 text-base leading-8 text-muted-foreground"><p>I'm a motivated and detail-oriented HNDIT undergraduate with a solid foundation in software engineering and full-stack web development. I have experience building academic and practical software applications using modern web technologies and relational databases.</p><p>My projects span employee and human resource management, inventory, e-commerce, patient management, attendance, payroll, leave, tasks and reporting. A Banking Internship at Regional Development Bank also gave me valuable professional exposure.</p><p>I'm interested in software engineering, full-stack development, databases and solving real-world problems through technology. I continuously improve my technical and professional skills and am currently seeking an opportunity to gain industry experience.</p></div></div><aside className="self-end rounded-lg border border-border bg-card p-6 shadow-xl sm:p-8"><div className="mb-6 flex items-center gap-3"><div className="grid size-11 place-items-center rounded-md bg-primary text-primary-foreground"><TerminalSquare className="size-5" /></div><div><p className="font-display font-semibold">Profile snapshot</p><p className="text-sm text-muted-foreground">Early-career developer</p></div></div><dl className="divide-y divide-border">{info.map(([label, value]) => <div key={label} className="grid grid-cols-[90px_1fr] gap-4 py-3.5 text-sm"><dt className="text-muted-foreground">{label}</dt><dd className="font-medium text-foreground">{value}</dd></div>)}</dl></aside></div></div></section>;
}

function Skills() {
  return <section id="skills" className="border-y border-border bg-surface/85 py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Technical toolkit" title="Skills & Technologies" intro="A practical foundation spanning application development, databases, design, and productivity tools." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{skillGroups.map((group, index) => { const Icon = skillIcons[index] ?? Code2; return <article key={group.title} className={`rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/45 ${index === 0 ? "lg:col-span-2" : ""}`}><div className="flex items-center gap-3"><Icon className="size-5 text-primary" /><h3 className="font-display text-lg font-semibold">{group.title}</h3></div><div className="mt-6 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-md border border-border bg-secondary px-3 py-2 text-sm text-secondary-foreground">{skill}</span>)}</div></article>; })}</div></div></section>;
}


export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Professional exposure" title="Work Experience" />
        <div className="relative max-w-4xl border-l border-primary/50 pl-7 sm:pl-10">
          <span className="absolute -left-2 top-0 size-4 rounded-full border-4 border-background bg-primary" />
          <article className="rounded-lg border border-border bg-card p-6 shadow-lg sm:p-8">
            <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
              <div>
                <p className="font-mono text-xs text-primary">SEPTEMBER 2023 — MARCH 2024</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">Banking Internship</h3>
                <p className="mt-2 font-medium text-muted-foreground">
                  Regional Development Bank (RDB) – Gampaha / Colombo District Office
                </p>
              </div>
              <BriefcaseBusiness className="size-7 text-primary" />
            </div>
            
            <p className="mt-6 border-t border-border pt-6 leading-7 text-muted-foreground">
              Gained professional exposure through a Banking Internship, developing familiarity with a structured workplace environment and strengthening professional communication, adaptability and organizational awareness.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["MS Word", "MS Excel", "MS PowerPoint", "MS Access"].map((tool) => (
                <span 
                  key={tool} 
                  className="inline-flex items-center rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs font-medium text-secondary-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Service Letter Button */}
            
          </article>
        </div>
      </div>
    </section>
  );
}

function EducationAndCourses() {
  return (
    <>
      {/* Education Section */}
      <section id="education" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Academic foundation" title="Education" />
          <div className="grid gap-5 lg:grid-cols-3">
            {education.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-lg border p-6 ${
                  index === 0 ? "border-primary/40 bg-accent lg:col-span-2" : "border-border bg-card"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <GraduationCap className="size-6 shrink-0 text-primary" />
                  <p className="font-mono text-xs text-primary">{item.date || item.institution}</p>
                </div>
                <h3 className="mt-8 font-display text-xl font-semibold">{item.title}</h3>
                {item.date ? <p className="mt-2 text-sm text-muted-foreground">{item.institution}</p> : null}
                <ul className="mt-5 space-y-2">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Courses & Certifications Section */}
      <section id="certifications" className="border-y border-border bg-surface/85 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Continued learning"
            title="Courses & Certifications"
            intro="Structured learning completed alongside academic and practical software development work."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {courses.map((course) => (
              <article key={course.title} className="flex flex-col justify-between rounded-lg border border-border bg-card p-6">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {course.status}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{course.date}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{course.title}</h3>
                  <p className="mt-2 text-sm font-medium text-primary">{course.institution}</p>
                  <p className="mt-4 leading-7 text-muted-foreground">{course.description}</p>
                </div>

                {/* Added Certificate View Button */}
                
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
function JourneyAndValue() {
  const values = [
    ["Problem Solving", "Ability to approach real-world problems logically and develop practical software solutions."], 
    ["Full-Stack Foundation", "Practical foundation in frontend, backend, and database technologies."], 
    ["Continuous Learning", "Actively developing technical knowledge through academic work, courses, and practical projects."], 
    ["Team & Professional Experience", "Experience working on group software projects and professional exposure through a Banking Internship."]
  ];

  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Development path" title="Professional Journey" />
          <div className="grid gap-0 md:grid-cols-3">
            {journey.map((item) => (
              <article key={item.year} className="relative border-l border-border pb-9 pl-7 md:border-l-0 md:border-t md:px-4 md:pt-8">
                <span className="absolute -left-1.5 top-0 size-3 rounded-full bg-primary md:-top-1.5 md:left-4" />
                <p className="font-mono text-xs font-semibold text-primary">{item.year}</p>
                <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.place}</p>
                {item.detail ? <p className="mt-2 text-xs text-muted-foreground">{item.detail}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/85 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[.35fr_.65fr]">
            <div>
              <SectionHeading eyebrow="Communication" title="Languages" />
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 rounded-md border border-border bg-card px-4 py-3"><LanguagesIcon className="size-4 text-primary" />English</span>
                <span className="flex items-center gap-2 rounded-md border border-border bg-card px-4 py-3"><LanguagesIcon className="size-4 text-primary" />Sinhala</span>
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="Working strengths" title="What I Bring" />
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map(([title, text], index) => (
                  <article key={title} className="rounded-lg border border-border bg-card p-5">
                    <span className="font-mono text-xs text-primary">0{index + 1}</span>
                    <h3 className="mt-3 font-display text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return <footer className="bg-background py-12"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-8 border-b border-border pb-8 md:grid-cols-[1fr_auto]"><div><p className="font-display text-xl font-semibold">Hasini Nethmini<span className="text-primary">.</span></p><p className="mt-2 text-sm text-muted-foreground">IT Intern <span className="text-primary">|</span> Trainee Software Developer</p></div><nav aria-label="Footer navigation" className="flex max-w-2xl flex-wrap gap-x-5 gap-y-3">{navigation.map(([label, id]) => <button key={id} onClick={() => goTo(id)} className="text-sm text-muted-foreground transition-colors hover:text-primary">{label}</button>)}</nav></div><div className="flex flex-col gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-muted-foreground">© 2026 Hasini Nethmini. All rights reserved.</p><div className="flex gap-4"><a href={personal.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary"><Github className="size-5" /></a><a href={personal.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin className="size-5" /></a><a href={personal.socials.email} aria-label="Email" className="text-muted-foreground hover:text-primary"><Mail className="size-5" /></a></div></div></div></footer>;
}

export function Portfolio() {
  return <><Navbar /><main><Hero /><Highlights /><About /><Skills /><Experience /><Projects /><EducationAndCourses /><JourneyAndValue /><Contact /></main><Footer /></>;
}