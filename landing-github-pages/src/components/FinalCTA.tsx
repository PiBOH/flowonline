import { LINKS } from "@/data";
import { IconArrowRight, IconPlay } from "./icons";
import { PrimaryButton, SecondaryButton } from "./ui";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0e1a] px-6 py-16 text-center sm:px-12">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[110px]" />
            <div className="absolute inset-0 bg-grid opacity-40 mask-fade-b" />
          </div>

          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Pronto a costruire il tuo primo{" "}
            <span className="text-gradient">algoritmo?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Apri FlowOnline nel browser e comincia a disegnare. Nessuna
            registrazione, nessun download: solo tu e la tua logica.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href={LINKS.app} className="px-7 py-3.5">
              <IconPlay className="h-4 w-4" />
              Apri l'editor
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </PrimaryButton>
            <SecondaryButton href={LINKS.github} className="px-7 py-3.5">
              Esplora il codice
            </SecondaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
