"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { TypingText } from "@/components/motion/typing-text";
import { CircuitBackground, AmbientBlobs } from "@/components/sections/circuit-background";
import { personal, stats } from "@/data/resume";
import { AnimatedCounter } from "@/components/motion/animated-counter";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <AmbientBlobs />
      <div className="absolute inset-0 z-0">
        <CircuitBackground />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1"
        >
          <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-secondary shadow-[0_0_8px_var(--secondary)]" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            Available for opportunities
          </span>
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{personal.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display text-xl font-medium text-foreground/80 sm:text-2xl"
          >
            <span className="font-mono text-secondary">&gt;</span>{" "}
            <TypingText words={personal.taglineRoles} className="text-foreground" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {personal.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg">
              <a href={personal.resumeFile} download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>

            <div className="ml-1 flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="glass grid grid-cols-2 gap-6 rounded-2xl px-6 py-6 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.id} className="text-center sm:text-left">
              <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
