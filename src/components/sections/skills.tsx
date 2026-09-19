"use client";

import {
  Cpu,
  Network,
  Factory,
  MonitorCog,
  Terminal,
  Code2,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, revealItemVariants } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { skillCategories } from "@/data/resume";
import { motion } from "framer-motion";

const ICONS: Record<string, LucideIcon> = {
  languages: Code2,
  networking: Network,
  automation: Factory,
  embedded: Cpu,
  os: MonitorCog,
};

const COLOR_VAR: Record<string, "--primary" | "--secondary" | "--accent"> = {
  languages: "--primary",
  networking: "--secondary",
  automation: "--accent",
  embedded: "--primary",
  os: "--secondary",
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Skills"
          description="Grouped by the domains I actually work in — from a router CLI to a control-panel wiring diagram."
          ledColor="secondary"
        />

        <RevealGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((cat) => {
            const Icon = ICONS[cat.id] ?? Terminal;
            const colorVar = COLOR_VAR[cat.id] ?? "--primary";
            return (
              <motion.div key={cat.id} variants={revealItemVariants}>
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <CardHeader className="pb-2">
                    <div
                      className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `color-mix(in oklab, var(${colorVar}) 15%, transparent)`,
                        color: `var(${colorVar})`,
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{cat.label}</h3>
                    <p className="text-sm text-muted">{cat.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-2">
                    {cat.skills.map((skill) => (
                      <ProgressBar
                        key={skill.name}
                        value={skill.level}
                        label={skill.name}
                        colorVar={colorVar}
                      />
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-6">
          <p className="text-center font-mono text-xs text-muted">
            Proficiency bars reflect relative depth of hands-on experience, not a formal certification score.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
