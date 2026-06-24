import { useState } from "react";
import { CODE_SAMPLES } from "@/data";
import { cn } from "@/utils/cn";
import { FlowchartDiagram } from "./FlowchartDiagram";
import { SectionHeading, WindowChrome } from "./ui";
import { IconArrowUpRight } from "./icons";
import { Reveal } from "./Reveal";

const KEYWORDS: Record<string, Set<string>> = {
  python: new Set([
    "def", "if", "else", "elif", "while", "for", "return", "print", "input",
    "int", "float", "True", "False", "None", "import", "from", "in", "and",
    "or", "not", "as", "is", "str",
  ]),
  javascript: new Set([
    "const", "let", "var", "if", "else", "for", "while", "return", "function",
    "Number", "String", "prompt", "console", "log", "true", "false", "null",
    "new", "typeof",
  ]),
  java: new Set([
    "public", "static", "void", "class", "int", "double", "String", "import",
    "java", "util", "Scanner", "System", "out", "in", "if", "else", "new",
    "return", "println", "print", "next", "nextInt", "boolean", "private",
    "protected", "final",
  ]),
  cpp: new Set([
    "int", "double", "include", "define", "iostream", "using", "namespace",
    "std", "if", "else", "return", "cout", "cin", "main", "endl", "void",
    "float", "char", "bool",
  ]),
};

type Tok = { t: string; c: "comment" | "string" | "num" | "kw" | "plain" };

function tokenize(line: string, lang: string): Tok[] {
  const kw = KEYWORDS[lang] ?? new Set<string>();
  const comment = lang === "python" ? "#[^\\n]*" : "\\/\\/[^\\n]*";
  const re = new RegExp(
    "(" +
      comment +
      ')|("(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\')' +
      "|(\\b\\d[\\d.]*\\b)" +
      "|([A-Za-z_]\\w*)" +
      "|(\\s+)" +
      "|(.)",
    "g"
  );
  const out: Tok[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(line))) {
    if (m[1]) out.push({ t: m[1], c: "comment" });
    else if (m[2]) out.push({ t: m[2], c: "string" });
    else if (m[3]) out.push({ t: m[3], c: "num" });
    else if (m[4]) out.push({ t: m[4], c: kw.has(m[4]) ? "kw" : "plain" });
    else if (m[5]) out.push({ t: m[5], c: "plain" });
    else if (m[6]) out.push({ t: m[6], c: "plain" });
  }
  return out;
}

const TOK_CLASS: Record<Tok["c"], string> = {
  comment: "text-zinc-500 italic",
  string: "text-amber-300",
  num: "text-cyan-300",
  kw: "text-violet-300",
  plain: "text-zinc-300",
};

export function CodeShowcase() {
  const [active, setActive] = useState(CODE_SAMPLES[0].id);
  const sample = CODE_SAMPLES.find((s) => s.id === active) ?? CODE_SAMPLES[0];

  return (
    <section id="codice" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Generazione di codice"
            eyebrowClass="text-amber-300"
            title="Lo stesso diagramma, tanti linguaggi"
            subtitle="Disegna una volta la logica: FlowOnline la converte automaticamente nel codice del linguaggio che stai studiando."
          />
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
          {/* flowchart side */}
          <Reveal className="h-full">
            <div className="glass-strong flex h-full flex-col overflow-hidden rounded-2xl ring-1 ring-white/10">
              <WindowChrome title="diagramma di flusso">
                <span className="rounded-full bg-violet-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                  sorgente
                </span>
              </WindowChrome>
              <div className="bg-grid flex flex-1 items-center justify-center bg-[#070a14] p-4">
                <div className="w-full max-w-[340px]">
                  <FlowchartDiagram active={3} />
                </div>
              </div>
            </div>
          </Reveal>

          {/* code side */}
          <Reveal delay={120} className="h-full">
            <div className="glass-strong flex h-full flex-col overflow-hidden rounded-2xl ring-1 ring-white/10">
              {/* tabs */}
              <div className="flex items-center gap-1 border-b border-white/10 bg-white/[0.03] px-3 py-2">
                <div className="mr-1 hidden items-center gap-1.5 sm:flex">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <div className="flex flex-1 flex-wrap gap-1">
                  {CODE_SAMPLES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActive(s.id)}
                      className={cn(
                        "rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-colors",
                        s.id === active
                          ? "bg-white/10 text-white"
                          : "text-zinc-500 hover:text-zinc-300"
                      )}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* code body */}
              <div className="flex-1 overflow-x-auto bg-[#070a14] p-4">
                <pre className="font-mono text-[13px] leading-relaxed">
                  <code>
                    {sample.code.map((line, i) => {
                      const toks = tokenize(line, sample.lang);
                      return (
                        <div key={i} className="flex">
                          <span className="mr-4 inline-block w-6 shrink-0 select-none text-right text-zinc-700">
                            {i + 1}
                          </span>
                          <span className="whitespace-pre">
                            {toks.length === 0 ? (
                              "\u00A0"
                            ) : (
                              toks.map((tk, j) => (
                                <span key={j} className={TOK_CLASS[tk.c]}>
                                  {tk.t}
                                </span>
                              ))
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </code>
                </pre>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-3">
                <span className="text-xs text-zinc-500">
                  Generato dal diagramma soprastante
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-300">
                  sintassi verificata
                  <IconArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
