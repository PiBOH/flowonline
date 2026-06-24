import { STEPS } from "@/data";
import { ICONS } from "./icons";
import { SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

export function HowItWorks() {
  return (
    <section id="come-funziona" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-violet-700/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Come funziona"
            eyebrowClass="text-cyan-300"
            title="Dall'idea al codice in tre passaggi"
          />
        </Reveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />

          {STEPS.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.n} delay={i * 110} className="relative">
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="relative z-10 mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-[#0c1120] text-violet-300 shadow-lg shadow-black/40">
                    {Icon && <Icon className="h-6 w-6" />}
                    <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <span className="font-mono text-xs tracking-widest text-zinc-600">
                    {s.n}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-400 md:max-w-none">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
