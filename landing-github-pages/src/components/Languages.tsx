import { LANGUAGES } from "@/data";

/** Striscia scorrevole (marquee) dei linguaggi supportati. */
export function Languages() {
  const items = [...LANGUAGES, ...LANGUAGES];
  return (
    <section className="relative border-y border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-sm font-medium text-zinc-500">
          Esporta il tuo diagramma{" "}
          <span className="text-zinc-300">nei linguaggi più diffusi</span>
        </p>

        <div className="mask-fade-x relative mt-7 overflow-hidden">
          <div className="flex w-max animate-marquee gap-3">
            {items.map((l, i) => (
              <span
                key={`${l}-${i}`}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-sm text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
