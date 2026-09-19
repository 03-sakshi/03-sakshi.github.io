"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/data/resume";

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Field Log"
          title="Experience"
          description="Roles where I put networking and automation theory into practice."
          ledColor="accent"
        />

        <div className="relative">
          {/* the rail */}
          <div className="absolute left-[19px] top-2 bottom-2 hidden sm:block">
            <div className="ladder-rail" />
          </div>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <Reveal key={exp.id} direction="left" delay={idx * 0.1}>
                <div className="relative flex gap-6">
                  <div className="relative hidden sm:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: idx * 0.1 }}
                      className="glass relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-primary"
                    >
                      <Briefcase className="h-4 w-4" />
                    </motion.div>
                  </div>

                  <Card className="flex-1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                    <CardContent className="p-6 sm:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-foreground/5 px-3 py-1 font-mono text-xs text-muted">
                          <CalendarDays className="h-3 w-3" />
                          {exp.duration}
                        </span>
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                        <span className="font-medium text-secondary">{exp.company}</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2.5">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-foreground/85">
                            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                            {point}
                          </li>
                        ))}
                      </ul>
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
