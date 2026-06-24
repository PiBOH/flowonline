import { cn } from "@/utils/cn";
import { WindowChrome } from "./ui";

type Line = { text: string; cls: string };

function buildLines(active: number): Line[] {
  const lines: Line[] = [];
  if (active >= 1)
    lines.push({ text: "Inserisci la tua età:", cls: "text-amber-200" });
  if (active >= 2) lines.push({ text: "> 20", cls: "text-sky-300" });
  if (active === 4) lines.push({ text: "Maggiorenne", cls: "text-emerald-300" });
  if (active === 5) lines.push({ text: "Minorenne", cls: "text-rose-300" });
  if (active >= 6)
    lines.push({ text: "— Programma terminato —", cls: "text-zinc-500" });
  return lines;
}

export function ConsolePanel({ active }: { active: number }) {
  const lines = buildLines(active);
  const running = active >= 1 && active < 6;

  return (
    <div className="glass-strong overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
      <WindowChrome dots={false} title="console · output">
        <span
          className={cn(
            "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider",
            running
              ? "bg-emerald-400/10 text-emerald-300"
              : "bg-white/5 text-zinc-400"
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              running ? "animate-pulse bg-emerald-400" : "bg-zinc-500"
            )}
          />
          {running ? "In esecuzione" : "Inattivo"}
        </span>
      </WindowChrome>

      {/* output */}
      <div className="min-h-[128px] space-y-1.5 px-4 py-4 font-mono text-[13px] leading-relaxed">
        {lines.length === 0 && <p className="text-zinc-600">~ in attesa di input</p>}
        {lines.map((l, i) => (
          <p key={i} className={l.cls}>
            {l.text}
          </p>
        ))}
        {running && <span className="cursor-blink text-violet-300">▋</span>}
      </div>

      {/* variables */}
      <div className="flex items-center gap-2 border-t border-white/10 bg-white/[0.02] px-4 py-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
          variabili
        </span>
        <span className="ml-auto flex items-center gap-1.5 rounded-md bg-sky-400/10 px-2.5 py-1 font-mono text-xs">
          <span className="text-sky-300">eta</span>
          <span className="text-zinc-500">=</span>
          <span className={cn(active >= 2 ? "text-white" : "text-zinc-600")}>
            {active >= 2 ? "20" : "—"}
          </span>
        </span>
      </div>
    </div>
  );
}
