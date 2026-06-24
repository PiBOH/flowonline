import { LINKS } from "@/data";
import { Logo } from "./ui";
import { IconGithub } from "./icons";

const COLS = [
  {
    title: "Progetto",
    links: [
      { label: "Funzionalità", href: "#funzionalita" },
      { label: "Come funziona", href: "#come-funziona" },
      { label: "Generazione codice", href: "#codice" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Risorse",
    links: [
      { label: "Apri l'editor", href: LINKS.app, ext: true },
      { label: "Repository GitHub", href: LINKS.github, ext: true },
      { label: "Ultime release", href: LINKS.releases, ext: true },
      { label: "Flowgorithm", href: "http://www.flowgorithm.org", ext: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#070a14]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Un editor di diagrammi di flusso per il browser, ispirato a
              Flowgorithm. Pensato per studenti, docenti e chi sta imparando a
              programmare.
            </p>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5"
            >
              <IconGithub className="h-4 w-4" />
              PiBOH/flowonline
            </a>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={"ext" in l && l.ext ? "_blank" : undefined}
                      rel={"ext" in l && l.ext ? "noreferrer" : undefined}
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-200"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-zinc-600 sm:flex-row">
          <p>© {new Date().getFullYear()} FlowOnline · progetto open source</p>
          <p>
            Realizzato con cura ispirandosi a{" "}
            <span className="text-zinc-400">Flowgorithm</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
