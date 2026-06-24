import { BENEFITS, LINKS } from "@/data";
import { ICONS } from "./icons";
import { IconArrowRight } from "./icons";
import { PrimaryButton, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

export function WhyBrowser() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/10 via-[#0a0e1a] to-cyan-600/10 p-8 sm:p-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Perché nel browser"
                eyebrowClass="text-fuchsia-300"
                title="Niente installazione, zero ostacoli"
                subtitle="A differenza degli strumenti desktop tradizionali, FlowOnline vive online: aggiornamenti automatici, piena compatibilità e la libertà di lavorare da qualsiasi dispositivo."
              />
              <PrimaryButton href={LINKS.app} className="mt-7">
                Provalo subito
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </PrimaryButton>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((b, i) => {
                const Icon = ICONS[b.icon];
                return (
                  <Reveal key={b.title} delay={i * 90}>
                    <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06]">
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-fuchsia-300 ring-1 ring-white/10">
                        {Icon && <Icon className="h-5 w-5" />}
                      </div>
                      <h3 className="font-semibold text-white">{b.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                        {b.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
