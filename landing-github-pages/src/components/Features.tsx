import { FEATURES } from "@/data";
import { cn } from "@/utils/cn";
import { ICONS } from "./icons";
import { SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

export function Features() {
  return (
    <section id="funzionalita" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Funzionalità"
            title="Tutto ciò che serve per pensare come un programmatore"
            subtitle="Un ambiente visuale completo: dal diagramma di flusso all'esecuzione, fino alla generazione automatica del codice."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <Reveal key={f.title} delay={i * 70}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
                  <div
                    className={cn(
                      "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ring-white/10",
                      f.accent
                    )}
                  >
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {f.desc}
                  </p>
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/[0.04] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
