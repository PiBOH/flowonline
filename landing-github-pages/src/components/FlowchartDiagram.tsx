import { cn } from "@/utils/cn";

type Kind = "ellipse" | "para" | "diamond";

type Node = {
  id: string;
  kind: Kind;
  color: string;
  fill: string;
  label: string[];
  cx: number;
  cy: number;
  rx?: number;
  ry?: number;
  w?: number;
  h?: number;
  s?: number;
  hw?: number;
  hh?: number;
};

// Coordinates tuned for a 380 x 520 viewBox
const NODES: Node[] = [
  {
    id: "start",
    kind: "ellipse",
    cx: 190,
    cy: 44,
    rx: 50,
    ry: 23,
    color: "#34d399",
    fill: "rgba(52,211,153,0.14)",
    label: ["Inizio"],
  },
  {
    id: "out",
    kind: "para",
    cx: 190,
    cy: 120,
    w: 196,
    h: 44,
    s: 14,
    color: "#fbbf24",
    fill: "rgba(251,191,36,0.14)",
    label: ["Output", '"Inserisci età"'],
  },
  {
    id: "in",
    kind: "para",
    cx: 190,
    cy: 198,
    w: 120,
    h: 42,
    s: 12,
    color: "#38bdf8",
    fill: "rgba(56,189,248,0.14)",
    label: ["Input eta"],
  },
  {
    id: "dec",
    kind: "diamond",
    cx: 190,
    cy: 300,
    hw: 74,
    hh: 44,
    color: "#a78bfa",
    fill: "rgba(167,139,250,0.16)",
    label: ["eta >= 18 ?"],
  },
  {
    id: "yes",
    kind: "para",
    cx: 312,
    cy: 300,
    w: 120,
    h: 46,
    s: 12,
    color: "#fbbf24",
    fill: "rgba(251,191,36,0.14)",
    label: ["Output", '"Maggiorenne"'],
  },
  {
    id: "no",
    kind: "para",
    cx: 68,
    cy: 300,
    w: 120,
    h: 46,
    s: 12,
    color: "#fbbf24",
    fill: "rgba(251,191,36,0.14)",
    label: ["Output", '"Minorenne"'],
  },
  {
    id: "end",
    kind: "ellipse",
    cx: 190,
    cy: 452,
    rx: 50,
    ry: 23,
    color: "#34d399",
    fill: "rgba(52,211,153,0.14)",
    label: ["Fine"],
  },
];

const EDGES: { d: string; arrow: boolean }[] = [
  { d: "M190,67 L190,99", arrow: true },
  { d: "M190,141 L190,177", arrow: true },
  { d: "M190,219 L190,256", arrow: true },
  { d: "M264,300 L259,300", arrow: true },
  { d: "M116,300 L121,300", arrow: true },
  { d: "M312,323 L312,415 L190,415 L190,429", arrow: true },
  { d: "M68,323 L68,415 L190,415", arrow: false },
];

const EDGE_LABELS = [
  { x: 200, y: 92, t: "" },
  { x: 200, y: 162, t: "" },
  { x: 200, y: 240, t: "" },
  { x: 270, y: 291, t: "Sì" },
  { x: 100, y: 291, t: "No" },
];

function shapePath(n: Node): string {
  if (n.kind === "ellipse") return "";
  if (n.kind === "diamond") {
    const { cx, cy, hw = 0, hh = 0 } = n;
    return `${cx},${cy - hh} ${cx + hw},${cy} ${cx},${cy + hh} ${cx - hw},${cy}`;
  }
  // parallelogram
  const { cx, cy, w = 0, h = 0, s = 0 } = n;
  const x1 = cx - w / 2 + s;
  const x2 = cx + w / 2;
  const yt = cy - h / 2;
  const yb = cy + h / 2;
  return `${x1},${yt} ${x2},${yt} ${cx + w / 2 - s},${yb} ${cx - w / 2},${yb}`;
}

export function FlowchartDiagram({ active }: { active: number }) {
  return (
    <svg
      viewBox="0 0 380 520"
      className="h-full w-full"
      role="img"
      aria-label="Diagramma di flusso di esempio: verifica se l'utente e maggiorenne"
    >
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="#5b6577" />
        </marker>
      </defs>

      {/* edges */}
      {EDGES.map((e, i) => (
        <path
          key={i}
          d={e.d}
          fill="none"
          stroke="#3b4356"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="edge-flow"
          markerEnd={e.arrow ? "url(#arrow)" : undefined}
        />
      ))}

      {/* edge labels */}
      {EDGE_LABELS.map((l, i) =>
        l.t ? (
          <text
            key={i}
            x={l.x}
            y={l.y}
            fill="#9aa3b5"
            fontSize="13"
            fontWeight={600}
            fontStyle="italic"
          >
            {l.t}
          </text>
        ) : null
      )}

      {/* nodes */}
      {NODES.map((n, i) => {
        const on = i === active;
        const common = {
          fill: on ? n.fill.replace("0.14", "0.34").replace("0.16", "0.36") : n.fill,
          stroke: on ? "#ffffff" : n.color,
          strokeWidth: on ? 2.4 : 1.6,
          style: on
            ? { filter: `drop-shadow(0 0 9px ${n.color})` }
            : undefined,
        };
        return (
          <g
            key={n.id}
            className={cn(
              "transition-all duration-300",
              on ? "[&_text]:fill-white" : "[&_text]:fill-[#dfe3ec]"
            )}
          >
            {n.kind === "ellipse" && (
              <ellipse cx={n.cx} cy={n.cy} rx={n.rx} ry={n.ry} {...common} />
            )}
            {n.kind === "diamond" && (
              <polygon points={shapePath(n)} {...common} />
            )}
            {n.kind === "para" && (
              <polygon points={shapePath(n)} {...common} />
            )}
            {n.label.length === 1 ? (
              <text
                x={n.cx}
                y={n.cy}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="14.5"
                fontWeight={600}
              >
                {n.label[0]}
              </text>
            ) : (
              n.label.map((line, li) => (
                <text
                  key={li}
                  x={n.cx}
                  y={n.cy - 8 + li * 17}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="13"
                  fontWeight={600}
                >
                  {line}
                </text>
              ))
            )}
          </g>
        );
      })}
    </svg>
  );
}
