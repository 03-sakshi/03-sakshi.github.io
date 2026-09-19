"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Radar, Droplets, TrafficCone, type LucideIcon } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ProjectItem } from "@/data/resume";

const ICONS: Record<string, LucideIcon> = {
  "spy-robot": Radar,
  "water-pipeline": Droplets,
  "traffic-management": TrafficCone,
};

export function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = ICONS[project.id] ?? Radar;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/10"
      >
        {/* image placeholder */}
        <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <motion.div
            style={{ transform: "translateZ(40px)" }}
            className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-background-elevated text-primary shadow-lg transition-transform duration-300 group-hover:scale-110"
          >
            <Icon className="h-8 w-8" />
          </motion.div>
        </div>

        <div className="flex flex-1 flex-col p-6" style={{ transform: "translateZ(20px)" }}>
          <h3 className="font-display text-lg font-semibold leading-snug">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

          <ul className="mt-4 space-y-2">
            {project.features.map((f, i) => (
              <li key={i} className="flex gap-2 text-xs leading-relaxed text-foreground/80">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-secondary" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge key={t} variant="default">
                {t}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <Button asChild variant="outline" size="sm" className="flex-1">
              <a href={project.github} target="_blank" rel="noreferrer">
                <GithubIcon className="h-3.5 w-3.5" />
                Code
              </a>
            </Button>
            <Button
              asChild={!!project.demo}
              variant="secondary"
              size="sm"
              className="flex-1"
              disabled={!project.demo}
            >
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              ) : (
                <span className="flex items-center gap-2">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Demo Soon
                </span>
              )}
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
