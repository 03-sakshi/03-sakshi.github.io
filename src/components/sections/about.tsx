import { GraduationCap, Target, User } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { personal, education } from "@/data/resume";

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="System Overview"
          title="About Me"
          description="A quick read-out on who I am and what I'm building toward."
          ledColor="primary"
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-3">
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <User className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">Professional Summary</h3>
                <p className="mt-3 leading-relaxed text-muted">{personal.summary}</p>

                <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">Career Objective</h3>
                <p className="mt-3 leading-relaxed text-muted">{personal.objective}</p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal direction="right" delay={0.1} className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="flex h-full flex-col p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">Education</h3>

                <div className="mt-4 flex flex-1 flex-col justify-between gap-6">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <p className="font-medium leading-snug">{edu.degree}</p>
                      <p className="mt-1 text-sm text-muted">{edu.institution}</p>
                      <p className="font-mono text-xs text-muted">
                        {edu.location} • {edu.duration}
                      </p>
                    </div>
                  ))}

                  <div className="rounded-xl border border-border bg-foreground/5 p-4">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-xs uppercase tracking-wide text-muted">
                        CGPA
                      </span>
                      <span className="font-display text-2xl font-bold text-gradient">
                        {education[0].cgpa}
                        <span className="text-sm text-muted">/{education[0].cgpaScale}</span>
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        style={{ width: `${(parseFloat(education[0].cgpa) / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
