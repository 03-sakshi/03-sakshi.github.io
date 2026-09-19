"use client";

import { Award } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, revealItemVariants } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/data/resume";
import { motion } from "framer-motion";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Training"
          description="Structured programs that back up the hands-on experience above."
          ledColor="accent"
        />

        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <motion.div key={cert.id} variants={revealItemVariants}>
              <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-secondary">{cert.provider}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted">{cert.duration}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
