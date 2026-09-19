"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/resume";

type FormState = "idle" | "submitting" | "success";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");

    // No backend endpoint is wired up yet — open the user's mail client
    // pre-filled with the message as a reliable fallback.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);

    await new Promise((r) => setTimeout(r, 700));
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setState("success");
    setTimeout(() => {
      setState("idle");
      setForm({ name: "", email: "", message: "" });
    }, 3200);
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Open Channel"
          title="Let's Build Something"
          description="Have a role, a project, or just want to talk networking and automation? Send a message."
          ledColor="secondary"
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="flex h-full flex-col gap-6 p-8">
                <div>
                  <h3 className="font-display text-lg font-semibold">Contact Info</h3>
                  <p className="mt-1 text-sm text-muted">
                    Reach me directly, or use the form.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-3 rounded-xl border border-border p-3 text-sm transition-colors hover:border-primary/40 hover:bg-foreground/5"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-4 w-4" />
                    </span>
                    {personal.email}
                  </a>
                  <a
                    href={`tel:${personal.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 rounded-xl border border-border p-3 text-sm transition-colors hover:border-secondary/40 hover:bg-foreground/5"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <Phone className="h-4 w-4" />
                    </span>
                    {personal.phone}
                  </a>
                  <div className="flex items-center gap-3 rounded-xl border border-border p-3 text-sm">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <MapPin className="h-4 w-4" />
                    </span>
                    {personal.location}
                  </div>
                </div>

                <div className="mt-auto flex gap-3 pt-4">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm transition-colors hover:border-primary/40 hover:bg-foreground/5"
                  >
                    <GithubIcon className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm transition-colors hover:border-primary/40 hover:bg-foreground/5"
                  >
                    <LinkedinIcon className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal direction="right" delay={0.1} className="lg:col-span-3">
            <Card className="h-full">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Tell me a bit about the role or project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={state !== "idle"}>
                    <AnimatePresence mode="wait" initial={false}>
                      {state === "idle" && (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <Send className="h-4 w-4" /> Send Message
                        </motion.span>
                      )}
                      {state === "submitting" && (
                        <motion.span
                          key="submitting"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                        </motion.span>
                      )}
                      {state === "success" && (
                        <motion.span
                          key="success"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 className="h-4 w-4" /> Opened in Mail
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                  <p className="text-center font-mono text-xs text-muted">
                    Submitting opens your email client with this message pre-filled.
                  </p>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
