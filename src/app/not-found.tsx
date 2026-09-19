import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <span className="font-mono text-sm uppercase tracking-widest text-muted">Error 404</span>
      <h1 className="font-display text-4xl font-bold text-gradient">Route not found</h1>
      <p className="max-w-md text-muted">
        This path doesn&apos;t resolve to anything on this system. Let&apos;s route you back home.
      </p>
      <Button asChild size="lg" className="mt-2">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
