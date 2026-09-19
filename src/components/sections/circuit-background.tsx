"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * Signature visual: a PCB-trace / network-topology graph.
 * Nodes = network hosts / component pads. Edges = traces / links.
 * Pulses travel the edges like packets on a network or signal on a trace —
 * a direct nod to the networking + embedded-systems + automation identity.
 */
type Node = { id: number; x: number; y: number };
type Edge = { from: number; to: number };

const NODES: Node[] = [
  { id: 0, x: 60, y: 80 },
  { id: 1, x: 220, y: 40 },
  { id: 2, x: 380, y: 110 },
  { id: 3, x: 540, y: 60 },
  { id: 4, x: 680, y: 140 },
  { id: 5, x: 140, y: 220 },
  { id: 6, x: 320, y: 260 },
  { id: 7, x: 480, y: 220 },
  { id: 8, x: 620, y: 280 },
  { id: 9, x: 760, y: 200 },
  { id: 10, x: 40, y: 340 },
  { id: 11, x: 240, y: 380 },
  { id: 12, x: 420, y: 360 },
  { id: 13, x: 600, y: 400 },
  { id: 14, x: 740, y: 340 },
];

const EDGES: Edge[] = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 0, to: 5 },
  { from: 1, to: 5 },
  { from: 2, to: 6 },
  { from: 3, to: 7 },
  { from: 4, to: 9 },
  { from: 7, to: 8 },
  { from: 8, to: 9 },
  { from: 5, to: 6 },
  { from: 6, to: 7 },
  { from: 5, to: 10 },
  { from: 6, to: 11 },
  { from: 7, to: 12 },
  { from: 8, to: 13 },
  { from: 9, to: 14 },
  { from: 10, to: 11 },
  { from: 11, to: 12 },
  { from: 12, to: 13 },
  { from: 13, to: 14 },
];

const nodeMap = new Map(NODES.map((n) => [n.id, n]));

export function CircuitBackground() {
  const pulseEdges = useMemo(() => {
    // pick a subset of edges to animate signal pulses on
    return EDGES.filter((_, i) => i % 2 === 0);
  }, []);

  return (
    <svg
      viewBox="0 0 800 440"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      className="h-full w-full opacity-[0.55] dark:opacity-[0.65]"
    >
      <defs>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.25" />
        </linearGradient>
        <radialGradient id="nodeGrad">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* static traces */}
      {EDGES.map((e, i) => {
        const a = nodeMap.get(e.from)!;
        const b = nodeMap.get(e.to)!;
        return (
          <line
            key={`edge-${i}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="url(#edgeGrad)"
            strokeWidth="1"
          />
        );
      })}

      {/* traveling pulses (packets / signal) */}
      {pulseEdges.map((e, i) => {
        const a = nodeMap.get(e.from)!;
        const b = nodeMap.get(e.to)!;
        const colors = ["var(--primary)", "var(--secondary)", "var(--accent)"];
        const color = colors[i % colors.length];
        const duration = 3 + (i % 4);
        return (
          <circle key={`pulse-${i}`} r="3" fill={color}>
            <animateMotion
              dur={`${duration}s`}
              repeatCount="indefinite"
              path={`M${a.x},${a.y} L${b.x},${b.y}`}
              begin={`${i * 0.4}s`}
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur={`${duration}s`}
              repeatCount="indefinite"
              begin={`${i * 0.4}s`}
            />
          </circle>
        );
      })}

      {/* nodes */}
      {NODES.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="10" fill="url(#nodeGrad)" />
          <circle
            cx={n.x}
            cy={n.y}
            r="2.5"
            fill="var(--background)"
            stroke="var(--primary)"
            strokeWidth="1.2"
          />
        </g>
      ))}
    </svg>
  );
}

export function AmbientBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/25 blur-[110px]"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-secondary/20 blur-[100px]"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/15 blur-[110px]"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
