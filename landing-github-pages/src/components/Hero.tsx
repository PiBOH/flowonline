import { useEffect, useState, type ReactNode } from "react";
import { LINKS } from "@/data";
import { cn } from "@/utils/cn";
import { ConsolePanel } from "./ConsolePanel";
import { FlowchartDiagram } from "./FlowchartDiagram";
import {
  PrimaryButton,
  SecondaryButton,
  WindowChrome,
} from "./ui";
import { IconArrowRight, IconCheck, IconGithub, IconPlay } from "./icons";

// Execution sequence across two cycles (Sì branch, then No branch)
const SEQ = [0, 1, 2, 3, 4, 6, 0, 1, 2, 3, 5, 6];

const NODE_LABELS = [
  "inizio",
  "output",
  "input",
  "decisione",
  "→ maggiorenne",
  "→ minorenne",
  "fine",
];

function ToolButton({
  children,
  active,
}: {
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium",
        active
          ? "bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/40"
          : "bg-white/5 text-zinc-400"
      )}
    >
      {children}
    </span>
  );
}

export function Hero() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1050);
    return () => clearInterval(id);
  }, []);

  const active = SEQ[tick % SEQ.length];
  const running = active >= 1 && active < 6;

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="animate-float absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-600/25 blur-[110px]" />
        <div className="animate-float-slow absolute -right-20 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28">
        {/* Left: copy */}
        <div className="reveal is-visible max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            Basato su Flowgorithm · 100% nel browser
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Disegna la logica.
            <br />
            <span className="text-gradient">Eseguiscila nel browser.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            FlowOnline è l'editor a diagrammi di flusso che gira ovunque: crea
            algoritmi trascinando i blocchi, eseguili passo per passo e
            osserva variabili e output, il tutto senza installare nulla.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={LINKS.app}>
              <IconPlay className="h-4 w-4" />
              Apri l'editor
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </PrimaryButton>
            <SecondaryButton href={LINKS.github}>
              <IconGithub className="h-4 w-4" />
              Vedi su GitHub
            </SecondaryButton>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-500">
            {["Nessuna installazione", "Open source", "Gratis per sempre"].map(
              (t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <IconCheck className="h-4 w-4 text-emerald-400" />
                  {t}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right: app preview */}
        <div className="reveal is-visible relative">
          <div className="glass-strong overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10">
            <WindowChrome title="maggiorenne.fprg">
              <ToolButton active={running}>
                <IconPlay className="h-3.5 w-3.5" />
                Esegui
              </ToolButton>
              <span className="hidden rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-zinc-500 sm:inline">
                Passo
              </span>
            </WindowChrome>

            {/* toolbar */}
            <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-[#0a0e1a]/60 px-4 py-2">
              {["Inizio", "Output", "Input", "Decisione", "Ciclo"].map((b) => (
                <span
                  key={b}
                  className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-zinc-500"
                >
                  {b}
                </span>
              ))}
              <span className="ml-auto font-mono text-[10px] text-zinc-600">
                100%
              </span>
            </div>

            {/* canvas */}
            <div className="bg-grid relative bg-[#070a14] px-3 py-4">
              <div className="mx-auto w-full max-w-[330px]">
                <FlowchartDiagram active={active} />
              </div>
            </div>

            {/* console docked */}
            <div className="border-t border-white/10">
              <ConsolePanel active={active} />
            </div>
          </div>

          {/* floating badge */}
          <div className="absolute -right-3 -top-3 hidden rotate-3 rounded-xl border border-white/10 bg-[#0c1120] px-3 py-2 text-xs font-medium text-zinc-300 shadow-xl sm:block">
            <span className="text-emerald-400">●</span> live ·{" "}
            {NODE_LABELS[active]}
          </div>
        </div>
      </div>
    </section>
  );
}
