import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { personal } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "Name must be under 100 characters."),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  subject: z.string().trim().min(3, "Please enter a subject.").max(150),
  message: z.string().trim().min(10, "Please enter at least 10 characters.").max(1500, "Message must be under 1,500 characters."),
});

type FormData = z.infer<typeof contactSchema>;
const initialForm: FormData = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const nextErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((issue) => { 
        const field = issue.path[0] as keyof FormData; 
        if (!nextErrors[field]) nextErrors[field] = issue.message; 
      });
      setErrors(nextErrors);
      setSent(false);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "0cafcd43-42ad-4cd7-9fab-5f7df0a221b8",
          name: result.data.name,
          email: result.data.email,
          subject: result.data.subject,
          message: result.data.message,
        }),
      });

      const resData = await response.json();

      if (resData.success) {
        setSent(true);
        setForm(initialForm);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Failed to send message. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSent(false);
  };

  return (
    <section id="contact" className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Start a conversation" title="Let's Connect" intro="I'm open to IT internship, software development internship, and entry-level software development opportunities where I can contribute, learn, and grow as a software professional." />
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div>
            <h3 className="font-display text-xl font-semibold">Contact details</h3>
            <div className="mt-6 space-y-4">
              <a href={personal.socials.email} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"><span className="grid size-10 shrink-0 place-items-center rounded-md bg-accent"><Mail className="size-4" /></span>{personal.email}</a>
              <a href={`tel:${personal.phone.replaceAll(" ", "")}`} className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"><span className="grid size-10 shrink-0 place-items-center rounded-md bg-accent"><Phone className="size-4" /></span>{personal.phone}</a>
              <p className="flex items-center gap-3 text-muted-foreground"><span className="grid size-10 shrink-0 place-items-center rounded-md bg-accent"><MapPin className="size-4" /></span>{personal.location}</p>
            </div>
            <div className="mt-8 flex gap-3">
              <Button asChild variant="outline" size="icon" className="min-h-11 min-w-11"><a href={personal.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github /></a></Button>
              <Button asChild variant="outline" size="icon" className="min-h-11 min-w-11"><a href={personal.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin /></a></Button>
              <Button asChild variant="outline" size="icon" className="min-h-11 min-w-11"><a href={personal.socials.email} target="_blank" rel="noreferrer" aria-label="Send email"><Mail /></a></Button>
            </div>
          </div>
          <form onSubmit={submit} noValidate className="rounded-lg border border-border bg-card p-5 shadow-xl sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {(["name", "email"] as const).map((field) => (
                <div key={field} className="space-y-2">
                  <Label htmlFor={field}>{field === "name" ? "Name" : "Email"}</Label>
                  <Input id={field} type={field === "email" ? "email" : "text"} value={form[field]} onChange={(e) => update(field, e.target.value)} maxLength={field === "name" ? 100 : 255} required aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `${field}-error` : undefined} className="h-11 bg-background" />
                  {errors[field] ? <p id={`${field}-error`} className="text-sm text-destructive">{errors[field]}</p> : null}
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="subject">Subject</Label><Input id="subject" value={form.subject} onChange={(e) => update("subject", e.target.value)} maxLength={150} required aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "subject-error" : undefined} className="h-11 bg-background" />
              {errors.subject ? <p id="subject-error" className="text-sm text-destructive">{errors.subject}</p> : null}
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Message</Label><Textarea id="message" value={form.message} onChange={(e) => update("message", e.target.value)} maxLength={1500} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} className="min-h-36 resize-y bg-background" />
              {errors.message ? <p id="message-error" className="text-sm text-destructive">{errors.message}</p> : null}
            </div>
            {sent ? <p role="status" className="mt-5 flex items-center gap-2 text-sm text-primary"><CheckCircle2 className="size-4" />Your message has been sent successfully!</p> : null}
            <Button type="submit" size="lg" disabled={isSubmitting} className="mt-6 w-full sm:w-auto">
              {isSubmitting ? <><Loader2 className="mr-2 size-4 animate-spin" />Sending...</> : <><Send />Send Message</>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}