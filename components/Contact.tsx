"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { contactInfo } from "@/data/contact";
import { profile } from "@/data/profile";

const contactIcons = {
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
} as const;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify(formData),
      });
      const contentType = response.headers.get("content-type") ?? "";
      const data = contentType.includes("application/json")
        ? ((await response.json().catch(() => null)) as { error?: string } | null)
        : null;

      if (!response.ok) {
        throw new Error(data?.error || `Contact service is unavailable. Please email me at ${profile.email}.`);
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
    if (status !== "idle" && status !== "loading") setStatus("idle");
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="page-shell">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="section-eyebrow">04 / Let’s connect</p>
            <h2 className="section-title">Something in mind?<br /><span className="text-primary">Let’s build it.</span></h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
              Tell me what you are building, where you are stuck, or what you
              want to improve. I usually reply within one business day.
            </p>

            <div className="mt-12 divide-y divide-border border-y border-border">
              {contactInfo.map((info) => {
                const Icon = contactIcons[info.icon];
                return (
                  <a
                    key={info.title}
                    href={info.link}
                    className="group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-2 py-5 sm:gap-4"
                  >
                    <span className="grid h-11 w-11 place-items-center bg-secondary text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="technical-label block">{info.title}</span>
                      <span className="mt-1 block break-words text-sm font-medium sm:text-base">{info.content}</span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-5">
              {profile.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground underline decoration-border underline-offset-8 transition-colors hover:text-primary"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_16px_50px_-30px_hsl(var(--foreground)/0.2)] sm:p-9 lg:p-12">
            <div className="mb-9 flex items-end justify-between border-b border-border pb-6">
              <div>
                <p className="technical-label">Project inquiry</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em]">Share the essentials.</h3>
              </div>
              <ArrowUpRight className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>

            {status === "success" && (
              <div className="mb-7 flex items-center gap-3 border border-accent/40 bg-accent/10 p-4" role="status" aria-live="polite">
                <CheckCircle className="h-5 w-5 text-accent" />
                <p>Your message has been sent. I&apos;ll be in touch soon.</p>
              </div>
            )}
            {status === "error" && (
              <div className="mb-7 flex items-center gap-3 border border-destructive/40 bg-destructive/10 p-4" role="alert">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <p>{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" aria-busy={status === "loading"}>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Your name" htmlFor="name">
                  <Input id="name" name="name" autoComplete="name" placeholder="Jane Smith" minLength={2} value={formData.name} onChange={handleChange} required disabled={status === "loading"} />
                </Field>
                <Field label="Email address" htmlFor="email">
                  <Input id="email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" value={formData.email} onChange={handleChange} required disabled={status === "loading"} />
                </Field>
              </div>
              <Field label="What can I help with?" htmlFor="subject">
                <Input id="subject" name="subject" placeholder="New product, redesign, or collaboration" minLength={3} value={formData.subject} onChange={handleChange} required disabled={status === "loading"} />
              </Field>
              <Field label="Project details" htmlFor="message">
                <Textarea id="message" name="message" placeholder="A short overview of your goals, scope, and ideal timeline..." minLength={10} value={formData.message} onChange={handleChange} required disabled={status === "loading"} rows={6} />
              </Field>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-xs leading-5 text-muted-foreground">
                  Your details are used only to respond to this inquiry.
                </p>
                <Button type="submit" size="lg" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Send inquiry"}
                  {status !== "loading" && <Send />}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}
