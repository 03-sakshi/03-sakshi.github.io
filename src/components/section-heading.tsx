import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  ledColor = "secondary",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  ledColor?: "primary" | "secondary" | "accent";
}) {
  const ledMap = {
    primary: "bg-primary shadow-[0_0_8px_var(--primary)]",
    secondary: "bg-secondary shadow-[0_0_8px_var(--secondary)]",
    accent: "bg-accent shadow-[0_0_8px_var(--accent)]",
  };

  return (
    <Reveal className={cn("mb-12", align === "center" && "text-center")}>
      <div
        className={cn(
          "mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-3 py-1",
          align === "center" && "mx-auto"
        )}
      >
        <span className={cn("h-1.5 w-1.5 animate-pulse-slow rounded-full", ledMap[ledColor])} />
        <span className="font-mono text-xs uppercase tracking-widest text-muted">{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 max-w-2xl text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
