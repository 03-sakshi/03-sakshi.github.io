export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary border-r-secondary" />
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted">Loading…</p>
      </div>
    </div>
  );
}
