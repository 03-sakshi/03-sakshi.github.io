"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/data/resume";

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Academic Record"
          title="Education"
          ledColor="secondary"
        />

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 hidden sm:block">
            <div className="ladder-rail" />
          </div>

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <Reveal key={edu.id} direction="left" delay={idx * 0.1}>
                <div className="relative flex gap-6">
                  <div className="relative hidden sm:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className="glass relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-secondary"
                    >
                      <GraduationCap className="h-4 w-4" />
                    </motion.div>
                  </div>

                  <Card className="flex-1 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg">
                    <CardContent className="p-6 sm:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-display text-lg font-semibold">{edu.degree}</h3>
                        <span className="rounded-full border border-border bg-foreground/5 px-3 py-1 font-mono text-xs text-muted">
                          {edu.duration}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted">
                        {edu.institution} • {edu.location}
                      </p>

                      <div className="mt-4 flex items-center gap-3">
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(parseFloat(edu.cgpa) / 10) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                          />
                        </div>
                        <span className="font-mono text-sm font-semibold text-gradient">
                          CGPA {edu.cgpa}/{edu.cgpaScale}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
