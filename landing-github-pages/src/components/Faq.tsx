import { useState } from "react";
import { FAQS } from "@/data";
import { cn } from "@/utils/cn";
import { IconChevron } from "./icons";
import { SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Domande frequenti"
            eyebrowClass="text-sky-300"
            title="Tutto quello che vuoi sapere"
          />
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-colors",
                    isOpen
                      ? "border-white/20 bg-white/[0.05]"
                      : "border-white/[0.08] bg-white/[0.02]"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-medium text-white">{f.q}</span>
                    <IconChevron
                      className={cn(
                        "h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-300",
                        isOpen && "rotate-180 text-violet-300"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-400">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
