"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Clock3,
  ShieldCheck,
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

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        cache: "no-store",
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type") ?? "";
      const data = contentType.includes("application/json")
        ? ((await response.json().catch(() => null)) as { error?: string } | null)
        : null;

      if (!response.ok) {
        throw new Error(
          data?.error ||
            `Contact service is unavailable. Please email me directly at ${profile.email}.`
        );
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message"
      );
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title mb-4">
            Have a project in mind? Let&apos;s make it real.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Send a few details about your idea, timeline, and goals. I&apos;ll
            respond with clear next steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black tracking-tight mb-4">
                Let&apos;s build something useful, polished, and scalable.
              </h3>
              <p className="text-muted-foreground mb-6 leading-8">
                I&apos;m open to freelance projects, collaboration, and product
                engineering opportunities where clean execution and reliable
                delivery matter.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-border/70 bg-card/70 p-5 backdrop-blur">
                <Clock3 className="mb-3 h-5 w-5 text-primary" />
                <p className="font-semibold">Quick response</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Usually within 24 hours.
                </p>
              </div>
              <div className="rounded-3xl border border-border/70 bg-card/70 p-5 backdrop-blur">
                <ShieldCheck className="mb-3 h-5 w-5 text-accent" />
                <p className="font-semibold">Professional delivery</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Clear scope, code quality, and handoff.
                </p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = contactIcons[info.icon];

                return (
                  <Card
                    key={info.title}
                    className="group transition-all hover:-translate-y-1 hover:border-primary/50"
                  >
                    <CardContent className="p-6">
                      <a
                        href={info.link}
                        className="flex items-center gap-4 group"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                          <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {info.title}
                          </p>
                          <p className="font-medium group-hover:text-primary transition-colors">
                            {info.content}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {profile.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border/80 bg-card/70 px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                    aria-label={`Follow me on ${social.name}`}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="overflow-hidden border-primary/20">
            <CardContent className="p-6 sm:p-8">
              {/* Status Messages */}
              {status === "success" && (
                <div className="mb-6 p-4 bg-primary/10 border border-primary/25 rounded-2xl flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p className="text-primary">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <p className="text-red-500">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <p className="text-sm text-primary text-center">
                    Thank you! I&apos;ll get back to you soon.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
